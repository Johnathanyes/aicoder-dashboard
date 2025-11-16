import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@libsql/client', 'libsql',"@payloadcms/db-sqlite"]
};

export default nextConfig;
