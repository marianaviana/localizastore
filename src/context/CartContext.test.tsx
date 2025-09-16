import { renderHook, act } from '@testing-library/react';
import { CartProvider, useCart } from './CartContext';
import type { Product } from '../types';

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
  images: ['test-image1.jpg'],
};

const mockProduct2: Product = {
  id: 2,
  title: 'Test Product 2',
  description: 'Test Description 2',
  price: 200,
  discountPercentage: 5,
  rating: 4.0,
  stock: 5,
  brand: 'Test Brand 2',
  category: 'laptops',
  thumbnail: 'test-thumbnail2.jpg',
  images: ['test-image2.jpg'],
};

describe('CartContext', () => {
  it('should add item to cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.addToCart(mockProduct);
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0].product.id).toBe(1);
    expect(result.current.items[0].quantity).toBe(1);
    expect(result.current.totalItems).toBe(1);
    expect(result.current.totalPrice).toBe(100);
  });

  it('should increment quantity when adding existing product', () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.addToCart(mockProduct);
      result.current.addToCart(mockProduct);
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0].quantity).toBe(2);
    expect(result.current.totalItems).toBe(2);
    expect(result.current.totalPrice).toBe(200);
  });

  it('should remove item from cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.addToCart(mockProduct);
      result.current.removeFromCart(1);
    });

    expect(result.current.items).toHaveLength(0);
    expect(result.current.totalItems).toBe(0);
    expect(result.current.totalPrice).toBe(0);
  });

  it('should update quantity', () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.addToCart(mockProduct);
      result.current.updateQuantity(1, 5);
    });

    expect(result.current.items[0].quantity).toBe(5);
    expect(result.current.totalItems).toBe(5);
    expect(result.current.totalPrice).toBe(500);
  });

  it('should clear cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.addToCart(mockProduct);
      result.current.addToCart(mockProduct2);
      result.current.clearCart();
    });

    expect(result.current.items).toHaveLength(0);
    expect(result.current.totalItems).toBe(0);
    expect(result.current.totalPrice).toBe(0);
  });

  it('should handle multiple products', () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.addToCart(mockProduct);
      result.current.addToCart(mockProduct2);
    });

    expect(result.current.items).toHaveLength(2);
    expect(result.current.totalItems).toBe(2);
    expect(result.current.totalPrice).toBe(300);
  });

  it('should not allow quantity below 1', () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.addToCart(mockProduct);
      result.current.updateQuantity(1, 0);
    });

    expect(result.current.items[0].quantity).toBe(1);
  });
});