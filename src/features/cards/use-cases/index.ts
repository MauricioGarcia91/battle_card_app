import { CardService } from '../domain/service';

import { SearchCardsParams } from '../domain/definitions.d';

export class CardUseCases {
  constructor(private cardService: CardService) {
    this.cardService = cardService;
  }

  search = async (searchCardsParams: SearchCardsParams) => {
    try {
      const { data } = await this.cardService.search(searchCardsParams);

      return data;
    } catch (err) {
      console.error(`[ERROR][CARD-USECASES][search] ${err}`);
      return null;
    }
  };

  getById = async (cardId: string) => {
    try {
      const { data } = await this.cardService.getById(cardId);

      return data;
    } catch (err) {
      console.error(`[ERROR][CARD-USECASES][getById] ${err}`);
      return null;
    }
  };

  simulateBattle = async ({
    attacker_id,
    defender_id
  }: {
    attacker_id: string;
    defender_id: string;
  }) => {
    try {
      const { data } = await this.cardService.simulateCardBattle({
        attacker_id,
        defender_id
      });

      return data;
    } catch (err) {
      console.error(`[ERROR][CARD-USECASES][simulateBattle] ${err}`);
      return null;
    }
  };
}
