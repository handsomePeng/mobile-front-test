
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/axios',
    '@/plugins/vue-api',
    '@/plugins/ctx-api',
    '@/plugins/vant',
    '@/plugins/combined-formatMoneyData',
    '@/plugins/combined-formatDate',
    '@/plugins/combined-addMonth',
    '@/plugins/combined-createUUID',
    '@/plugins/combined-validateIsNumber',
    '@/plugins/postscss',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  /**
   * axios
   */
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'https://6a140973.ngrok.io',
      //target: 'http://192.168.0.135:8086',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', //将 /api 替换掉
      },
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  css: [
    '~assets/css/reset.css',
    '~assets/css/public.scss',
  ],
  server: {
    port: 3000, // default: 3000
    host: '106.13.145.143', // default: localhost,
  },
}
