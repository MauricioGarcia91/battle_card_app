import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams
} from 'next/navigation';

export function useRouterInfo() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';
  const limit = searchParams.get('limit') || '5';
  const cardType = searchParams.get('card_type') || '';
  const defenderId = searchParams.get('defender_id') || '';
  const weakness = searchParams.get('weakness') || '';
  const resistance = searchParams.get('resistance') || '';

  const { id } = useParams();

  const pathname = usePathname();

  const { replace } = useRouter();

  const updateSearchParams = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams);

    if (!!value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return {
    id: id as string,
    q,
    limit,
    cardType,
    defenderId,
    updateSearchParams,
    weakness,
    resistance
  };
}
