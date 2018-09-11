<template>
  <main class="main" id="main">
    <hero class="is-fullheight">
      <div slot="background" class="hero-bg" :style="{ backgroundImage: `url(/images/blog-bg.jpg)` }"></div>
      <template slot="title">Blog</template>
    </hero>
    <section class="section layout-fixed">
      <div class="Blog">
        <div class="Blog-container">
          <div class="Blog-no_items" v-if="posts.length == 0">
              <h2 class="title is-2">Coming soon!</h2>
              <p class="subtitle is-3">I am writing as fast as I can to finish my first blog.</p>
              <img src="~/assets/images/typing.gif" alt="">
          </div>
          <div v-if="posts.length > 0" v-for="post in posts" :key="post.slug" class="Blog-item">
            <BlogPostCard>
              <img slot="Blog_Post_Card-image" :src=post.coverImage.url alt="Placeholder image">
              <template slot="Blog_Post_Card-title">{{post.title}}</template>
              <template slot="Blog_Post_Card-content">{{post.postShortDescription}}</template>
              <router-link slot="Blog_Post_Card-link" :to="{ path: `/blog/${post.slug}`}"></router-link>
            </BlogPostCard>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import allPosts from '~/apollo/queries/allPosts'
import Author from '~/components/author'
import Hero from '~/components/hero'
import BlogPostCard from '~/components/Blog_Post_Card'

export default {
  components: {
    allPosts,
    Author,
    Hero,
    BlogPostCard
  },
  head () {
    return {
      title: 'Blog Posts'
    }
  },
  async asyncData ({params, payload, error, app}) {
    if (payload) return { allPosts: payload }
    else {
      let {data} = await app.apolloProvider.defaultClient.query(
        { query: allPosts, prefetch: true }
      )

      // ToDo: Convert date in readable format and pass it to data
      // for (let i = 0; i < data.allPosts.length; i++) {
      //   data.allPosts[i].dateAndTime = new Date(data.allPosts[i].dateAndTime).toDateString()
      // }
      return { posts: data.allPosts }
    }
  },
  data: () => ({
    loading: 0
  }),
  apollo: {
    $loadingKey: 'loading'
  }
}
</script>

<style lang="scss" type='text/scss'>
  @import '../../styles/base.scss';

  .Blog {

    &-item {
      padding: 0px 16px 16px 0px;

      .title {
        margin: 0;
        padding: 0px 0px 16px 0px;
        display: block;
      }
    }
  }

  // Recent Posts
  .Blog-container {
    display: flex;
    flex-flow: row; 
    flex-wrap: wrap;
  }

  .Blog-item {
    flex: 0 0 100%;
    padding: 10px;
    margin-bottom: 16px;
  }

  .Blog-no_items {
    width: 100%;
    text-align: center;
  }

  /* Tablet (medium) screens */
  @media (min-width: 768px) {
    .Blog-item {
      flex: 0 0 50%;     
    }
  }

  /* Large screens */
  @media (min-width: 960px) {
    .Blog-item{
      flex: 0 0 33.33%;
    }
    .Blog-item:first-of-type {
      flex: 0 0 33.33%;
    }
  }
</style>
