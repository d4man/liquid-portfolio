import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? "/damanjot-singh.github.io" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? "/damanjot-singh.github.io" : "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
