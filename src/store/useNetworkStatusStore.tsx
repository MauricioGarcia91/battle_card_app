import { create } from 'zustand';

interface NetworkStatusState {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string;
  setError: (error: string) => void;
}

export const useNetworkStatusStore = create<NetworkStatusState>((set) => ({
  loading: false,
  setLoading: (loading: boolean) => set({ loading }),
  error: '',
  setError: (error: string) => set({ error })
}));
