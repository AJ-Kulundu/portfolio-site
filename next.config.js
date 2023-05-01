/** @type {import('next').NextConfig} */
const {withContentlayer} = require('next-contentlayer')
const nextConfig = {
   reactStrictMode: true,
  images:{
    domains:["pbs.twimg.com"]
  },
  experimental:{
    appDir:true,
  },
 
}

module.exports = withContentlayer(nextConfig);
