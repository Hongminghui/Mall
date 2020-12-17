module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        //'@': 'src',默认配置
        //cli3里可以写@，cli2里需要写src，
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}