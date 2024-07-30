import { useCallback } from 'react';
import { useNavigate } from 'react-router';

import { useSearchParams } from 'src/routes/hooks';

export default function useQueryParams(path: string, preventScroll: boolean = false) {
  const searchParams = useSearchParams();
  const navigate = useNavigate();

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams as any);
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      navigate(`${path}?${params.toString()}`, {
        preventScrollReset: !preventScroll,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchParams]
  );

  const updateParams = useCallback(
    (params: string | URLSearchParams | string[][] | Record<string, string> | undefined) => {
      const url = new URLSearchParams(params);

      navigate(`${path}?${url.toString()}`, {
        preventScrollReset: !preventScroll,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchParams]
  );

  const getParam = useCallback((key: string) => searchParams.get(key), [searchParams]);

  const getParams = useCallback(
    (keys: string[]): Record<string, string> => {
      const result: any = {};
      keys.forEach((key) => {
        result[key] = searchParams.get(key);
      });

      return result;
    },
    [searchParams]
  );

  return {
    searchParams,
    updateParam,
    updateParams,
    getParam,
    getParams,
  };
}
