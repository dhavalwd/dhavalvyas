<template>
  <div class="page-index">
    <hero>
      <template slot="title">Dhaval Vyas</template>
      <template slot="subtitle">Front End Developer</template>
    </hero>
    <main class="main" id="main">
      <section class="section">
        <div class="Recent_Posts">
          <div v-for="post in posts" class="Recent_Posts-container">
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
    background-color: #2F2B59;
    margin-bottom: 40px;
  }

  .subtitle {
    color: #f3f3f3;
  }

</style>

<style lang="scss" scoped type="text/scss">
$grey: #707070;
$grey-light: #8b8b8b;
  
  .Recent_Posts {
    margin: 0 auto;
    max-width: 960px;
    &-title {
      margin-bottom: 40px;
    }

    &-post_title {
      font-weight: 300;
      font-size: 1.5em;
      color: $grey;
      &:hover {
        text-decoration: underline;
      }
    }

    &-created_at {
      font-style: italic;
      color: $grey-light;
      font-family: 'Raleway', sans-serif, "Source Sans Pro";
    }

    &-excerpt {
      font-size: 1.1em;
      line-height: 1.5em;
      color: $grey;
    }
  }
</style>
