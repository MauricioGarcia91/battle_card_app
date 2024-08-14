import { CardTypeUseCases } from '../use-cases';

export class CardTypeController {
  constructor(private cardTypeUseCases: CardTypeUseCases) {
    this.cardTypeUseCases = cardTypeUseCases;
  }

  search = async () => await this.cardTypeUseCases.search();
}
