import React from 'react';
import { useSEO } from '../../hooks/useSEO';

const DefaultSEO: React.FC = () => {
  useSEO({
    title: 'Localiza Store - Modern Tech Products',
    description: 'Discover the latest tech products at amazing prices. Smartphones, laptops, gadgets and more.',
    type: 'website',
  });

  return null;
};

export default DefaultSEO;