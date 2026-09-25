import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so a lockfile elsewhere on the machine is ignored.
  turbopack: { root: __dirname },

  // Each brand has its own route (/juniper-house). The bare domain serves the
  // Juniper House landing page too, without changing the address bar.
  async rewrites() {
    return [{ source: "/", destination: "/juniper-house" }];
  },
};

export default nextConfig;
