import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

import { getById } from '@/features/cards/adapters/container-di';

export async function CardDetail({
  cardId,
  role
}: {
  cardId: string;
  role: 'attacker' | 'defender';
}) {
  const card = await getById(cardId);

  const title = role === 'attacker' ? 'Your card' : 'Your opponent';

  return (
    <Stack
      component={Paper}
      gap={2}
      p={2}>
      {!card ? (
        <Typography
          variant='h6'
          align='center'>
          Failed to load card information.
        </Typography>
      ) : (
        <>
          <Typography
            variant='h6'
            align='center'>
            {title}
          </Typography>
          <Image
            src={card.imgUrl}
            alt={card.name}
            width={250}
            height={150}
            loading='lazy'
          />
          <Stack
            justifyContent='space-between'
            alignItems='baseline'>
            <Typography
              variant='h6'
              noWrap>
              {card.name}
            </Typography>
          </Stack>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='baseline'>
            <Chip
              label={card.type.name}
              size='small'
            />
            <Typography variant='body2'>{`HP: ${card.hp}`}</Typography>
          </Stack>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='baseline'>
            <Typography
              variant='body2'
              noWrap>
              ATK: <strong>{card.ability}</strong>
            </Typography>
            <Typography variant='caption'>
              <strong>{`PS: ${card.attackPower}`}</strong>
            </Typography>
          </Stack>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'>
            <Chip
              label={`RES: ${card.resistance.name} -${card.resistancePoint}`}
              size='small'
              color='success'
              variant='outlined'
            />
            <Chip
              label={`WKN: ${card.weakness.name} X${card.weaknessPoint}`}
              size='small'
              color='error'
              variant='outlined'
            />
          </Stack>
        </>
      )}
    </Stack>
  );
}
