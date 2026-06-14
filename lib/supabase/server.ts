/**
 * Supabase-Client für den Server (Server Components, Route Handlers,
 * Server Actions). Liest/schreibt Auth-Cookies.
 *
 * TODO: Sobald Auth aktiv ist, hier Session-Handling & RLS-konforme
 * Queries verwenden. Service-Role-Key NIEMALS hier verwenden, sondern
 * nur in dedizierten, geschützten Admin-Routen.
 */
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export function createServerSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return null;
  }

  const cookieStore = cookies();

  return createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // In reinen Server Components ist set() ggf. nicht erlaubt – ok im MVP.
        }
      },
    },
  });
}
