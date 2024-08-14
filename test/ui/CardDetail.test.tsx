import { render, screen } from '@testing-library/react';
import { createAsyncMockComponent } from '../utils/asyncMockComponent';

import { CardDetail } from '@/ui/cards/CardDetail';
import { getById } from '@/features/cards/adapters/container-di';

import { geodudeCard } from '../mocks/cards';

jest.mock('../../src/features/cards/adapters/container-di.ts', () => ({
  getById: jest.fn()
}));

describe('[UI] Card Detail', () => {
  test('should a custom text for card detail not found', async () => {
    (getById as jest.Mock).mockReturnValue(null);
    const jsxComponent = await createAsyncMockComponent(CardDetail, {
      cardId: '6c947984-d739-40d6-9222-552a5103d1bb',
      role: 'attacker'
    });

    render(jsxComponent);

    const textEl = screen.getByText(/Failed to load card information./i);

    expect(textEl).toBeTruthy();
  });

  test('should render title: Your card', async () => {
    (getById as jest.Mock).mockReturnValue(geodudeCard);

    const jsxComponent = await createAsyncMockComponent(CardDetail, {
      cardId: '6c947984-d739-40d6-9222-552a5103d1bb',
      role: 'attacker'
    });

    render(jsxComponent);

    const titleEl = screen.getByText(/your card/i);

    expect(titleEl).toBeTruthy();
  });

  test('should render title: Your opponent', async () => {
    (getById as jest.Mock).mockReturnValue(geodudeCard);

    const jsxComponent = await createAsyncMockComponent(CardDetail, {
      cardId: '6c947984-d739-40d6-9222-552a5103d1bb',
      role: 'defender'
    });

    render(jsxComponent);

    const titleEl = screen.getByText(/your opponent/i);

    expect(titleEl).toBeTruthy();
  });

  test('should render a card detail', async () => {
    (getById as jest.Mock).mockReturnValue(geodudeCard);

    const jsxComponent = await createAsyncMockComponent(CardDetail, {
      cardId: '6c947984-d739-40d6-9222-552a5103d1bb',
      role: 'attacker'
    });

    render(jsxComponent);

    const nameEl = screen.getByText(/geodude/i);
    const hpEl = screen.getByText(/hp: 70/i);
    const abilityEl = screen.getByText(/rock head/i);
    const attackPowerEl = screen.getByText(/ps: 55/i);
    const resistanceEl = screen.getByText(/res: electric -25/i);
    const weaknessEl = screen.getByText(/wkn: water x2/i);

    expect(nameEl).toBeTruthy();
    expect(hpEl).toBeTruthy();
    expect(abilityEl).toBeTruthy();
    expect(attackPowerEl).toBeTruthy();
    expect(resistanceEl).toBeTruthy();
    expect(weaknessEl).toBeTruthy();
  });
});
