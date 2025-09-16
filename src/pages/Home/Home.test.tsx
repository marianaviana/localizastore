import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../../context/CartContext';
import Home from './Home';
import { productService } from '../../utils/api';

jest.mock('../../utils/api');

const mockProducts = [
  {
    id: 1,
    title: 'Test Product 1',
    price: 100,
    rating: 4.5,
    brand: 'Test Brand',
    category: 'smartphones',
    thumbnail: 'test1.jpg',
    images: [],
    description: '',
    discountPercentage: 0,
    stock: 10,
  },
  {
    id: 2,
    title: 'Test Product 2',
    price: 200,
    rating: 4.0,
    brand: 'Test Brand',
    category: 'laptops',
    thumbnail: 'test2.jpg',
    images: [],
    description: '',
    discountPercentage: 0,
    stock: 5,
  },
];

const MockHome = () => (
  <BrowserRouter>
    <CartProvider>
      <Home />
    </CartProvider>
  </BrowserRouter>
);

describe('Home', () => {
  beforeEach(() => {
    (productService.getAllProducts as jest.Mock).mockResolvedValue({
      data: { products: mockProducts },
    });
  });

  it('renders loading state initially', async () => {
    render(<MockHome />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('renders products after loading', async () => {
    render(<MockHome />);

    await waitFor(() => {
      expect(screen.getByText('Test Product 1')).toBeInTheDocument();
      expect(screen.getByText('Test Product 2')).toBeInTheDocument();
    });
  });
});