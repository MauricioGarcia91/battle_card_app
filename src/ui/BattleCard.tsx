'use client';
import Image from 'next/image';
import CardMui from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';

import { useNetworkStatus } from '@/hooks/useNetworkStatus';

import { Card } from '@/lib/definitions.d';

const ChipAttributes = styled(Chip)(({ theme }) => ({
  fontSize: '0.75rem',
  height: 20
}));

export function BattleCard({
  card,
  role
}: {
  card: Card | null;
  role: 'attacker' | 'defender';
}) {
  const { loading } = useNetworkStatus();

  const title = role === 'attacker' ? 'Your card' : 'Your opponent';

  return (
    <CardMui
      width={300}
      height={400}
      component={Box}
      paddingY='1rem'
      visibility={loading ? 'hidden' : 'visible'}>
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
            noWrap
            textAlign='center'>
            {title}
          </Typography>
          <Box
            position='relative'
            textAlign='center'>
            <Image
              src={card.imgUrl}
              alt={card.name}
              width={150}
              height={150}
              loading='lazy'
            />
          </Box>
          <CardContent
            component={Box}
            display='flex'
            flexDirection='column'
            gap='1rem'>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='baseline'>
              <Typography
                variant='h6'
                noWrap>
                {card.name}
              </Typography>
            </Box>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='baseline'>
              <Chip
                label={card.type.name}
                size='small'
              />
              <Typography variant='body2'>{`HP: ${card.hp}`}</Typography>
            </Box>
            <Box
              display='flex'
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
            </Box>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'>
              <ChipAttributes
                label={`RES: ${card.resistance.name} -${card.resistancePoint}`}
                size='small'
                color='success'
                variant='outlined'
              />
              <ChipAttributes
                label={`WKN: ${card.weakness.name} X${card.weaknessPoint}`}
                size='small'
                color='error'
                variant='outlined'
              />
            </Box>
          </CardContent>
        </>
      )}
    </CardMui>
  );
}
