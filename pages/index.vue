<template>
  <main class="main" id="main">
      <hero class="hero-homepage is-fullheight" :background-url="require('~/static/images/home-page-bg.jpg')">
        <div slot="background" class="hero-bg" :style="{ backgroundImage: `url(/images/home-page-bg.jpg)` }"></div>
        <template slot="title">Dhaval Vyas</template>
        <template slot="subtitle">Front End Developer</template>
      </hero>
      <section class="home_about_me background_accent1">
          <div class="About_Me-home layout-fixed columns">
            <div class="illustration column is-5">
              <img src="~/assets/images/static_assets_rpm6.svg" alt="HTML, CSS, JS" />
            </div>
            <div class="about-me-description">
              <p>I am Front End Developer. As you already figured out from this illustration, almost every day, my day starts and ends with JavaScript, HTML, CSS. They are part of my life and I love it. ❤️</p>
            </div>
          </div>
      </section>
      <section class="section layout-fixed" v-if="posts.length > 0">
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
      <section class="section layout-fixed">
        <div class="Recent_Projects">
          <div class="Recent_Projects-title">
              <h2 class="title is-2">Recent Projects</h2>
          </div>
          <div class="Recent_Projects-items">
            <div class="Recent_Project-columns">
              <div class="Recent_Project-column">
                <card>
                  <no-ssr slot="card-image">
                    <slick ref="slick" :options="slickOptions">
                      <div>
                        <img src="~/assets/images/projects/can-1.jpg" alt="CANDAC">
                      </div>
                      <div>
                        <img src="~/assets/images/projects/can-2.jpg" alt="CANDAC">
                      </div>
                      <div>
                        <img src="~/assets/images/projects/can-3.jpg" alt="CANDAC">
                      </div>
                    </slick>
                  </no-ssr>
                  <template slot="card-title">CANDAC</template>
                  <template slot="card-subtitle">@CANDAC (2014)</template>
                  <!-- <div slot="card-content" class="cardContent">
                      <ul>
                        <li>Druapl Custom Theme</li>
                        <li>JavaScript</li>
                        <li>SASS</li>
                        <li>jQuery</li>
                      </ul>
                  </div> -->
                  <template slot="card-link"><a href="http://candac.ca/" target="_blank"></a></template>
                </card>
              </div>
              <div class="Recent_Project-column">
                <card>
                  <no-ssr slot="card-image">
                    <slick ref="slick" :options="slickOptions">
                      <div>
                        <img src="~/assets/images/projects/kier-1.jpg" alt="Kier Group Plc">
                      </div>
                      <div>
                        <img src="~/assets/images/projects/kier-2.jpg" alt="Kier Group Plc">
                      </div>
                      <div>
                        <img src="~/assets/images/projects/kier-3.jpg" alt="Kier Group Plc">
                      </div>
                    </slick>
                  </no-ssr>
                  <template slot="card-title">Kier Group PLC</template>
                  <template slot="card-subtitle">@Investis (2011)</template>
                  <!-- <div slot="card-content" class="cardContent">
                      <ul>
                        <li>Sitecore CMS</li>
                        <li>JavaScript</li>
                        <li>SASS</li>
                        <li>jQuery</li>
                      </ul>
                  </div> -->
                  <template slot="card-link"><a href="http://www.kier.co.uk/" target="_blank"></a></template>
                </card>
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
  import Card from '~/components/dv-card'

  export default {
    components: {
      allPosts,
      Author,
      Hero,
      IntroBox,
      BlogPostCard,
      Card
    },
    head () {
      return {
        title: 'Dhaval Vyas - Front End Developer',
        meta: [
          { hid: 'home', name: 'dhaval vyas', content: 'Dhaval Vyas is a Front End developer. He creates for the web. This is portfolio of Dhaval Vyas.' }
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
    },
    data () {
      return {
        slickOptions: {
          slidesToShow: 1,
          rows: 0,
          infinite: false,
          prevArrow: '<a href="#" class="slick-prev"></a>',
          nextArrow: '<a href="#" class="slick-next"></a>'
        }
      }
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import 'slick-carousel/slick/slick.css';
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

  .noBlogs {
    h2 {
      font-size: 2rem;
    }
  }

  .column {
    width: 100%;
    @media (min-width:640px) {
      width: 33%;
    }
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

  // Recent Projects
  .Recent_Projects-title {
    padding: 24px 0;
    h2 {
      text-align: center;
    }
  }

  .Recent_Project-columns {
    display: flex;
    flex-flow: row; 
    flex-wrap: wrap;
  }

  .Recent_Project-column {
    width: 100%;
    padding: 20px 30px;

    @media (min-width: 640px) {
      width: 50%;
      padding: 0 24px 32px;
    }
  }

</style>

