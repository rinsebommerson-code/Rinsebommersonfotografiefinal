/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Placeholder-beelden zijn SVG. Zodra je echte foto's (jpg/webp) plaatst,
    // optimaliseert next/image deze automatisch. SVG's worden as-is en sandboxed
    // geserveerd via onderstaande Content-Security-Policy.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
