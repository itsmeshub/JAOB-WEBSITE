import { useEffect } from "react";

/**
 * Sends the browser to an external (Laravel/PHP) URL. Used to keep old
 * in-app paths (e.g. /admission/apply, /student/login) from ever rendering
 * the retired React pages, even if someone hits the URL directly.
 */
export function ExternalRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return null;
}
