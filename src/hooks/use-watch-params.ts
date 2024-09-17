import { useMemo, useState } from 'react';
import { isEqual, cloneDeep } from 'lodash';

import { useSearchParams } from 'src/routes/hooks';

export default function useWatchParams(params: string | string[]) {
  const searchParams = useSearchParams();
  const [state] = useState<{
    [key: string]: string | null;
  }>(() => {
    if (Array.isArray(params)) {
      return params.reduce((obj, key) => ({ ...obj, [key]: '' }), {});
    }
    return {
      [params]: '',
    };
  });

  const memoizedValue = useMemo(() => {
    const keys = Object.keys(state);
    const newObj = cloneDeep(state);
    keys.forEach((key) => {
      newObj[key] = searchParams.get(key);
    });

    if (!isEqual(state, newObj)) {
      return newObj;
    }

    return state;
  }, [state, searchParams]);

  return memoizedValue;
}
