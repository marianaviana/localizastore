import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../../context/CartContext';
import Header from './Header';

const MockHeader = () => (
  <BrowserRouter>
    <CartProvider>
      <Header />
    </CartProvider>
  </BrowserRouter>
);

describe('Header', () => {
  it('renders header with logo and cart icon', () => {
    render(<MockHeader />);

    expect(screen.getByAltText(/localiza loja/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cart/i })).toBeInTheDocument();
  });

  it('navigates to home when logo is clicked', () => {
    render(<MockHeader />);

    const logo = screen.getByAltText(/localiza loja/i);
    fireEvent.click(logo);

    expect(window.location.pathname).toBe('/');
  });
});