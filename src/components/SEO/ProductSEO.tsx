import React from 'react';
import { useSEO } from '../../hooks/useSEO';
import type { Product } from '../../types';

interface ProductSEOProps {
  product: Product;
}

const ProductSEO: React.FC<ProductSEOProps> = ({ product }) => {
  const discountPrice = product.price * (1 - product.discountPercentage / 100);
  const imageUrl = product.thumbnail || product.images[0];

  useSEO({
    title: `${product.title} - Localiza Store`,
    description: product.description,
    image: imageUrl,
    type: 'product',
  });

  const schemaData = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: imageUrl,
    brand: {
      '@type': 'Brand',
      name: product.brand
    },
    offers: {
      '@type': 'Offer',
      price: discountPrice.toFixed(2),
      priceCurrency: 'USD',
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      availability: product.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      itemCondition: 'https://schema.org/NewCondition'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating.toString() ?? '0',
      reviewCount: '100'
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schemaData)}
    </script>
  );
};

export default ProductSEO;