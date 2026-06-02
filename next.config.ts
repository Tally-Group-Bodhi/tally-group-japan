import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/services-beta",
        permanent: true,
      },
      {
        source: "/insights/case-studies",
        destination: "/insights/resources",
        permanent: true,
      },
      {
        source: "/insights/case-studies/:path*",
        destination: "/insights/resources",
        permanent: true,
      },
      {
        source: "/jp",
        destination: "/",
        permanent: true,
      },
      {
        source: "/jp/:path*",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    qualities: [75, 95],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
