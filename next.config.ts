import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@libsql/client', 'libsql',"@payloadcms/db-sqlite"],
  experimental: {
    serverComponentsExternalPackages: ['lightningcss'],
  },
};

export default nextConfig;
