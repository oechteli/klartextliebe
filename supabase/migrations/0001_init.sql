-- =====================================================================
-- Klartext Liebe – Initiales Datenmodell (Vorschlag / Vorbereitung)
-- =====================================================================
-- Dieses Schema ist eine VORBEREITUNG für das spätere Backend.
-- Im MVP wird es noch nicht aktiv genutzt (Formulare laufen als UI-Mock).
--
-- Ausführen: Supabase Dashboard > SQL Editor, oder via Supabase CLI:
--   supabase db push
--
-- Sicherheit: RLS ist überall aktiviert. Die hier hinterlegten Policies
-- sind bewusst restriktiv. Sensible Daten (Fragebogen, Profile) werden
-- nur dem/der jeweiligen Nutzer:in bzw. Admins zugänglich gemacht.
-- TODO: Policies vor Produktivbetrieb fachlich + rechtlich prüfen.
-- =====================================================================

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------
-- Rollen
-- ---------------------------------------------------------------------
do $$
begin
  if not exists (select 1 from pg_type where typname = 'user_role') then
    create type user_role as enum ('visitor', 'member', 'premium_member', 'coach_admin');
  end if;
  if not exists (select 1 from pg_type where typname = 'visibility') then
    create type visibility as enum ('private', 'community', 'public');
  end if;
  if not exists (select 1 from pg_type where typname = 'approval_status') then
    create type approval_status as enum ('pending', 'approved', 'rejected', 'blocked');
  end if;
end$$;

-- ---------------------------------------------------------------------
-- profiles  (1:1 zu auth.users)
-- ---------------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  role user_role not null default 'member',
  display_name text,
  city text,
  region text,
  age_group text,
  -- optionale, sensibel zu behandelnde Felder
  education_level text,                 -- Bildungsniveau (optional)
  professional_background text,         -- beruflicher Hintergrund (optional)
  interests text[],                     -- Interessensgebiete
  conversation_preferences text,        -- Gesprächsvorlieben
  values_profile jsonb,                 -- Werteprofil
  communication_style text,             -- Kommunikationsstil
  attachment_pattern text,              -- Bindungsmuster
  desired_relationship text,            -- gewünschte Beziehungsform
  seeking_preference text,              -- Suchpräferenz (wen suche ich)
  visibility visibility not null default 'private',
  approval_status approval_status not null default 'pending', -- Admin-Freigabe
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- questionnaire_answers  (sensible Rohdaten der Analyse)
-- ---------------------------------------------------------------------
create table if not exists public.questionnaire_answers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete cascade,
  answers jsonb not null,               -- Frage-ID -> Wert
  consent_sensitive boolean not null default false, -- ausdrückliche Einwilligung
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- analysis_results  (Auswertung; später KI-gestützt)
-- ---------------------------------------------------------------------
create table if not exists public.analysis_results (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete cascade,
  answers_id uuid references public.questionnaire_answers (id) on delete set null,
  result jsonb not null,                -- AnalysisResult (siehe types/questionnaire.ts)
  model text,                           -- z. B. 'mock', 'claude-...', 'gpt-...'
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- waitlist  (Community-Warteliste, kein Login nötig)
-- ---------------------------------------------------------------------
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  city text,
  age_group text,
  background text,                      -- Bildungs-/Interessenshintergrund (optional)
  seeking text,                         -- "Was suchst du?"
  good_conversation text,              -- "Was macht ein gutes Gespräch aus?"
  consent boolean not null default false,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- coaching_orders  (Bestellungen; später per Stripe-Webhook befüllt)
-- ---------------------------------------------------------------------
create table if not exists public.coaching_orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete set null,
  offer_key text not null,             -- z. B. 'singlecoaching'
  email text,
  amount_cents integer,
  currency text default 'eur',
  stripe_session_id text,
  status text not null default 'created', -- created | paid | refunded | failed
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- events  (von Admin gepflegt)
-- ---------------------------------------------------------------------
create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  location text,                       -- Stadt oder 'Online'
  is_online boolean not null default false,
  starts_at timestamptz,
  description text,
  capacity integer,
  published boolean not null default false,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- event_registrations
-- ---------------------------------------------------------------------
create table if not exists public.event_registrations (
  id uuid primary key default gen_random_uuid(),
  event_id uuid references public.events (id) on delete cascade,
  user_id uuid references auth.users (id) on delete set null,
  name text,
  email text,
  status text not null default 'interested', -- interested | confirmed | cancelled
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- community_posts
-- ---------------------------------------------------------------------
create table if not exists public.community_posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid references auth.users (id) on delete cascade,
  group_key text,                      -- Stadt- oder Themengruppe
  title text,
  body text not null,
  is_hidden boolean not null default false, -- Moderation
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- marketplace_profiles  (kuratierte Matching-Profile)
-- ---------------------------------------------------------------------
create table if not exists public.marketplace_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete cascade,
  headline text,
  about text,
  city text,
  age_group text,
  desired_relationship text,
  values_profile jsonb,
  communication_style text,
  visibility visibility not null default 'private',
  approval_status approval_status not null default 'pending', -- Admin-Freigabe nötig
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- match_suggestions  (vom System/Admin erzeugt)
-- ---------------------------------------------------------------------
create table if not exists public.match_suggestions (
  id uuid primary key default gen_random_uuid(),
  for_user uuid references auth.users (id) on delete cascade,
  suggested_user uuid references auth.users (id) on delete cascade,
  score numeric,                       -- Orientierungswert, KEINE Garantie
  reasons jsonb,                       -- begründende Faktoren
  curated_by uuid references auth.users (id), -- optional: Admin-Kuratierung
  status text not null default 'suggested', -- suggested | accepted | declined
  created_at timestamptz not null default now(),
  unique (for_user, suggested_user)
);

-- =====================================================================
-- Row Level Security
-- =====================================================================
alter table public.profiles enable row level security;
alter table public.questionnaire_answers enable row level security;
alter table public.analysis_results enable row level security;
alter table public.waitlist enable row level security;
alter table public.coaching_orders enable row level security;
alter table public.events enable row level security;
alter table public.event_registrations enable row level security;
alter table public.community_posts enable row level security;
alter table public.marketplace_profiles enable row level security;
alter table public.match_suggestions enable row level security;

-- Hilfsfunktion: ist aktueller User Admin/Coach?
create or replace function public.is_admin()
returns boolean
language sql stable
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'coach_admin'
  );
$$;

-- profiles: eigene Zeile lesen/ändern; Admin alles
drop policy if exists "profiles_self_select" on public.profiles;
create policy "profiles_self_select" on public.profiles
  for select using (auth.uid() = id or public.is_admin());
drop policy if exists "profiles_self_modify" on public.profiles;
create policy "profiles_self_modify" on public.profiles
  for all using (auth.uid() = id or public.is_admin())
  with check (auth.uid() = id or public.is_admin());

-- questionnaire_answers & analysis_results: nur eigene Daten + Admin
drop policy if exists "qa_owner" on public.questionnaire_answers;
create policy "qa_owner" on public.questionnaire_answers
  for all using (auth.uid() = user_id or public.is_admin())
  with check (auth.uid() = user_id);
drop policy if exists "ar_owner" on public.analysis_results;
create policy "ar_owner" on public.analysis_results
  for all using (auth.uid() = user_id or public.is_admin())
  with check (auth.uid() = user_id);

-- waitlist: jede:r darf eintragen (insert), nur Admin darf lesen
drop policy if exists "waitlist_insert_any" on public.waitlist;
create policy "waitlist_insert_any" on public.waitlist
  for insert with check (true);
drop policy if exists "waitlist_admin_read" on public.waitlist;
create policy "waitlist_admin_read" on public.waitlist
  for select using (public.is_admin());

-- events: alle dürfen veröffentlichte lesen; Admin schreibt
drop policy if exists "events_public_read" on public.events;
create policy "events_public_read" on public.events
  for select using (published or public.is_admin());
drop policy if exists "events_admin_write" on public.events;
create policy "events_admin_write" on public.events
  for all using (public.is_admin()) with check (public.is_admin());

-- event_registrations: eigene + Admin
drop policy if exists "ereg_owner" on public.event_registrations;
create policy "ereg_owner" on public.event_registrations
  for all using (auth.uid() = user_id or public.is_admin())
  with check (true);

-- community_posts: sichtbare lesen (Mitglieder), eigene schreiben, Admin moderiert
drop policy if exists "posts_read" on public.community_posts;
create policy "posts_read" on public.community_posts
  for select using ((not is_hidden) or public.is_admin());
drop policy if exists "posts_author_write" on public.community_posts;
create policy "posts_author_write" on public.community_posts
  for insert with check (auth.uid() = author_id);
drop policy if exists "posts_author_update" on public.community_posts;
create policy "posts_author_update" on public.community_posts
  for update using (auth.uid() = author_id or public.is_admin());

-- marketplace_profiles: nur freigegebene + community-sichtbare lesen; eigene bearbeiten
drop policy if exists "mp_read" on public.marketplace_profiles;
create policy "mp_read" on public.marketplace_profiles
  for select using (
    public.is_admin()
    or auth.uid() = user_id
    or (approval_status = 'approved' and visibility in ('community', 'public'))
  );
drop policy if exists "mp_owner_write" on public.marketplace_profiles;
create policy "mp_owner_write" on public.marketplace_profiles
  for all using (auth.uid() = user_id or public.is_admin())
  with check (auth.uid() = user_id);

-- match_suggestions: nur Betroffene + Admin
drop policy if exists "match_read" on public.match_suggestions;
create policy "match_read" on public.match_suggestions
  for select using (auth.uid() = for_user or public.is_admin());
drop policy if exists "match_admin_write" on public.match_suggestions;
create policy "match_admin_write" on public.match_suggestions
  for all using (public.is_admin()) with check (public.is_admin());

-- coaching_orders: eigene lesen; Insert i. d. R. serverseitig (Service Role)
drop policy if exists "orders_owner_read" on public.coaching_orders;
create policy "orders_owner_read" on public.coaching_orders
  for select using (auth.uid() = user_id or public.is_admin());

-- =====================================================================
-- Hinweise / TODO
-- =====================================================================
-- 1) Trigger anlegen, der nach auth.users-Insert automatisch eine
--    profiles-Zeile erstellt (role = 'member').
-- 2) updated_at per Trigger pflegen.
-- 3) coaching_orders i. d. R. über Stripe-Webhook (Service Role) befüllen.
-- 4) Sensible Felder ggf. zusätzlich verschlüsseln / pseudonymisieren.
-- 5) Lösch- und Auskunftsprozesse (DSGVO Art. 15/17) vorsehen.
