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
  },
  // devServer: {
  //   host: '172.22.24.219',  //将浏览地址的本地服务修改为本机ip地址，用来到手机上测试
  //   port: 8085,           //端口号
  // },
}
