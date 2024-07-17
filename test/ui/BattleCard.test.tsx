import { render, screen } from '@testing-library/react';
import { BattleCard } from '@/ui/BattleCard';
import { geodudeCard } from '../mocks/cards';

describe('[UI] BattleCard', () => {
  test('should render a "title: Your card" based on prop role provide', () => {
    render(
      <BattleCard
        card={geodudeCard}
        role='attacker'
      />
    );

    const titleEl = screen.getByText(/your card/i);

    expect(titleEl).toBeTruthy();
  });

  test('should render a "title: Your opponent" based on prop role provide', () => {
    render(
      <BattleCard
        card={geodudeCard}
        role='defender'
      />
    );

    const titleEl = screen.getByText(/your opponent/i);

    expect(titleEl).toBeTruthy();
  });

  test('should render a card information correctly when card prop is provided', () => {
    render(
      <BattleCard
        card={geodudeCard}
        role='attacker'
      />
    );

    const nameEl = screen.getByText(/geodude/i);
    const hpEl = screen.getByText(/HP: 70/i);
    const abilityEl = screen.getByText(/rock head/i);
    const attackPowerEl = screen.getByText(/PS: 55/i);
    const resistanceEl = screen.getByText(/RES: Electric -25/i);
    const weaknessEl = screen.getByText(/WKN: Water X2/i);

    expect(nameEl).toBeTruthy();
    expect(hpEl).toBeTruthy();
    expect(abilityEl).toBeTruthy();
    expect(attackPowerEl).toBeTruthy();
    expect(resistanceEl).toBeTruthy();
    expect(weaknessEl).toBeTruthy();
  });

  test('should render an message when card prop is null', () => {
    const message = 'No se pudo cargar la información de la carta.';

    render(
      <BattleCard
        card={null}
        role='defender'
      />
    );

    expect(screen.getByText(message)).toBeTruthy();
  });
});
