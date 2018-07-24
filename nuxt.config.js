const { createApolloFetch } = require('apollo-fetch');
const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/dbvblog'
const gql = require('graphql-tag')
const fetch = createApolloFetch({
  uri: GRAPHCMS_API,
});

const query = `
  query AllPosts {
    allPosts(
      filter: {isPublished: true}
    ) {
      id,
      title,
      slug,
      content,
      tags,
      authors {
        id,
        name,
        avatar {
          id,
          handle,
          url
        }
      }
    }
  }
`

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Dhaval Vyas - Front End Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:900' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Permanent+Marker:400' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lora:400,700i' }
    ],
    script: [
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ]
  },
  generate: {
    fallback: true,
    routes: async function() {
      const {data} = await fetch({query})
      return data.allPosts.map((post) => {
        return {
          route: '/blog/' + post.slug,
          payload: post
        }
      })
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2F2B59' },
  /*
  ** Build configuration
  */
  build: {
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1 KO
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
  ],
  plugins: [
  ],
  modules: [
    '@nuxtjs/bootstrap-vue',
    '@nuxtjs/font-awesome',
    /* ['@nuxtjs/google-analytics', { ua: 'YOUR_ANALYTICS_ID' }], */
    ['@nuxtjs/markdownit', { html: true, linkify: true, breaks: true, injected: true }],
    '@nuxtjs/apollo',
  ],
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  },
}
