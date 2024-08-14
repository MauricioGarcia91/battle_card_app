'use server';

import { CardUseCases } from '../use-cases';
import { CardApiService } from './api-service';
import { CardController } from './controller';

import { SearchCardsParams } from '../domain/definitions.d';

const basePath = process.env.API_URL!;
const cardService = new CardApiService(basePath);
const cardUseCases = new CardUseCases(cardService);
const cardController = new CardController(cardUseCases);

export const search = async (searchCardsParams: SearchCardsParams) =>
  await cardController.search(searchCardsParams);

export const getById = async (cardId: string) =>
  await cardController.getById(cardId);

export const simulateBattle = async ({
  attacker_id,
  defender_id
}: {
  attacker_id: string;
  defender_id: string;
}) => await cardController.simulateBattle({ attacker_id, defender_id });
