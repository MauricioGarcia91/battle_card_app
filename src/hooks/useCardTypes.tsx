import { useEffect, useState } from 'react';

import { useNetworkStatus } from './useNetworkStatus';
import { searchCardTypes } from '@/lib/actions';

import { CardType } from '@/lib/definitions.d';

export const useCardTypes = () => {
  const [cardTypes, setCardTypes] = useState<CardType[]>([]);
  const { setError } = useNetworkStatus();

  const loadCardTypes = async () => {
    const result = await searchCardTypes();
    if (!result) {
      return setError('Card types not found');
    }

    setCardTypes(result!);
  };

  useEffect(() => {
    loadCardTypes();
  }, []);

  return { cardTypes };
};
