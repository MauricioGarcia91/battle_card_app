import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

import { useDebouncedCallback } from 'use-debounce';
import { useRouterInfo } from '@/hooks/useRouterInfo';

export function SearchCardText() {
  const { q, updateSearchParams } = useRouterInfo();

  const handleSearchText = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      updateSearchParams(name, value);
    },
    400
  );

  return (
    <TextField
      variant='outlined'
      placeholder='Search cards..'
      name='q'
      defaultValue={q}
      onChange={handleSearchText}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        ),
        sx: { borderRadius: 4 }
      }}
    />
  );
}
