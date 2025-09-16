import { CartProvider } from '../../context/CartContext';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Home from './Home';
import { productService } from '../../utils/api';

jest.mock('../../utils/api', () => ({
  productService: {
    getAllProducts: jest.fn(),
  },
}));

const mockProducts = [
  { id: 1, title: 'Product 1', description: 'Desc 1', price: 10, category: 'cat1' },
  { id: 2, title: 'Product 2', description: 'Desc 2', price: 20, category: 'cat2' },
];

describe('Home Page', () => {
  it('renders products when API call is successful', async () => {
    (productService.getAllProducts as jest.Mock).mockResolvedValue({
      data: { products: mockProducts },
    });

    render(
      <CartProvider>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </CartProvider>
    );

    for (const product of mockProducts) {
      await waitFor(() => {
        expect(screen.getByText(product.title)).toBeInTheDocument();
      });
    }
  });
});
