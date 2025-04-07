export function buildImageUrl(filePath, size = 'w500') {
  if (!filePath) return null;
  const BASE_URL = 'https://image.tmdb.org/t/p/';
  return `${BASE_URL}${size}${filePath}`;
}

export function buildCompanyLogoUrl(logoPath, desiredSize = 'w500') {
  if (!logoPath) return null;

  const BASE_URL = 'https://image.tmdb.org/t/p/';

  // Check the extension
  if (logoPath.toLowerCase().endsWith('.svg')) {
    // For SVG, must use "original"
    return `${BASE_URL}original${logoPath}`;
  }

  // Otherwise (likely PNG), we allow resizing
  return `${BASE_URL}${desiredSize}${logoPath}`;
}
