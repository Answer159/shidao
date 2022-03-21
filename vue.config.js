  module.exports = {
      lintOnSave: false,
      devServer: {
          port: 9000,
          proxy:{
              '/shidao':{
                  target:'http://localhost:8080',
                  ws: true,
                  changeOrigin: true,
              },
              '/img':{
                  target:'http://localhost:8099',
                  ws: true,
                  changeOrigin: true,
              },
              // '/users':{
              //     target:'http://localhost:8080',
              //     ws: true,
              //     changeOrigin: true,
              // }
          }
      },

      configureWebpack: {
          resolve: {
              alias: {
                  '@': '/src',
                  'assets': '@/assets',
                  'common': '@/common',
                  'components': '@/components',
                  'network': '@/network',
                  'views': '@/views',
              }
          }
      },

  }
