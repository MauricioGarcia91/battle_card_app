import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { searchCards } from '@/lib/actions';

import { SearchCardsParams } from '@/lib/definitions.d';

export async function CardList({
  searchParams
}: {
  searchParams: SearchCardsParams;
}) {
  const cards = await searchCards(searchParams);

  if (!cards || cards.length === 0) {
    return (
      <Typography
        variant='h6'
        align='center'>
        No cards found, change your search or try again later.
      </Typography>
    );
  }

  return (
    <Container maxWidth='sm'>
      <Grid
        container
        spacing={4}>
        {cards?.map((card) => (
          <Grid
            item
            key={card.id}
            xs={12}
            sm={6}
            md={4}>
            <Link
              href={`/cards/${card.id}`}
              passHref
              style={{ textDecoration: 'none' }}>
              <Card
                component={Box}
                height='100%'
                display='flex'
                flexDirection='column'>
                <Box
                  position='relative'
                  width='100%'
                  height={150}>
                  <Image
                    src={card.imgUrl}
                    alt={card.name}
                    layout='fill'
                    loading='lazy'
                  />
                </Box>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='h2'>
                    {card.name}
                  </Typography>
                  <Typography>Type: {card.type.name}</Typography>
                  <Typography>HP: {card.hp}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
