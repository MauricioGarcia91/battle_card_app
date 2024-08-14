import { CardTypeService } from '../domain/service';

export class CardTypeUseCases {
  constructor(private cardTypeService: CardTypeService) {
    this.cardTypeService = cardTypeService;
  }

  search = async () => {
    try {
      const { data } = await this.cardTypeService.search();

      return data;
    } catch (err) {
      console.error(`[ERROR][CARD_TYPE-USECASES][search] ${err}`);
      return null;
    }
  };
}
