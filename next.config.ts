import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? "/liquid-portfolio" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? "/liquid-portfolio" : "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
