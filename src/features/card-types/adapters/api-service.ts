import { CardTypeService } from '../domain/service';

import { CardType } from '../domain/definitions.d';

export class CardTypeApiService implements CardTypeService {
  private basePath: string;

  constructor(basePath: string) {
    this.basePath = basePath;
  }

  async search(): Promise<{ data: CardType[] }> {
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
}
