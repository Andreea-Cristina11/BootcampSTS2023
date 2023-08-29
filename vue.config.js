const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true, 
  publicPath: process.env.NODE_ENV === 'production'
    ? '/BootcampSTS2023/' // Numele repository-ului creat.
    : '/'
})
