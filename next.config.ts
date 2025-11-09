import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV === "production" ? "export" : undefined,

  images: {
    unoptimized: true,
  },

  // ignored in static export
  async headers() {
    return process.env.NODE_ENV === "production"
      ? []
      : [
          {
            source: "/(.*)",
            headers: [
              { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
              { key: "X-Content-Type-Options", value: "nosniff" },
              { key: "X-Frame-Options", value: "DENY" },
              { key: "X-XSS-Protection", value: "1; mode=block" },
              { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
              {
                key: "Content-Security-Policy",
                value:
                  "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self';",
              },
            ],
          },
        ];
  },
};

export default nextConfig;
