import { render, screen } from '@testing-library/react';
import { CardList } from '@/ui/cards/CardList';

import { createAsyncMockComponent } from '../utils/asyncMockComponent';
import { search } from '../../src/features/cards/adapters/container-di';
import { geodudeCard } from '../mocks/cards';

jest.mock('../../src/features/cards/adapters/container-di.ts', () => ({
  search: jest.fn()
}));

describe('[UI] Card List', () => {
  it('should a custom text for a card list not found', async () => {
    (search as jest.Mock).mockReturnValue(null);

    const jsxComponent = await createAsyncMockComponent(CardList, {
      searchParams: {}
    });

    render(jsxComponent);

    const textEl = screen.getByText(
      /No cards found, change your search or try again later./i
    );

    expect(textEl).toBeTruthy();
  });

  it('should render a card list with one element', async () => {
    (search as jest.Mock).mockReturnValue([geodudeCard]);

    const jsxComponent = await createAsyncMockComponent(CardList, {
      searchParams: {}
    });

    render(jsxComponent);

    const nameCardEl = screen.getByText(geodudeCard.name);
    const typeCardEl = screen.getByText(/type: ground/i);
    const hpCardEl = screen.getByText(/hp: 70/i);

    expect(nameCardEl).toBeTruthy();
    expect(typeCardEl).toBeTruthy();
    expect(hpCardEl).toBeTruthy();
  });
});
