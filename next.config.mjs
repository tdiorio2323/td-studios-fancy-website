/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    NEXT_PUBLIC_BUILD_ID: Date.now().toString()
  },
  // images: {
  //   unoptimized: true,
  // },
}

export default nextConfig
