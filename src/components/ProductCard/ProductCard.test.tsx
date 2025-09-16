import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../../context/CartContext';
import ProductCard from './ProductCard';
import type { Product } from '../../types';

const mockProduct: Product = {
  id: 1,
  title: 'Test Product',
  description: 'Test Description',
  price: 100,
  discountPercentage: 10,
  rating: 4.5,
  stock: 10,
  brand: 'Test Brand',
  category: 'smartphones',
  thumbnail: 'test-thumbnail.jpg',
  images: ['test-image1.jpg', 'test-image2.jpg'],
};

const MockProductCard = () => (
  <BrowserRouter>
    <CartProvider>
      <ProductCard
        product={mockProduct}
      />
    </CartProvider>
  </BrowserRouter>
);

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    render(<MockProductCard />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test Brand')).toBeInTheDocument();
    expect(screen.getByText('$90.00')).toBeInTheDocument();
    expect(screen.getByText('$100.00')).toBeInTheDocument();
  });

  it('navigates to product detail on card click', () => {
    render(<MockProductCard />);

    const card = screen.getByText('Test Product').closest('.MuiCard-root');
    fireEvent.click(card!);

    expect(window.location.pathname).toBe('/product/1');
  });
});