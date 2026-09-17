import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const RouterContext = createContext({
  path: '/',
  navigate: () => {},
  hash: ''
});

export function RouterProvider({ children }) {
  const [path, setPath] = useState(() => window.location.pathname || '/');
  const [hash, setHash] = useState(() => window.location.hash || '');

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname || '/');
      setHash(window.location.hash || '');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to, options = {}) => {
    if (!to) return;

    // Handle external links
    if (to.startsWith('http://') || to.startsWith('https://') || to.startsWith('mailto:')) {
      window.open(to, '_blank');
      return;
    }

    let targetPath = to;
    let targetHash = '';

    if (to.includes('#')) {
      const parts = to.split('#');
      targetPath = parts[0] || '/';
      targetHash = '#' + parts[1];
    }

    if (window.location.pathname !== targetPath || window.location.hash !== targetHash) {
      window.history.pushState({}, '', to);
      setPath(targetPath);
      setHash(targetHash);
    }

    if (targetHash) {
      setTimeout(() => {
        const id = targetHash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else if (!options.preventScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate, hash }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export function Link({ to, children, className = '', onClick, ...props }) {
  const { navigate } = useRouter();

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <a href={to} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
