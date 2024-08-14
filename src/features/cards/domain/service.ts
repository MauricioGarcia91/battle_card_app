import {
  BattleResult,
  Card,
  SearchCardsParams
} from '../domain//definitions.d';

export interface CardService {
  search: (searchCardsParams: SearchCardsParams) => Promise<{ data: Card[] }>;
  getById: (cardId: string) => Promise<{ data: Card | null }>;
  simulateCardBattle: ({
    attacker_id,
    defender_id
  }: {
    attacker_id: string;
    defender_id: string;
  }) => Promise<{ data: BattleResult }>;
}
