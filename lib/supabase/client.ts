/**
 * Supabase-Client für den Browser (Client Components).
 *
 * MVP: Die Plattform funktioniert komplett ohne aktive Supabase-Verbindung
 * (Formulare laufen als UI-Prototyp). Sobald die env-Variablen gesetzt sind,
 * kann z. B. das Wartelistenformular direkt in die `waitlist`-Tabelle schreiben.
 *
 * TODO: In Formularen createBrowserSupabaseClient() nutzen, sobald Auth/DB steht.
 */
import { createBrowserClient } from "@supabase/ssr";

export function createBrowserSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    // Im MVP bewusst kein harter Fehler – nur ein Hinweis in der Konsole.
    console.warn(
      "[Supabase] NEXT_PUBLIC_SUPABASE_URL / ANON_KEY fehlen – Client ist im Mock-Modus."
    );
    return null;
  }

  return createBrowserClient(url, anonKey);
}

/** Praktischer Flag für die UI: Ist Supabase überhaupt konfiguriert? */
export const isSupabaseConfigured =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
