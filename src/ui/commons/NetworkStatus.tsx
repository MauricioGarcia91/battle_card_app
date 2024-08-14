'use client';

import { Loader } from './Loader';
import { Error } from './Error';

import { useNetworkStatus } from '@/hooks/useNetworkStatus';

export function NetworkStatus({ children }: { children: React.ReactNode }) {
  const { loading, error, setError } = useNetworkStatus();

  return (
    <>
      {loading && <Loader />}
      {children}
      {error && (
        <Error
          message={error}
          onClose={() => setError('')}
        />
      )}
    </>
  );
}
