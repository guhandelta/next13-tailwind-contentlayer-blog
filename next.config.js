/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');
const nextConfig = {}

// spreading the input prop so it can be expoerted individually
module.exports = withContentlayer({ ...nextConfig });
