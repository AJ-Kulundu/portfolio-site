/** @type {import('next').NextConfig} */
const {withContentlayer} = require('next-contentlayer')
const nextConfig = {
   reactStrictMode: true,
  images:{
    domains:["pbs.twimg.com"]
  },
  experimental:{
    fontLoaders:[
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
    appDir:true,
  },
 
}

module.exports = withContentlayer(nextConfig);
