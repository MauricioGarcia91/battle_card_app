import { render, screen } from '@testing-library/react';

import { BattleControlPanel } from '@/ui/BattleControlPanel/BattleControlPanel';

import { geodudeCard } from '../mocks/cards';

jest.mock('next/navigation', () => ({
  __esModule: true,
  useSearchParams: jest.fn().mockReturnValue({
    get: jest.fn()
  }),
  useParams: jest.fn().mockReturnValue({}),
  usePathname: jest.fn(),
  useRouter: jest.fn().mockReturnValue({})
}));

describe('[UI] Battle Control Panel', () => {
  test('should render a "title: Battle Arena"', () => {
    render(
      <BattleControlPanel
        cards={[]}
        attacker={null}
        defender={null}
        simulateBattle={jest.fn()}
      />
    );

    const titleEl = screen.getByText(/battle arena/i);

    expect(titleEl).toBeTruthy();
  });

  test('should render actions to start a battle', () => {
    render(
      <BattleControlPanel
        cards={[]}
        attacker={null}
        defender={geodudeCard}
        simulateBattle={jest.fn()}
      />
    );

    const fightBtn = screen.getByText(/fight/i);
    const newOpponentBtn = screen.getByText(/change opponent/i);

    expect(fightBtn).toBeTruthy();
    expect(newOpponentBtn).toBeTruthy();
  });

  test('should render searching to search an opponent', () => {
    render(
      <BattleControlPanel
        cards={[]}
        attacker={null}
        defender={null}
        simulateBattle={jest.fn()}
      />
    );

    const suggestionTitleEl = screen.getByText(/suggest an opponent/i);
    const weakerBtn = screen.getByText(/weaker/i);
    const resistanceBtn = screen.getByText(/resistant/i);

    const searchOpponentEl = screen.getByText(/search an opponent/i);
    const searchInitEl = screen.queryByText(
      /no se encontraron cartas, cambia la busqueda/i
    );

    expect(suggestionTitleEl).toBeTruthy();
    expect(weakerBtn).toBeTruthy();
    expect(resistanceBtn).toBeTruthy();
    expect(searchOpponentEl).toBeTruthy();
    expect(searchInitEl).toBeFalsy();
  });
});
