<template>
  <main class="main" id="main">
      <hero class="hero-homepage is-fullheight" :background-url="require('~/static/images/home-page-bg.jpg')">
        <div slot="background" class="hero-bg" :style="{ backgroundImage: `url(/images/home-page-bg.jpg)` }"></div>
        <template slot="title">Dhaval Vyas</template>
        <template slot="subtitle">Front End Developer</template>
      </hero>
      <section class="section layout-fixed">
        <div class="Recent_Posts">
          <div class="Recent_Posts-container">
            <div class="Recent_Posts-title">
              <h2 class="title is-2">Recent Posts</h2>
            </div>
            <div class="Recent_Posts-details">
              <div v-for="post in posts" :key="post.slug" class="Recent_Posts-item">
                <!-- <h6 class="Recent_Posts-created_at" v-html="post.dateAndTime"></h6> -->
                <div class="Recent_Posts-item_title">
                  <h5><router-link class="display-4 Recent_Posts-post_title" exact :to="`/blog/${post.slug}`">{{post.title}}</router-link></h5>
                </div>
                <!-- <div class="Recent_Posts-item_tags">
                  <ul>
                    <li v-for="tag in post.tags" :key="tag" class="Recent_Posts-item_tag">{{tag}}</li>
                  </ul>
                </div> -->
              </div>
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

  export default {
    components: {
      allPosts,
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

