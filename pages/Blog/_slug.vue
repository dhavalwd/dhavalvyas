<template>
  <main class="main" id="main">
    <hero class="is-large hero-postpage">
      <template slot="title">{{ post.title }}</template>
      <template slot="subtitle">{{ post.created_at }}</template>
    </hero>
    <section class="section layout-fixed">
      <div class="page-slug">
        <div class="markdown content">
          <markdown :markdown="post.content"/>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import post from '~/apollo/queries/post'
  import markdown from '~/components/markdown'
  import hero from '~/components/hero'

  export default {
    name: 'PostPage',
    components: {
      markdown,
      hero
    },
    async fetch ({ store, params, app, payload }) {
      let {data} = await app.apolloProvider.defaultClient.query(
        { query: post, prefetch: true, variables: {slug: params.slug} }
      )
      store.commit('setCurrentPost', data.post)
    },

    // async asyncData({params, payload, error, app}) {
    //   if (payload) return { post: payload }
    //   else {
    //     let {data} = await app.apolloProvider.defaultClient.query(
    //       { query: post, prefetch: true, variables: {slug: params.slug} }
    //     )
    //     return { post: data.post }
    //   }
    // },
    // asyncData() {
    //   return
    // },
    data: () => ({
      loading: 0
    }),

    apollo: {
      $loadingKey: 'loading'
    },

    head () {
      return {
        title: this.post.title,
        link: [
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css' },
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-dark.min.css' }
        ],
        meta: [
          { hid: 'description', name: 'description', content: this.post.description }
        ]
      }
    },

    computed: {
      post () {
        return this.$store.getters.currentPost
      }
    }
  }
</script>

<style lang="scss" type='text/scss'>
  @import '../../styles/base.scss';

  .placeholder {
    height: 366px;
    background-color: #eee;
  }

  .article-header {
    text-align: center;
  }
</style>

