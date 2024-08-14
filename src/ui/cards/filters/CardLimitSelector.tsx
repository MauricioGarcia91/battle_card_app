'use client';
import Stack from '@mui/material/Stack';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useRouterInfo } from '@/hooks/useRouterInfo';

const LIMIT_TO_SEARCH = ['2', '5', '10'];

export function CardLimitSelector() {
  const { limit, updateSearchParams } = useRouterInfo();

  const handleLimitChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;

    updateSearchParams(name, value);
  };

  return (
    <Stack
      minWidth={120}
      gap={1}>
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
    </Stack>
  );
}
