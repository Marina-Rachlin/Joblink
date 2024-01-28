/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "https://joblink-app-c9b1ba4e0b1c.herokuapp.com",
    MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN,
  },
};

module.exports = nextConfig;
