<template>
  <div>
    <navigation></navigation>
    <hero>
      <template slot="title">{{ post.title }}</template>
      <template slot="subtitle">{{ post.created_at }}</template>
    </hero>
    <main class="main" id="main">
      <section class="section">
        <div class="page-slug" v-if="postExists">
          <div class="markdown content">
            <nuxt />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script type="text/babel">
  import Author from '~/components/author'
  import Navigation from '~/components/navigation'
  import Hero from '~/components/hero'

  export default {
    components: {
      Author,
      Navigation,
      Hero
    },
    fetch ({store, params}) {
      store.dispatch('getPosts')
      store.dispatch('getPostWithSlug', params.slug)
    },
    computed: {
      slug () {
        return this.$route.params.slug
      },
      postExists () {
        return !!this.$store.state.post
      },
      post () {
        return this.$store.state.post
      }
    }
  }
</script>

<style lang="scss" type="text/scss">
  .markdown {
    font-size: 1.2em;

    blockquote {
      padding: .5rem 1rem;
      margin-bottom: 1rem;
      margin: 0 0 1rem;
      font-size: 1.25rem;
      border-left: .25rem solid #eceeef;
    }

    h1,h2,h3,h4,h5,h6 {
      margin-top: 2.2em;
    }

    pre {
      margin: 2.2em 0;
    }
  }
</style>

<style lang="sass" type="text/sass">
  @import '../node_modules/bulma/bulma';
</style>
