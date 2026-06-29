import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Limit threads/cpus to prevent out-of-memory worker crashes on constrained VMs
  experimental: {
    cpus: 1,
    workerThreads: false,
  } as any,
};

export default nextConfig;
