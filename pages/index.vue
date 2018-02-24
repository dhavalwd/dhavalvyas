<template>
  <div class="page-index">
    <hero>
      <template slot="title">Dhaval Vyas</template>
      <template slot="subtitle">Front End Developer</template>
    </hero>

    <div class="recent-posts container-fluid">
      <div v-for="post in posts" class="row post mb-5 justify-content-center">
        <div class="col-sm-10">
          <h2 class="title is-3">Recent Posts</h2>
        </div>
        <div class="col-sm-10">
          <h6 class="created-at" v-html="post.created_at"></h6>
          <h5><router-link class="display-4 post-title" :to="{ name: 'slug', params: { slug: post.slug }}">{{post.title}}</router-link></h5>
        </div>
      </div>
    </div>

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

<style lang="less" scoped type="text/less">
  @import '../styles/base.less';

  .hero {
    background-color: #2F2B59;
    margin-bottom: 40px;
  }

  .subtitle {
    color: #f3f3f3;
  }


  .recent-posts {
    .title {
      margin-bottom: 40px;
    }

    .post-title {
      font-weight: 300;
      font-size: 1.5em;
      color: @grey;
      font-family: 'Raleway', sans-serif, "Source Sans Pro";
      &:hover {
        text-decoration: underline;
      }
    }

    .created-at {
      font-style: italic;
      color: @grey-light;
    }

    .excerpt {
      font-size: 1.1em;
      line-height: 1.5em;
      color: @grey;
    }
  }

</style>
