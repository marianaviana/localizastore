import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../../context/CartContext';
import Cart from './Cart';
import type { Product } from '../../types';

const mockProduct: Product = {
  id: 1,
  title: 'Test Product',
  description: 'Test Description',
  price: 100,
  discountPercentage: 0,
  rating: 4.5,
  stock: 10,
  brand: 'Test Brand',
  category: 'smartphones',
  thumbnail: 'test-thumbnail.jpg',
  images: [],
};

const MockCart = () => (
  <BrowserRouter>
    <CartProvider>
      <Cart />
    </CartProvider>
  </BrowserRouter>
);

describe('Cart', () => {
  it('shows empty cart message when no items', () => {
    render(<MockCart />);
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });

  it('displays cart items when items are present', () => {
    const cartProviderWithItems = ({ children }: { children: React.ReactNode }) => (
      <BrowserRouter>
        <CartProvider>
          {children}
        </CartProvider>
      </BrowserRouter>
    );

    jest.spyOn(require('../../context/CartContext'), 'useCart').mockReturnValue({
      items: [{ product: mockProduct, quantity: 2 }],
      updateQuantity: jest.fn(),
      removeFromCart: jest.fn(),
      totalPrice: 200,
    });

    render(<Cart />, { wrapper: cartProviderWithItems });

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$100.00')).toBeInTheDocument();
  });
});