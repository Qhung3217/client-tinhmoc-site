import { useRef, useMemo, useState, useEffect } from 'react';

type UseOnScreenReturn = [elementRef: React.RefObject<HTMLElement>, offsetTop: boolean];
export default function useOnScreen(option?: IntersectionObserverInit): UseOnScreenReturn {
  const [isIntersecting, setIntersecting] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  const observer = useMemo(
    () => new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), option),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [elementRef]
  );

  useEffect(() => {
    if (elementRef) observer.observe(elementRef.current!);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef]);

  return [elementRef, isIntersecting];
}
