'use client';
import Box from '@mui/material/Box';
import AlertMUI from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import { useNetworkStatus } from '@/hooks/useNetworkStatus';

import { styled } from '@mui/material/styles';

export const Loader = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 9999
}));

const Alert = styled(AlertMUI)(({ theme }) => ({
  width: '300px',
  margin: '0 auto',
  right: 0
}));

export function NetworkStatus({ children }: { children: React.ReactNode }) {
  const { loading, error, setError } = useNetworkStatus();

  return (
    <Box className='container'>
      {loading && <Loader />}
      {children}
      {error && (
        <Snackbar
          open={true}
          autoHideDuration={6000}
          onClose={() => setError('')}>
          <Alert
            onClose={() => setError('')}
            severity='error'
            variant='filled'>
            {error}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
}
