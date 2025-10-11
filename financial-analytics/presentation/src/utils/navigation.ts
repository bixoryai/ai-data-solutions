export const getPortalBasePath = (): string => {
  if (typeof window === 'undefined') {
    return '';
  }

  const { hostname, pathname } = window.location;

  if (hostname.includes('github.io')) {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0) {
      return `/${segments[0]}`;
    }
    return '';
  }

  if (hostname === 'bixory.ai') {
    return '/ai-data-solutions';
  }

  if (hostname === 'ai-data-solutions.bixory.ai') {
    return '';
  }

  if (pathname.includes('/ai-data-solutions/')) {
    return '/ai-data-solutions';
  }

  return '';
};

const normalizeBasePath = (basePath: string): string => {
  if (basePath === '/') {
    return '';
  }
  return basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
};

const normalizeRelativePath = (path: string): string => {
  if (!path) {
    return '/';
  }
  return path.startsWith('/') ? path : `/${path}`;
};

export const buildPortalUrl = (path: string = '/'): string => {
  const basePath = normalizeBasePath(getPortalBasePath());

  if (path === '/' || path === '') {
    return basePath || '/';
  }

  const normalizedPath = normalizeRelativePath(path);
  return basePath ? `${basePath}${normalizedPath}` : normalizedPath;
};

export const getPortalHomeUrl = (): string => buildPortalUrl('/index.html');

export const navigateToPortalHome = (): void => {
  window.location.href = getPortalHomeUrl();
};

