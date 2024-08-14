'use client';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

import { useCardTypes } from '@/hooks/useCardTypes';
import { useRouterInfo } from '@/hooks/useRouterInfo';
import { CardType } from '@/features/card-types/domain/definitions.d';

export function CardTypesSelector() {
  const { cardTypes } = useCardTypes();
  const { cardType, updateSearchParams } = useRouterInfo();

  const handleCardTypeToggle = (newCardType: CardType) => {
    if (cardType === newCardType.id) {
      return updateSearchParams('card_type', '');
    }

    updateSearchParams('card_type', newCardType.id);
  };

  return (
    <Stack
      direction='row'
      flexWrap='wrap'
      gap={1}
      minHeight={40}>
      {cardTypes?.map((cardTypeEl) => (
        <Chip
          key={cardTypeEl.id}
          label={cardTypeEl.name}
          clickable
          color={cardTypeEl.id === cardType ? 'primary' : 'default'}
          onClick={() => handleCardTypeToggle(cardTypeEl)}
          sx={{ borderRadius: 2 }}
        />
      ))}
    </Stack>
  );
}
