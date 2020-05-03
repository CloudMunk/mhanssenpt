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
    '~/plugins/firebase.js'
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
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/vuetify',
    ['storyblok-nuxt', {accessToken: 'wEHDckQosknONjbrpyBKyQtt', cacheProvider: 'memory'}],
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyB7mEmfCfG-bQjla0vcRCzToIq7mAmpgEE',
          authDomain: 'trainingofastoic-74f64.firebaseapp.com',
          databaseURL: 'https://trainingofastoic-74f64.firebaseio.com',
          projectId: 'trainingofastoic-74f64',
          storageBucket: 'trainingofastoic-74f64.appspot.com',
          messagingSenderId: '507848120283',
          appId: '1:507848120283:web:c0e5749e5259820b8979fe',
          measurementId: 'G-ZHG4DVXM10'
        },
        services: {
          auth: true // Just as example. Can be any other service.
        }
      }
    ]
  ],
  module: {
    rules: [
      // SASS has different line endings than SCSS
      // and cannot use semicolons in the markup
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            // Requires sass-loader@^7.0.0
            options: {
              // This is the path to your variables
              data: "@import '@/styles/variables.scss'"
            },
            // Requires sass-loader@^8.0.0
            options: {
              // This is the path to your variables
              prependData: "@import '@/styles/variables.scss'"
            },
          },
        ],
      },
      // SCSS has different line endings than SASS
      // and needs a semicolon after the import.
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            // Requires sass-loader@^7.0.0
            options: {
              // This is the path to your variables
              data: "@import '@/assets/variables.scss';"
            },
            // Requires sass-loader@^8.0.0
            options: {
              // This is the path to your variables
              prependData: "@import '@/assets/variables.scss';"
            },
          },
        ],
      },
    ],
  },
  auth: {
    // Options
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      treeShake: true,
      dark: true,
      themes: {
        options: {customProperties: true},
        dark: {
          primary: colors.blue.lighten5,
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
    // babel: {
    //   presets({ isServer }) {
    //     return [
    //       [
    //         require.resolve('@nuxt/babel-preset-app'),
    //         // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
    //         {
    //           buildTarget: isServer ? 'server' : 'client',
    //           corejs: { version: 3 }
    //         }
    //       ]
    //     ]
    //   }
    // }
  },
  /*
  ** You can extend webpack config here
  */
  extend (config, ctx) {
  }
}
}
