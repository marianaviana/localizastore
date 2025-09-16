import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Alert,
  Chip,
  Rating,
  Divider,
  ImageList,
  ImageListItem,
  Grid,
} from '@mui/material';
import { AddShoppingCart, ArrowBack } from '@mui/icons-material';
import { useProduct } from '../../hooks/useProducts';
import { useCart } from '../../context/CartContext';
import ProductSEO from '../../components/SEO/ProductSEO';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { product, loading, error } = useProduct(Number(id));
  const { addToCart } = useCart();

  if (loading) {
    return (
      <Box sx={{
        width: '100%',
        py: 4,
        display: 'flex',
        justifyContent: 'center',
        px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 12 }
      }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !product) {
    return (
      <Box sx={{
        width: '100%',
        py: 4,
        px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 12 }
      }}>
        <Alert severity="error">{error || 'Product not found'}</Alert>
        <Button
          variant="contained"
          startIcon={<ArrowBack />}
          onClick={() => navigate('/')}
          sx={{ mt: 2 }}
          aria-label="Back to Products"
        >
          Back to Products
        </Button>
      </Box>
    );
  }

  const discountPrice = product.price * (1 - product.discountPercentage / 100);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <>
      {product && <ProductSEO product={product} />}
      <Box sx={{
        width: '100%',
        py: 4,
        px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 12 }
      }}>
        <Button
          variant="contained"
          startIcon={<ArrowBack />}
          onClick={() => navigate('/')}
          sx={{ mb: 3 }}
          aria-label="Back to Products"
        >
          Back to Products
        </Button>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: 3 }}>
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'contain',
                  backgroundColor: '#2a2a2a',
                  borderRadius: '8px',
                }}
              />
            </Box>

            {product.images.length > 0 && (
              <ImageList cols={3} rowHeight={100} gap={8}>
                {product.images.map((image, index) => (
                  <ImageListItem key={index}>
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        borderRadius: '4px',
                        backgroundColor:'#2a2a2a'
                      }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            )}
          </Grid>

          {/* Informações do produto */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              {product.title}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={product.rating} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                ({product.rating}) • {product.brand}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Typography variant="h4" color="primary">
                ${discountPrice.toFixed(2)}
              </Typography>
              {product.discountPercentage > 0 && (
                <>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ textDecoration: 'line-through' }}
                  >
                    ${product.price.toFixed(2)}
                  </Typography>
                  <Chip
                    label={`-${product.discountPercentage}% OFF`}
                    color="secondary"
                  />
                </>
              )}
            </Box>

            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Product Details:
              </Typography>
              <Typography variant="body2">
                • Category: {product.category}
              </Typography>
              <Typography variant="body2">
                • Stock: {product.stock} available
              </Typography>
            </Box>

            <Button
              variant="contained"
              size="large"
              startIcon={<AddShoppingCart />}
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              sx={{ py: 1.5, px: 4 }}
              aria-label="Add to Cart"
            >
              {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductDetail;