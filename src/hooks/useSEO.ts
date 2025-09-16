import { useEffect } from 'react';

export const useSEO = (metadata: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}) => {
  useEffect(() => {
    if (metadata.title) {
      document.title = metadata.title;
    }

    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }
    if (metadata.description) {
      descriptionMeta.setAttribute('content', metadata.description);
    }

    const setMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    if (metadata.title) setMetaProperty('og:title', metadata.title);
    if (metadata.description) setMetaProperty('og:description', metadata.description);
    if (metadata.image) setMetaProperty('og:image', metadata.image);
    if (metadata.url) setMetaProperty('og:url', metadata.url);
    if (metadata.type) setMetaProperty('og:type', metadata.type);

    return () => {
      document.title = 'Localiza Store - Modern Tech Products';
      const defaultDescription = 'Discover the latest tech products at amazing prices.';
      if (descriptionMeta) {
        descriptionMeta.setAttribute('content', defaultDescription);
      }
    };
  }, [metadata]);
};