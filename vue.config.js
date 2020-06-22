module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // '@': 'src' 已经配置过了，在3可以用@
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}