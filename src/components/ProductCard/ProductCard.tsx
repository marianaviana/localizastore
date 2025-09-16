import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Rating,
  Chip,
} from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  sx?: SxProps<Theme>;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, sx = {} }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const discountPrice = product.price * (1 - product.discountPercentage / 100);

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
        ...sx
      }}
      onClick={handleCardClick}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.thumbnail}
        alt={product.title}
        sx={{ objectFit: 'contain', backgroundColor: '#2a2a2a', p: 2 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h3" noWrap>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {product.brand}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={product.rating} readOnly size="small" />
          <Typography variant="body2" sx={{ ml: 1 }}>
            ({product.rating})
          </Typography>
        </Box>

        {product.discountPercentage > 0 && (
          <Chip
            label={`-${product.discountPercentage}%`}
            color="secondary"
            size="small"
            sx={{ mb: 1 }}
          />
        )}

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="h6" color="primary">
            ${discountPrice.toFixed(2)}
          </Typography>
          {product.discountPercentage > 0 && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: 'line-through' }}
            >
              ${product.price.toFixed(2)}
            </Typography>
          )}
        </Box>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          startIcon={<AddShoppingCart />}
          onClick={handleAddToCart}
          fullWidth
          variant="contained"
          aria-label="Add to Cart"
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;