import { useCallback, useRef } from 'react';

function useObserver(
  setPage: (value: React.SetStateAction<number | string>) => void,
  hasLoadMore: boolean,
) {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastRecordElementRef = useCallback(
    (node: any) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasLoadMore) {
          setPage((prev) => Number(prev) + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [hasLoadMore],
  );

  return { lastRecordElementRef };
}

export default useObserver;
