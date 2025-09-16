import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../../context/CartContext';
import CartPage from './CartPage';

const MockCartPage = () => (
  <BrowserRouter>
    <CartProvider>
      <CartPage />
    </CartProvider>
  </BrowserRouter>
);

describe('CartPage', () => {
  it('renders cart page title', () => {
    render(<MockCartPage />);
    expect(screen.getByText('Shopping Cart')).toBeInTheDocument();
  });
});