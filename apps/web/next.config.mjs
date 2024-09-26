/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {protocol: 'https', hostname: 'picsum.photos'},
            {protocol: 'http', hostname: 'picsum.photos'}
        ]
    }
};

export default nextConfig;
