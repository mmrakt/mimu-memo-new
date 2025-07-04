import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://placehold.jp/**")],
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: {
    mdxRs: true,
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
