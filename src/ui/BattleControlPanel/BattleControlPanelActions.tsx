import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useRouterInfo } from '@/hooks/useRouterInfo';

export function BattleControlPanelActions({
  simulateBattle
}: {
  simulateBattle: () => void;
}) {
  const { updateSearchParams } = useRouterInfo();

  const handleToggleNewOpponent = () => {
    updateSearchParams('defender_id', '');
  };

  return (
    <Box
      display='flex'
      flexGrow={1}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      gap='2rem'>
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
    </Box>
  );
}
