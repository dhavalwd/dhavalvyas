<template>
  <main class="main" id="main">
      <hero class="hero-homepage is-fullheight" :background-url="require('~/static/images/home-page-bg.jpg')">
        <div slot="background" class="hero-bg" :style="{ backgroundImage: `url(/images/home-page-bg.jpg)` }"></div>
        <template slot="title">Dhaval Vyas</template>
        <template slot="subtitle">Front End Developer</template>
      </hero>
      <section class="home_about_me">
          <div class="About_Me-home layout-fixed columns">
            <div class="illustration column is-5">
              <img src="~/assets/images/static_assets_rpm6.svg" alt="HTML, CSS, JS" />
            </div>
            <div class="about-me-description">
              <p>I am Front End Developer. As you already figured out from this illustration, almost every day, my day starts and ends with Javascript, HTML, CSS. They are part of my life and I love it. ❤️</p>
            </div>
          </div>
      </section>
      <section class="section layout-fixed">
        <div class="Recent_Posts">
          <div class="Recent_Posts-container">
            <div class="Recent_Posts-title">
              <h2 class="title is-2">Recent Posts</h2>
            </div>
            <div class="Recent_Posts-details">
              <div v-for="post in posts" :key="post.slug" class="Recent_Posts-item">
                <BlogPostCard>
                  <img slot="Blog_Post_Card-image" :src=post.coverImage.url alt="Placeholder image">
                  <template slot="Blog_Post_Card-title">{{post.title}}</template>
                  <template slot="Blog_Post_Card-content">{{post.postShortDescription}}</template>
                  <router-link slot="Blog_Post_Card-link" :to="{ path: `/blog/${post.slug}`}"></router-link>
                </BlogPostCard>
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
  import IntroBox from '~/components/intro_box'
  import BlogPostCard from '~/components/Blog_Post_Card'

  export default {
    components: {
      allPosts,
      Author,
      Hero,
      IntroBox,
      BlogPostCard
    },
    head () {
      return {
        title: 'Dhaval Vyas - Front End Developer',
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
  }

  .subtitle {
    color: #f3f3f3;
  }
  
  section.home_about_me {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6em 0;
    background-color: #f7f9ff;
  }

  .about-me-description {
    font-size: 1.5em;
    text-align: center;
    @extend %font-lora;
    padding: 2em;
    font-style: italic;
  }

  // Recent Posts
  .Recent_Posts-details {
    display: flex;
    flex-flow: row; 
    flex-wrap: wrap;
  }

  .Recent_Posts-item {
    flex: 0 0 100%;
    padding: 10px;
    margin-bottom: 16px;
  }

  /* Tablet (medium) screens */
  @media (min-width: 768px) {
    .Recent_Posts-item {
      flex: 0 0 50%;     
    }
  }

  /* Large screens */
  @media (min-width: 960px) {
    .Recent_Posts-item{
      flex: 0 0 33.33%;
    }
    .Recent_Posts-item:first-of-type {
      flex: 0 0 33.33%;
    }
  }

</style>

