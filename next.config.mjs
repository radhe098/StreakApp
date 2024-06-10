import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['unsplash.com','dummyimage.com'],
    },
};

export default withNextVideo(nextConfig);