'use server';

import CardService from '@/lib/services';
import { SearchCardsParams } from './definitions.d';

const cardService = CardService.createForServer();

export async function searchCards(searchCardsParams: SearchCardsParams) {
  try {
    const { data } = await cardService.search(searchCardsParams);

    return data;
  } catch (err) {
    console.error(`[ERROR][searchCardTypes] ${err}`);
    return null;
  }
}

export async function getCardById(cardId: string) {
  try {
    const { data } = await cardService.getById(cardId);

    return data;
  } catch (err) {
    console.error(`[ERROR][searchCardTypes] ${err}`);
    return null;
  }
}

export async function searchCardTypes() {
  try {
    const { data } = await cardService.searchCardTypes();

    return data;
  } catch (err) {
    console.error(`[ERROR][searchCardTypes] ${err}`);
    return null;
  }
}

export async function simulateCardBattle({
  attacker_id,
  defender_id
}: {
  attacker_id: string;
  defender_id: string;
}) {
  try {
    const { data } = await cardService.simulateCardBattle({
      attacker_id,
      defender_id
    });

    return data;
  } catch (err) {
    console.error(`[ERROR][searchCardTypes] ${err}`);
    return null;
  }
}
