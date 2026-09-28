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

    if (ogTitle || title) {
      let ogTitleEl = document.querySelector('meta[property="og:title"]');
      if (!ogTitleEl) {
        ogTitleEl = document.createElement('meta');
        ogTitleEl.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitleEl);
      }
      ogTitleEl.setAttribute('content', ogTitle || title);
    }

    if (ogDescription || description) {
      let ogDescEl = document.querySelector('meta[property="og:description"]');
      if (!ogDescEl) {
        ogDescEl = document.createElement('meta');
        ogDescEl.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescEl);
      }
      ogDescEl.setAttribute('content', ogDescription || description);
    }

    // Determine current path & self-referencing canonical URL
    const currentPathname = typeof window !== 'undefined' ? window.location.pathname : '';
    const normalizedCurrent = currentPathname.length > 1 && currentPathname.endsWith('/')
      ? currentPathname.slice(0, -1)
      : (currentPathname || '/');

    // Use canonicalPath if specified, else active route pathname
    const finalPath = canonicalPath !== undefined && canonicalPath !== null ? canonicalPath : normalizedCurrent;
    const cleanFinalPath = finalPath.length > 1 && finalPath.endsWith('/')
      ? finalPath.slice(0, -1)
      : (finalPath || '/');

    const canonicalHref = cleanFinalPath === '/'
      ? 'https://azs-ecommerce.vercel.app/'
      : `https://azs-ecommerce.vercel.app${cleanFinalPath}`;

    // Canonical Link
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalHref);

    // OpenGraph URL
    let ogUrlEl = document.querySelector('meta[property="og:url"]');
    if (!ogUrlEl) {
      ogUrlEl = document.createElement('meta');
      ogUrlEl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrlEl);
    }
    ogUrlEl.setAttribute('content', canonicalHref);

  }, [title, description, keywords, ogTitle, ogDescription, canonicalPath]);
}

