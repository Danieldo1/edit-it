/** @type {import('next').NextConfig} */
import path from 'path'

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.ko-fi.com',
            },
        ],
    },
    webpack: (config) => {
        const { webpack } = config
        const __dirname = path.resolve()
        config.resolve.alias['@'] = path.resolve(__dirname, 'src')
    
        return config;
      },
};

export default nextConfig;
