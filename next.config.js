/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|eot|otf|woff|woff2|mp4|pdf|webm|txt)$/,
      type: 'asset/resource',
    });

    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }, */
}

module.exports = nextConfig
