import { useNetworkStatusStore } from '@/store/useNetworkStatusStore';

export function useNetworkStatus() {
  const loading = useNetworkStatusStore((state) => state.loading);
  const setLoading = useNetworkStatusStore((state) => state.setLoading);
  const error = useNetworkStatusStore((state) => state.error);
  const setError = useNetworkStatusStore((state) => state.setError);

  return {
    loading,
    setLoading,
    error,
    setError
  };
}
