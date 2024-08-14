import { Suspense } from 'react';
import Stack from '@mui/material/Stack';

import { CardDetail } from '@/ui/cards/CardDetail';
import { BattleControlPanel } from '@/ui/cards/battles/control-panel/BattleControlPanel';

export default function CardDetailPage({
  params,
  searchParams
}: {
  params: { id: string };
  searchParams: {
    defender_id: string;
  };
}) {
  return (
    <Stack
      direction='row'
      gap={2}>
      <Suspense>
        <CardDetail
          cardId={params.id}
          role='attacker'
        />
      </Suspense>
      <BattleControlPanel />
      {searchParams.defender_id && (
        <Suspense>
          <CardDetail
            cardId={searchParams.defender_id}
            role='defender'
          />
        </Suspense>
      )}
    </Stack>
  );
}
