
/** @type {import('next').NextConfig} */
// "export" maakt een statische site in de map "out", die je overal gratis kunt hosten.
const nextConfig = {
  output: 'export',
  allowedDevOrigins: ['192.168.178.233'],
};

export default nextConfig;
