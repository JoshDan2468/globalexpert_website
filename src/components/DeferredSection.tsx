import { Suspense, useEffect, useRef, useState, type ReactNode } from "react";

type DeferredSectionProps = {
  children: ReactNode;
  minHeight?: string;
  rootMargin?: string;
};

const DeferredSection = ({
  children,
  minHeight = "280px",
  rootMargin = "320px",
}: DeferredSectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node || shouldRender) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  return (
    <div ref={ref} style={{ minHeight: shouldRender ? undefined : minHeight }}>
      {shouldRender ? (
        <Suspense fallback={<div style={{ minHeight }} aria-hidden='true' />}>
          {children}
        </Suspense>
      ) : null}
    </div>
  );
};

export default DeferredSection;
