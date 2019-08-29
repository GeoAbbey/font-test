import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',

  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: { color: '#fff' },

  css: [],

  plugins: [],

  buildModules: ['@nuxtjs/vuetify'],

  modules: ['nuxt-webfontloader'],

  webfontloader: {
    google: {
      families: ['Montserrat:400,500,700,900']
    }
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: false
    },
    treeShake: true,
    theme: {
      themes: {
        light: {
          primary: '#0415ca',
          accent: '#6D6D6D',
          secondary: '#06d79c'
        }
      }
    }
  },

  build: {
    extend(config, ctx) {}
  }
}
