<template>
  <div class="page-index">
    <hero class="hero-homepage" :background-url="require('~/static/images/home-page-bg.jpg')">
      <div slot="background" class="hero-bg" :style="{ backgroundImage: `url(/images/home-page-bg.jpg)` }"></div>
      <template slot="title">Dhaval Vyas</template>
      <template slot="subtitle">Front End Developer</template>
    </hero>
    <main class="main" id="main">
      <section class="section">
        <div class="Recent_Posts">
          <div v-for="post in posts" :key="post.slug" class="Recent_Posts-container">
            <div class="Recent_Posts-title">
              <h2 class="title is-3">Recent Posts</h2>
            </div>
            <div class="Recent_Posts-details">
              <h6 class="Recent_Posts-created_at" v-html="post.created_at"></h6>
              <h5><router-link class="display-4 Recent_Posts-post_title" :to="{ name: 'slug', params: { slug: post.slug }}">{{post.title}}</router-link></h5>
            </div>
          </div>
        </div>
      </section>
    </main>

  </div>
</template>

<script>
  import Author from '~/components/author'
  import Hero from '~/components/hero'

  export default {
    components: {
      Author,
      Hero
    },
    head () {
      return {
        title: 'Dhaval Vyas',
        meta: [
          { hid: 'home', name: 'dhaval vyas', content: 'Dhaval Vyas is a Front End developer. He creates for the web.' }
        ]
      }
    },
    fetch ({store}) {
      store.dispatch('getPosts')
    },
    computed: {
      posts () {
        return this.$store.state.posts
      }
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import '../styles/base.scss';

  .hero {
    position: relative;
    margin-bottom: 40px;
  }

  .subtitle {
    color: #f3f3f3;
  }

</style>

