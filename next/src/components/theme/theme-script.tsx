/**
 * Blocking inline script — runs before first paint to reconcile the theme class
 * on <html> with the persisted choice / OS preference, so there's no flash.
 *
 * Must be a raw <script> (not next/script, not a client component): it has to
 * execute synchronously in <head> ahead of hydration. <html> carries
 * `suppressHydrationWarning` because this mutates its className / colorScheme.
 */

export const THEME_STORAGE_KEY = 'ltw:theme';

const script = `(function(){try{
  var key=${JSON.stringify(THEME_STORAGE_KEY)};
  var stored=localStorage.getItem(key);
  var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;
  var dark=stored?stored==='dark':prefersDark;
  var el=document.documentElement;
  el.classList.toggle('dark',dark);
  el.classList.toggle('light',!dark);
  el.style.colorScheme=dark?'dark':'light';
}catch(e){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
