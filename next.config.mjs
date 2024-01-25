/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.ko-fi.com',
            },
            {
                protocol: 'http',
                hostname: 'res.cloudinary.com'
            }
        ],
    },
    output: "standalone",
};

export default nextConfig;
