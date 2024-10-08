import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { CardSearchText } from '../../filters/CardSearchText';

import { useRouterInfo } from '@/hooks/useRouterInfo';

import { Card } from '@/features/cards/domain/definitions.d';

export function BattleControlPanelOpponentSelector({
  cards,
  attacker,
  defender
}: {
  cards: Card[];
  attacker: Card | null;
  defender: Card | null;
}) {
  const { updateSearchParams, q, weakness, resistance } = useRouterInfo();

  const selectDefender = (cardId: string) => {
    updateSearchParams('defender_id', cardId);
  };

  const handleTypeToggleSuggestOpponent = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.checked) {
      updateSearchParams(event.target.name, attacker?.type.id!);
    } else {
      updateSearchParams(event.target.name, '');
    }
  };

  return !defender ? (
    <Stack
      alignItems='start'
      gap={1}>
      <Typography
        variant='subtitle1'
        textAlign='center'
        noWrap>
        <strong>Suggest an opponent</strong>
      </Typography>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={!!weakness}
              onChange={handleTypeToggleSuggestOpponent}
              name='weakness'
              color='success'
            />
          }
          label='Weaker'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={!!resistance}
              onChange={handleTypeToggleSuggestOpponent}
              color='error'
              name='resistance'
            />
          }
          label='Resistant'
        />
      </FormGroup>
      <Typography
        variant='subtitle1'
        textAlign='center'
        noWrap>
        <strong>Search an opponent</strong>
      </Typography>
      <CardSearchText />
      {cards.length > 0 ? (
        <List
          sx={{
            maxHeight: '100px',
            overflowY: 'auto',
            width: '100%'
          }}>
          {cards?.map((card: any) => (
            <ListItemButton
              key={card.id}
              onClick={() => selectDefender(card.id)}>
              <ListItemText primary={card.name} />
            </ListItemButton>
          ))}
        </List>
      ) : (
        (q || weakness || resistance) && (
          <Typography
            variant='h6'
            color='#f43f5e'>
            No se encontraron cartas, cambia la busqueda
          </Typography>
        )
      )}
    </Stack>
  ) : null;
}
