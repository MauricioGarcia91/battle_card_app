import Link from 'next/link';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function HomePage() {
  return (
    <Box
      component='main'
      className='container'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      gap='3rem'>
      <Typography
        variant='h2'
        component='h1'>
        Cook Unity Challenge
      </Typography>
      <Link href='/cards'>
        <Button variant='contained'>Search Cards</Button>
      </Link>
    </Box>
  );
}
