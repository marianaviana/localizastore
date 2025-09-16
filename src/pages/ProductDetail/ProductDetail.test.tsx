import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from '../../context/CartContext';
import ProductDetail from './ProductDetail';
import { productService } from '../../utils/api';

jest.mock('../../utils/api');

const mockProduct = {
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

const MockProductDetail = () => (
  <BrowserRouter>
    <CartProvider>
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </CartProvider>
  </BrowserRouter>
);

describe('ProductDetail', () => {
  beforeEach(() => {
    (productService.getProduct as jest.Mock).mockResolvedValue({
      data: mockProduct,
    });
  });

  it('renders product details', async () => {
    render(<MockProductDetail />);

    await waitFor(() => {
      expect(screen.getByText('Test Product')).toBeInTheDocument();
    });

    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('$90.00')).toBeInTheDocument();
  });
});