'use client';
import { useEffect, useState } from 'react';

import { search } from '@/features/card-types/adapters/container-di';
import { useNetworkStatus } from './useNetworkStatus';

import { CardType } from '@/features/card-types/domain/definitions.d';

export const useCardTypes = () => {
  const [cardTypes, setCardTypes] = useState<CardType[]>([]);
  const { setError } = useNetworkStatus();

  const loadCardTypes = async () => {
    const result = await search();

    if (!result) {
      return setError('Card types not found');
    }

    setCardTypes(result!);
  };

  useEffect(() => {
    if (cardTypes.length === 0) {
      loadCardTypes();
    }
  }, []);

  return { cardTypes };
};
