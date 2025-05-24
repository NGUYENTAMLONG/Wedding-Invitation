import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

export default nextConfig;
