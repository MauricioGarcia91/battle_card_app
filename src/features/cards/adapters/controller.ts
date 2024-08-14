import { CardUseCases } from '../use-cases';

import { SearchCardsParams } from '../domain/definitions.d';

export class CardController {
  constructor(private cardUseCases: CardUseCases) {
    this.cardUseCases = cardUseCases;
  }

  search = async (searchCardsParams: SearchCardsParams) =>
    await this.cardUseCases.search(searchCardsParams);

  getById = async (cardId: string) => await this.cardUseCases.getById(cardId);

  simulateBattle = async ({
    attacker_id,
    defender_id
  }: {
    attacker_id: string;
    defender_id: string;
  }) =>
    await this.cardUseCases.simulateBattle({
      attacker_id,
      defender_id
    });
}
