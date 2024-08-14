export interface SearchCardsParams {
  q?: string;
  limit?: string;
  card_type?: string;
  defender_id?: string;
  resistance?: string;
  weakness?: string;
}

export interface Card {
  id: string;
  name: string;
  hp: number;
  ability: string;
  attackPower: number;
  resistancePoint: number;
  weaknessPoint: number;
  imgUrl: string;
  resistance: CardType;
  weakness: CardType;
  type: CardType;
}

export interface BattleResult {
  attackerId: string;
  defenderId: string;
  attackerInitialPower: number;
  attackerPowerDamage: number;
  defenderHp: number;
  defenderRemainingHp: number;
  win: boolean;
}
