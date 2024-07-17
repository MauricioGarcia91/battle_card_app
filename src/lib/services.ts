import { camelCase } from 'change-case/keys';
import {
  BattleResult,
  Card,
  CardType,
  SearchCardsParams
} from './definitions.d';

import { generateUrlSearchParams } from './utils';

export default class CardService {
  private basePath: string;

  constructor(basePath: string) {
    this.basePath = basePath;
  }

  static createForServer() {
    const basePathUrl = process.env.API_URL!;
    return new CardService(basePathUrl);
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

      const cards = result.map((card: Record<string, string>) =>
        camelCase(card)
      ) as Card[];

      return { data: cards };
    } catch (err) {
      throw `[CARDS-SERVICE] [search] ${err}`;
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

      return { data: camelCase(result) as Card };
    } catch (err) {
      throw `[CARDS-SERVICE] [getById] ${err}`;
    }
  }

  async searchCardTypes(): Promise<{ data: CardType[] }> {
    try {
      const response = await fetch(`${this.basePath}/types`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const result = await response.json();

      if (!response.ok) {
        throw `${result.error}`;
      }

      return { data: result as CardType[] };
    } catch (err) {
      throw `[CARDS-SERVICE] [searchCardTypes] ${err}`;
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

      return { data: camelCase(result) as BattleResult };
    } catch (err) {
      throw `[CARDS-SERVICE] [simulateCardBattle] ${err}`;
    }
  }
}
