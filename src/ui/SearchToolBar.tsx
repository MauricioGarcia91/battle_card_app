'use client';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import { SearchCardText } from './SearchCardText';

import { useRouterInfo } from '@/hooks/useRouterInfo';
import { useCardTypes } from '@/hooks/useCardTypes';

import { CardType } from '@/lib/definitions.d';

const LIMIT_TO_SEARCH = ['2', '5', '10'];

export function SearchToolBar() {
  const { limit, updateSearchParams, cardType } = useRouterInfo();
  const { cardTypes } = useCardTypes();

  const handleLimitChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;

    updateSearchParams(name, value);
  };

  const handleCardTypeToggle = (newCardType: CardType) => {
    if (cardType === newCardType.id) {
      return updateSearchParams('card_type', '');
    }

    updateSearchParams('card_type', newCardType.id);
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      gap='1rem'>
      <Box
        display='flex'
        flexDirection='row'
        alignItems='end'
        gap='2rem'>
        <SearchCardText />
        <Box minWidth={120}>
          <InputLabel id='limit-label'>Limit</InputLabel>
          <Select
            labelId='limit-label'
            value={limit}
            name='limit'
            onChange={handleLimitChange}
            label='Limit'
            fullWidth>
            {LIMIT_TO_SEARCH.map((limit) => (
              <MenuItem
                key={limit}
                value={limit}>
                {limit}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
      <Box
        display='flex'
        flexWrap='wrap'
        gap={1}
        minHeight={40}
        visibility={cardTypes.length > 0 ? 'visible' : 'hidden'}>
        {cardTypes?.map((cardTypeEl) => (
          <Chip
            key={cardTypeEl.id}
            label={cardTypeEl.name}
            clickable
            color={cardTypeEl.id === cardType ? 'primary' : 'default'}
            onClick={() => handleCardTypeToggle(cardTypeEl)}
            sx={{ borderRadius: 2 }}
          />
        ))}
      </Box>
    </Box>
  );
}
