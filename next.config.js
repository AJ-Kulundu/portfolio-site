/** @type {import('next').NextConfig} */
const {withContentlayer} = require('next-contentlayer')
const nextConfig = {
   reactStrictMode: true,
  images:{
    domains:["pbs.twimg.com"]
  }
}

module.exports = withContentlayer(nextConfig);
