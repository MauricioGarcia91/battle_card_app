import Box from '@mui/material/Box';
import CardMui from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { BattleControlPanelActions } from './BattleControlPanelActions';
import { SearchCardOpponent } from './SearchCardOpponent';

import { Card } from '@/lib/definitions.d';

interface BattleControlPanelProps {
  cards: Card[];
  attacker: Card | null;
  defender: Card | null;
  simulateBattle: () => void;
}

export function BattleControlPanel({
  cards,
  defender,
  attacker,
  simulateBattle
}: BattleControlPanelProps) {
  return (
    <CardMui
      width={300}
      height={400}
      component={Box}
      display='flex'>
      <CardContent
        component={Box}
        display='flex'
        flexDirection='column'
        flexGrow={1}>
        <Typography
          variant='h5'
          gutterBottom
          textAlign='center'
          noWrap>
          Battle Arena
        </Typography>
        {defender ? (
          <BattleControlPanelActions simulateBattle={simulateBattle} />
        ) : (
          <SearchCardOpponent
            cards={cards}
            attacker={attacker}
          />
        )}
      </CardContent>
    </CardMui>
  );
}
