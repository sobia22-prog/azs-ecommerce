import { useEffect } from 'react';

export default function useSEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  canonicalPath
}) {
  useEffect(() => {
    if (title) {
      document.title = title.includes('AZS Solutions') ? title : `${title} | AZS Solutions`;
    }

    if (description) {
      let descEl = document.querySelector('meta[name="description"]');
      if (!descEl) {
        descEl = document.createElement('meta');
        descEl.setAttribute('name', 'description');
        document.head.appendChild(descEl);
      }
      descEl.setAttribute('content', description);
    }

    if (keywords) {
      let kwEl = document.querySelector('meta[name="keywords"]');
      if (!kwEl) {
        kwEl = document.createElement('meta');
        kwEl.setAttribute('name', 'keywords');
        document.head.appendChild(kwEl);
      }
      kwEl.setAttribute('content', keywords);
    }

    if (ogTitle) {
      let ogTitleEl = document.querySelector('meta[property="og:title"]');
      if (ogTitleEl) ogTitleEl.setAttribute('content', ogTitle);
    }

    if (ogDescription) {
      let ogDescEl = document.querySelector('meta[property="og:description"]');
      if (ogDescEl) ogDescEl.setAttribute('content', ogDescription);
    }

    // Canonical Link
    if (canonicalPath) {
      let canonicalEl = document.querySelector('link[rel="canonical"]');
      if (!canonicalEl) {
        canonicalEl = document.createElement('link');
        canonicalEl.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.setAttribute('href', `https://azs-ecommerce.vercel.app${canonicalPath}`);
    }
  }, [title, description, keywords, ogTitle, ogDescription, canonicalPath]);
}
