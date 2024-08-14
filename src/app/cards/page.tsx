import { Suspense } from 'react';

import Stack from '@mui/material/Stack';

import { CardList } from '@/ui/cards/CardList';
import { CardsFilters } from '@/ui/cards/filters/CardsFilters';

import { CardListSkeleton } from '@/ui/cards/skeletons/CardListSkeleton';

import { SearchCardsParams } from '@/features/cards/domain/definitions.d';

export default function CardsPage({
  searchParams
}: {
  searchParams: SearchCardsParams;
}) {
  return (
    <Stack
      maxWidth='md'
      flex={1}
      margin='0 auto'
      gap={2}>
      <CardsFilters />
      <Suspense fallback={<CardListSkeleton />}>
        <CardList searchParams={searchParams} />
      </Suspense>
    </Stack>
  );
}
