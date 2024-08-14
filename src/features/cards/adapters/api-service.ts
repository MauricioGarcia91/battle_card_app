import { camelCase } from 'change-case/keys';
import { BattleResult, Card, SearchCardsParams } from '../domain/definitions.d';
import { generateUrlSearchParams } from '@/features/shared/generateUrlSearchParams';
import { CardService } from '../domain/service';

export class CardApiService implements CardService {
  private basePath: string;

  constructor(basePath: string) {
    this.basePath = basePath;
  }

  async search(
    searchCardsParams: SearchCardsParams
  ): Promise<{ data: Card[] }> {
    try {
      const urlSearchParams = generateUrlSearchParams(
        searchCardsParams as Record<string, string>
      );
      const response = await fetch(
        `${this.basePath}/cards?${urlSearchParams}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw `${result.error}`;
      }

      return { data: camelCase(result, 2) as Card[] };
    } catch (err) {
      throw `[CARD-SERVICE] [search] ${err}`;
    }
  }

  async getById(cardId: string): Promise<{ data: Card }> {
    try {
      const response = await fetch(`${this.basePath}/cards/${cardId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const result = await response.json();

      if (!response.ok) {
        throw `${result.error}`;
      }

      return { data: camelCase(result, 2) as Card };
    } catch (err) {
      throw `[CARD-SERVICE] [getById] ${err}`;
    }
  }

  async simulateCardBattle({
    attacker_id,
    defender_id
  }: {
    attacker_id: string;
    defender_id: string;
  }): Promise<{ data: BattleResult }> {
    try {
      const response = await fetch(`${this.basePath}/cards/battle`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ attacker_id, defender_id })
      });

      const result = await response.json();

      if (!response.ok) {
        throw `${result.error}`;
      }

      return { data: camelCase(result, 2) as BattleResult };
    } catch (err) {
      throw `[CARD-SERVICE] [simulateCardBattle] ${err}`;
    }
  }
}
