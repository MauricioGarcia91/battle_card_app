import Link from 'next/link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import { BattleResult, Card } from '@/lib/definitions.d';

interface BattleResultsProps {
  attacker: Card;
  defender: Card;
  battleResult: BattleResult;
  onClose: () => void;
}
export function BattleResults({
  battleResult,
  attacker,
  onClose
}: BattleResultsProps) {
  const title = battleResult.win ? 'Winner' : 'Lost';

  return (
    <Modal
      open={true}
      onClose={onClose}
      aria-labelledby='battle-result-modal'>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'white',
          boxShadow: 24,
          p: 4,
          outline: 'none',
          borderRadius: 8
        }}>
        <Box
          padding='2rem'
          alignItems='center'>
          <Typography
            id='battle-result-modal'
            variant='h4'
            gutterBottom
            textAlign='center'
            sx={{
              color: battleResult.win ? 'green' : 'red'
            }}>
            {title}
          </Typography>
          <Typography
            variant='body2'
            gutterBottom>
            <strong>Attacker Ability: </strong> {attacker.ability}
          </Typography>
          <Typography
            variant='body2'
            gutterBottom>
            <strong>Attack Power: </strong> {attacker.attackPower}
          </Typography>
          <Typography
            variant='body2'
            gutterBottom>
            <strong>Total Attack Power Applied: </strong>
            {battleResult.attackerPowerDamage}
          </Typography>
          <Typography
            variant='body2'
            gutterBottom>
            <strong>{`Defender's Initial HP: `}</strong>
            {battleResult.defenderHp}
          </Typography>
          <Typography variant='body2'>
            <strong>{`Defender's Remaining HP: `}</strong>
            {battleResult.defenderRemainingHp}
          </Typography>
        </Box>
        <Box
          display='flex'
          justifyContent='center'
          gap='2rem'
          marginTop='1rem'>
          <Link
            href='/cards'
            passHref>
            <Button
              variant='contained'
              color='primary'>
              Back to Cards
            </Button>
          </Link>
          <Button
            variant='contained'
            onClick={onClose}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
