<template>
  <main class="main" id="main">
    <hero class="is-fullheight">
      <div slot="background" class="hero-bg" :style="{ backgroundImage: `url(/images/blog-bg.jpg)` }"></div>
      <template slot="title">Blog</template>
    </hero>
    <section class="section layout-fixed">
      <div class="blog">
        <ul class="blog-container">
          <template v-for="(post, key) in posts">
            <nuxt-link class="blog-item" tag="li" :key="key" exact :to="`/blog/${post.slug}`">
              <a class="blog-title title" v-text="post.title"></a>
              <!-- <span class="subtitle" v-text="post.dateAndTime"></span> -->
              <!-- <div class="post-detail tags" v-if="post.tags" >
                <template v-for="(tag, index) in post.tags">
                  <div class="tag">{{tag}}</div>
                </template>
              </div> -->
            </nuxt-link>
          </template>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import allPosts from '~/apollo/queries/allPosts'
import Author from '~/components/author'
import Hero from '~/components/hero'

export default {
  components: {
    allPosts,
    Author,
    Hero
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

  .blog {

    &-item {
      padding: 0px 16px 16px 0px;

      .title {
        margin: 0;
        padding: 0px 0px 16px 0px;
        display: block;
      }
    }
  }
</style>
