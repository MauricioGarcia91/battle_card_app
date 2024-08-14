import { CardType } from '../domain//definitions.d';

export interface CardTypeService {
  search: () => Promise<{ data: CardType[] }>;
}
