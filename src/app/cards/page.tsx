import { Suspense } from 'react';

import Box from '@mui/material/Box';

import { CardList } from '@/ui/CardList';
import { SearchToolBar } from '@/ui/SearchToolBar';
import { CardListSkeleton } from '@/ui/skeletons/CardListSkeleton';

import { SearchCardsParams } from '@/lib/definitions.d';

export default function CardsPage({
  searchParams
}: {
  searchParams: SearchCardsParams;
}) {
  return (
    <Box
      component='main'
      className='container'
      flexDirection='column'
      alignItems='center'
      maxHeight='100%'
      p='3rem'
      gap='3rem'>
      <SearchToolBar />
      <Suspense fallback={<CardListSkeleton />}>
        <CardList searchParams={searchParams} />
      </Suspense>
    </Box>
  );
}
