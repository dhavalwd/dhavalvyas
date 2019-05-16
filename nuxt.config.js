const { createApolloFetch } = require('apollo-fetch')
const GRAPHCMS_API = 'https://api-useast.graphcms.com/v1/cjm5gebne167p01c4x2mauv65/master'
const gql = require('graphql-tag')
const fetch = createApolloFetch({
  uri: GRAPHCMS_API
})

const query = `
  query AllPosts {
    posts(
      where: {status: PUBLISHED}
    ) {
      id,
      title,
      slug,
      content,
      tags,
      author {
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
      { hid: 'description', name: 'description', content: 'Dhaval Vyas is a Front End developer from Halifax, Nova Scotia, Canada. He creates for the web. This is portfolio of Dhaval Vyas.' },
      { hid: 'keywords', name: 'keywords', content: 'Dhaval Vyas, Front End Developer, Halifax, Canada, Talented, Developer, Front End' }
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
    routes: async function () {
      const {data} = await fetch({query})
      return data.posts.map((post) => {
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
  loadingIndicator: {
    name: 'folding-cube',
    color: '#0e3150',
    background: '#f7f9ff'
  },
  /*
  ** Build configuration
  */
  build: {
    loaders: [
      {
        test: /\.(pdf|png|jpe?g|gif|svg)$/,
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
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  plugins: [
    { src: '~/plugins/slick', ssr: false },
    '~/plugins/fontawesome.js'
  ],
  modules: [
    ['@nuxtjs/google-analytics', { ua: 'UA-45684435-2' }],
    ['@nuxtjs/markdownit', { html: true, linkify: true, breaks: true, injected: true }],
    '@nuxtjs/apollo'
  ],
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  }
}
