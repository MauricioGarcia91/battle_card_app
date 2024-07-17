'use client';
import Box from '@mui/material/Box';
import { useBattle } from '@/hooks/useBattle';
import { BattleCard } from '@/ui/BattleCard';
import { BattleControlPanel } from '@/ui/BattleControlPanel/BattleControlPanel';
import { BattleResults } from '@/ui/BattleResults';

export default function BattlePage() {
  const {
    cards,
    attacker,
    defender,
    battleResult,
    simulateBattle,
    clearBattle
  } = useBattle();

  return (
    <Box
      component='main'
      className='container'
      display='flex'
      flexDirection='row'
      alignItems='center'
      p='0 25rem'
      gap='3rem'>
      <BattleCard
        role='attacker'
        card={attacker}
      />
      <BattleControlPanel
        cards={cards}
        attacker={attacker}
        defender={defender}
        simulateBattle={simulateBattle}
      />
      {defender && (
        <BattleCard
          role='defender'
          card={defender}
        />
      )}
      {battleResult && (
        <BattleResults
          attacker={attacker!}
          defender={defender!}
          battleResult={battleResult}
          onClose={clearBattle}
        />
      )}
    </Box>
  );
}
