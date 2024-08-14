import { useEffect, useState } from 'react';
import { useRouterInfo } from './useRouterInfo';
import { useNetworkStatus } from './useNetworkStatus';

import {
  getById,
  simulateBattle as simulateCardBattle,
  search
} from '@/features/cards/adapters/container-di';

import {
  BattleResult,
  Card,
  SearchCardsParams
} from '@/features/cards/domain/definitions.d';

export const useBattle = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [attacker, setAttacker] = useState<Card | null>(null);
  const [defender, setDefender] = useState<Card | null>(null);
  const [battleResult, setBattleResult] = useState<BattleResult | null>(null);
  const { id, defenderId, q, weakness, resistance } = useRouterInfo();
  const { setLoading, setError } = useNetworkStatus();

  useEffect(() => {
    const loadCards = async ({
      q,
      weakness,
      resistance
    }: SearchCardsParams) => {
      setLoading(true);
      const result = await search({ q, weakness, resistance });

      if (!result) {
        setError('Cards not found');
      } else {
        setCards(result!);
      }

      setLoading(false);
    };
    if (q || weakness || resistance) {
      loadCards({ q, weakness, resistance });
    }
  }, [q, weakness, resistance]);

  useEffect(() => {
    const loadAttacker = async (cardId: string) => {
      setLoading(true);
      const data = await getById(cardId);

      if (!data) {
        setError('Card not found');
      } else {
        setAttacker(data);
      }

      setLoading(false);
    };
    if (id && !attacker) {
      loadAttacker(id);
    }
  }, [id, attacker]);

  useEffect(() => {
    const loadDefender = async (cardId: string) => {
      setLoading(true);
      const data = await getById(cardId);

      if (!data) {
        setError('Card not found');
      } else {
        setDefender(data);
      }

      setLoading(false);
    };
    if (!defenderId && defender) {
      setDefender(null);
    }
    if (defenderId && !defender) {
      loadDefender(defenderId);
    }
  }, [defenderId, defender]);

  const simulateBattle = async () => {
    const results = await simulateCardBattle({
      attacker_id: id,
      defender_id: defenderId
    });

    setBattleResult(results!);
  };
  const clearBattle = () => {
    setBattleResult(null);
  };

  return {
    cards,
    attacker,
    defender,
    battleResult,
    simulateBattle,
    clearBattle
  };
};
