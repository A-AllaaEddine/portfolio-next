/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep `next dev` artifacts separate from `next build`; sharing `.next`
  // lets a production build replace the dev server's stylesheet manifest.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
}

module.exports = nextConfig
