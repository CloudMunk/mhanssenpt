const colors = require('vuetify/es5/util/colors').default
const StoryBlokClient = require('storyblok-js-client')
  

function dynamicRoutes() {
  const client = new StoryBlokClient({
    accessToken: StoryBlokToken
  })
  const version = process.env.STORYBLOK_VERSION === 'draft' ? 'draft' : 'published'
  
  const routes = client
      .get('cdn/links', {
      version
    })
    .then((res) => {
      return Object.values(res.data.links).map((link) => {
        if (version === 'published' && link.slug.includes('_dev')) {
          return
        }
      })
    })
    return Promise.all([routes]).then((values) => {
      return values.join().split(',')
    })
}
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
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
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['storyblok-nuxt', {accessToken: 'wEHDckQosknONjbrpyBKyQtt', cacheProvider: 'memory'}],
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.lighten5,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
 generate: {
  fallback: '404.html',
  routes: this.dynamicRoutes,
 
build: {
  
  },
  /*
  ** You can extend webpack config here
  */
  extend (config, ctx) {
  }
}
}
