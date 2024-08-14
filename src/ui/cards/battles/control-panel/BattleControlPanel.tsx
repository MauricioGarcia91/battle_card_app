'use client';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { BattleControlPanelActions } from './BattleControlPanelActions';
import { BattleControlPanelOpponentSelector } from './BattleControlPanelOpponentSelector';
import { BattleResults } from '../BattleResults';

import { useBattle } from '@/hooks/useBattle';

export function BattleControlPanel() {
  const {
    cards,
    defender,
    attacker,
    battleResult,
    clearBattle,
    simulateBattle
  } = useBattle();

  return (
    <>
      <Stack
        component={Paper}
        width={250}
        gap={2}
        padding={2}>
        <Typography
          variant='h5'
          textAlign='center'
          noWrap>
          Battle Arena
        </Typography>
        <BattleControlPanelActions
          defender={defender}
          simulateBattle={simulateBattle}
        />
        <BattleControlPanelOpponentSelector
          cards={cards}
          attacker={attacker}
          defender={defender}
        />
      </Stack>
      {battleResult && (
        <BattleResults
          attacker={attacker!}
          defender={defender!}
          battleResult={battleResult}
          onClose={clearBattle}
        />
      )}
    </>
  );
}
