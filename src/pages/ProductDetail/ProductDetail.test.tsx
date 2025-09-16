import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import { CartProvider } from '../../context/CartContext';
import { productService } from '../../utils/api';
import { render, screen, waitFor } from '@testing-library/react';

jest.mock('../../utils/api', () => ({
  productService: {
    getProduct: jest.fn(),
  },
}));

const mockProduct = {
  id: 1,
  title: 'Test Product',
  description: 'This is a test product',
  price: 99,
  images: ['https://via.placeholder.com/150'],
  rating: 4.5
};

describe('ProductDetail', () => {
  it('renders product details', async () => {
    (productService.getProduct as jest.Mock).mockResolvedValue({
      data: mockProduct,
    });

    render(
      <CartProvider>
        <MemoryRouter initialEntries={['/product/1']}>
          <Routes>
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </MemoryRouter>
      </CartProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    });
  });
});
