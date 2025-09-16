import { render, screen, fireEvent } from '@testing-library/react';
import { CartProvider } from '../../context/CartContext';
import App from '../../App';

describe('Navigation Flow', () => {
  it('should navigate through all main pages', async () => {
    render(
      <CartProvider>
        <App />
      </CartProvider>
    );

    // 1. Verifica que está na Home
    const homeHeading = await screen.findByText('Tech Products', {}, { timeout: 5000 });
    expect(homeHeading).toBeInTheDocument();

    // 2. Vai para o Carrinho
    fireEvent.click(screen.getByTestId('header-cart-button'));

    // 3. Verifica se está no Carrinho
    const cartHeading = await screen.findByText('Shopping Cart', {}, { timeout: 5000 });
    expect(cartHeading).toBeInTheDocument();

    // 4. Volta para Home
    fireEvent.click(screen.getByAltText('Localiza Loja | Teste da Localiza'));

    // 5. Verifica se voltou para Home
    const homeHeadingAgain = await screen.findByText('Tech Products', {}, { timeout: 5000 });
    expect(homeHeadingAgain).toBeInTheDocument();
  });
});
