'use client';

import { useEffect, useState } from 'react';

/** Current vertical scroll offset (`window.scrollY`), updated on scroll. */
export function useWindowScroll(): number {
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return y;
}
