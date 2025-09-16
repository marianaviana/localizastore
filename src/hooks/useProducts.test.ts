import { renderHook, waitFor } from '@testing-library/react';
import { useProducts, useProduct } from './useProducts';
import { productService } from '../utils/api';

jest.mock('../utils/api');

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

describe('useProducts', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch products successfully', async () => {
    (productService.getAllProducts as jest.Mock).mockResolvedValue({
      data: { products: mockProducts },
    });

    const { result } = renderHook(() => useProducts());

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.products).toEqual(mockProducts);
    expect(result.current.error).toBeNull();
  });

  it('should handle fetch error', async () => {
    (productService.getAllProducts as jest.Mock).mockRejectedValue(
      new Error('API Error')
    );

    const { result } = renderHook(() => useProducts());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.products).toEqual([]);
    expect(result.current.error).toBe(
      'Sorry, we encountered an error while searching for products, please try again later or contact us via email contato@mariviana.dev'
    );
  });
});

describe('useProduct', () => {
  it('should fetch single product successfully', async () => {
    (productService.getProduct as jest.Mock).mockResolvedValue({
      data: mockProducts[0],
    });

    const { result } = renderHook(() => useProduct(1));

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.product).toEqual(mockProducts[0]);
    expect(result.current.error).toBeNull();
  });

  it('should handle single product fetch error', async () => {
    (productService.getProduct as jest.Mock).mockRejectedValue(
      new Error('API Error')
    );

    const { result } = renderHook(() => useProduct(1));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.product).toBeNull();
    expect(result.current.error).toBe(
      'Sorry, we encountered an error while searching for the product, please try again later or contact us at contato@mariviana.dev'
    );
  });
});