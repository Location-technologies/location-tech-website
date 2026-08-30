import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    // Gate the build on lint errors.
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Gate the build on type errors.
    ignoreBuildErrors: false,
  },
  images: {
    // TODO(P03): implement a Workers-compatible custom image loader.
    // next/image's default loader relies on the Node/Vercel image optimization
    // API, which is not available on Cloudflare Workers. Until P03 lands a
    // custom loader (e.g. via a Cloudflare Images binding or `loader: 'custom'`
    // + a Workers-safe loaderFile), do NOT enable next/image features that
    // assume the default loader is available.
    // loader: 'custom',
    // loaderFile: './src/lib/workers-image-loader.ts',
  },
};

export default nextConfig;
