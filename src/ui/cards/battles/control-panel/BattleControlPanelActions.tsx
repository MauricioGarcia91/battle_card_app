import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { useRouterInfo } from '@/hooks/useRouterInfo';

import { Card } from '@/features/cards/domain/definitions.d';

export function BattleControlPanelActions({
  defender,
  simulateBattle
}: {
  defender: Card | null;
  simulateBattle: () => void;
}) {
  const { updateSearchParams } = useRouterInfo();

  const handleToggleNewOpponent = () => {
    updateSearchParams('defender_id', '');
  };

  return defender ? (
    <Stack
      justifyContent='center'
      alignItems='center'
      flex={1}
      gap={1}>
      <Button
        variant='contained'
        onClick={simulateBattle}
        fullWidth>
        Fight
      </Button>
      <Button
        variant='outlined'
        onClick={handleToggleNewOpponent}
        fullWidth>
        Change Opponent
      </Button>
    </Stack>
  ) : null;
}
