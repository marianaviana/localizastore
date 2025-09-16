import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  CircularProgress,
  Alert,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Pagination,
} from '@mui/material';
import { useProducts } from '../../hooks/useProducts';
import ProductCard from '../../components/ProductCard/ProductCard';

const Home: React.FC = () => {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  const filteredProducts = products
    .filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === '' || product.category === category)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.title.localeCompare(b.title);
      }
    });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const categories = [...new Set(products.map(product => product.category))];

  if (loading) {
    return (
      <Container sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Box sx={{
        width: '100%',
        py: 4,
        px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 12 } // Aumente o xl para 12
      }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{
      width: '100%',
      py: 4,
      px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 12 } // Aumente o xl para 12
    }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Tech Products
      </Typography>
      <Typography variant="h6" component="h1" gutterBottom sx={{ mb: 4 }}>
        This is a fictitious store developed as a test for Localiza
      </Typography>

      <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <TextField
          label="Search products"
          aria-label="Search products"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1);
          }}
          sx={{ minWidth: 200 }}
        />

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            label="Category"
            aria-label="Select Category"
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(1);
            }}
          >
            <MenuItem value="">All Categories</MenuItem>
            {categories.map(cat => (
              <MenuItem key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortBy}
            label="Sort By"
            aria-label="Sort By"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <MenuItem value="title">Name (A-Z)</MenuItem>
            <MenuItem value="price-low">Price (Low to High)</MenuItem>
            <MenuItem value="price-high">Price (High to Low)</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Showing {paginatedProducts.length} of {filteredProducts.length} products
      </Typography>

      <Grid container spacing={3} sx={{ width: '100%', margin: 0 }}>
        {paginatedProducts.map(product => (
          <Grid key={product.id} size={{xs:12, sm:6, md:4, lg:3}}>
            <ProductCard
              product={product}
              sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
            />
          </Grid>
        ))}
      </Grid>

      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
};

export default Home;