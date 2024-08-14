import Link from 'next/link';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { search } from '@/features/cards/adapters/container-di';

import { SearchCardsParams } from '@/features/cards/domain/definitions.d';

export async function CardList({
  searchParams
}: {
  searchParams: SearchCardsParams;
}) {
  const cards = await search(searchParams);

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
    <Grid
      container
      gap={3}>
      {cards?.map((card) => (
        <Grid
          item
          key={card.id}>
          <Link
            href={`/cards/${card.id}`}
            passHref
            style={{ textDecoration: 'none' }}>
            <Card component={Stack}>
              <Image
                src={card.imgUrl}
                alt={card.name}
                width={250}
                height={150}
                loading='lazy'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='h2'>
                  {card.name}
                </Typography>
                <Typography>{`Type: ${card.type.name}`}</Typography>
                <Typography>{`HP: ${card.hp}`}</Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
