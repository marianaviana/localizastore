import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  Divider,
} from '@mui/material';
import { ShoppingCart, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Cart from '../../components/Cart/Cart';
import { useCart } from '../../context/CartContext';

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, totalPrice } = useCart();

  const handleContinueShopping = () => {
    navigate('/');
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4, px: { xs: 2, sm: 3, md: 4 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <ShoppingCart sx={{ mr: 2, fontSize: 32 }} />
        <Typography variant="h4" component="h1">
          Shopping Cart
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center" sx={{ width: '100%', margin: 0 }}>
        <Grid size={{xs:12, md:8}}>
          <Cart />
        </Grid>

        {items.length > 0 && (
          <Grid size={{xs:12, md:4}}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>

              <Box sx={{ my: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>Subtotal:</Typography>
                  <Typography>${totalPrice.toFixed(2)}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>Shipping:</Typography>
                  <Typography>Free</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>Tax:</Typography>
                  <Typography>${(totalPrice * 0.1).toFixed(2)}</Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h6">Total:</Typography>
                <Typography variant="h6" color="primary">
                  ${(totalPrice * 1.1).toFixed(2)}
                </Typography>
              </Box>

              <Button
                variant="contained"
                fullWidth
                size="large"
                onClick={handleCheckout}
                sx={{ mb: 2 }}
              >
                Proceed to Checkout
              </Button>

              <Button
                variant="contained"
                fullWidth
                startIcon={<ArrowBack />}
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </Button>
            </Paper>
          </Grid>
      )}
      </Grid>
    </Container>
  );
};

export default CartPage;