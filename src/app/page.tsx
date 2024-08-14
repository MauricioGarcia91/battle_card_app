import Link from 'next/link';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function HomePage() {
  return (
    <Stack
      flex={1}
      gap={2}
      alignItems='center'
      justifyContent='center'>
      <Typography
        component='h1'
        variant='h4'>
        Battle Card Game
      </Typography>
      <Link href='/cards'>
        <Button variant='contained'>Search Cards</Button>
      </Link>
    </Stack>
  );
}
