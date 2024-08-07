import dayjs from 'dayjs';
import { useMemo } from 'react';

import { fIsAfter } from 'src/utils/format-time';

type Props = {
  salePercent: number;
  price: string;
  createdAt: string;
};
export const useGetSaleInfo = ({ salePercent, price, createdAt }: Props) => {
  const isSale = useMemo(() => !!salePercent, [salePercent]);

  const isNew = useMemo(() => {
    const sevenDaysNext = dayjs(createdAt).add(7, 'day').startOf('day');

    return fIsAfter(sevenDaysNext, Date.now());
  }, [createdAt]);

  const priceSale = useMemo(() => {
    if (price === '') return '';
    const pNumber = Number(price);
    return pNumber - pNumber * (salePercent / 100);
  }, [price, salePercent]);

  return {
    isSale,
    isNew,
    priceSale,
  };
};
