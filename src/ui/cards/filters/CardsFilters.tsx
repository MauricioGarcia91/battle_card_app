import Stack from '@mui/material/Stack';

import { CardSearchText } from './CardSearchText';
import { CardTypesSelector } from '../../card-types/filters/CardTypesSelector';
import { CardLimitSelector } from './CardLimitSelector';

export function CardsFilters() {
  return (
    <Stack
      gap={2}
      alignItems='center'>
      <Stack
        direction='row'
        alignItems='end'
        gap={2}>
        <CardSearchText />
        <CardLimitSelector />
      </Stack>
      <CardTypesSelector />
    </Stack>
  );
}
