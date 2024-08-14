'use server';
import { CardTypeUseCases } from '../use-cases';
import { CardTypeApiService } from './api-service';
import { CardTypeController } from './controller';

const basePath = process.env.API_URL!;
const cardTypeApiService = new CardTypeApiService(basePath);
const cardTypeUseCases = new CardTypeUseCases(cardTypeApiService);
const cardTypeController = new CardTypeController(cardTypeUseCases);

export const search = async () => await cardTypeController.search();
