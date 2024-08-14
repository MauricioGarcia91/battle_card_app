import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export function Error({
  message,
  onClose
}: {
  message: string;
  onClose: () => void;
}) {
  return (
    <Snackbar
      open={true}
      autoHideDuration={6000}
      onClose={onClose}>
      <Alert
        onClose={onClose}
        severity='error'
        variant='filled'>
        {message}
      </Alert>
    </Snackbar>
  );
}
