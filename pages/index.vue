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
                        <img src="~/assets/images/projects/nslc-cannabis-1.jpg" alt="NSLC Cannabis">
                      </div>
                      <div>
                        <img src="~/assets/images/projects/nslc-cannabis-2.jpg" alt="NSLC Cannabis">
                      </div>
                      <div>
                        <img src="~/assets/images/projects/nslc-cannabis-3.jpg" alt="NSLC Cannabis">
                      </div>
                    </slick>
                  </no-ssr>
                  <template slot="card-title">NSLC Cannabis</template>
                  <template slot="card-subtitle">@T4G</template>
                  <div slot="card-content" class="cardContent">
                      <ul>
                        <li>Front End Build Script to generate HTML, CSS and bundled JS</li>
                        <li>Major functionalities: Search Results page, Product Listing page</li>
                      </ul>
                      <div class="tags">
                        <span class="tag">HTML (Pug)</span>
                        <span class="tag">Javascript (ES6)</span>
                        <span class="tag">CSS (Sass)</span>
                        <span class="tag">jQuery</span>
                        <span class="tag">Node.js</span>
                        <span class="tag">Gulp</span>
                        <span class="tag">Sitecore</span>
                      </div>
                  </div>
                  <template slot="card-link"><a href="https://cannabis.mynslc.com" target="_blank"></a></template>
                </card>
              </div>
              <div class="Recent_Project-column">
                <card>
                  <no-ssr slot="card-image">
                    <slick ref="slick" :options="slickOptions">
                      <div>
                        <img src="~/assets/images/projects/crombie-1.jpg" alt="Crombie REIT">
                      </div>
                      <div>
                        <img src="~/assets/images/projects/crombie-2.jpg" alt="Crombie REIT">
                      </div>
                    </slick>
                  </no-ssr>
                  <template slot="card-title">Crombie REIT</template>
                  <template slot="card-subtitle">@T4G</template>
                  <div slot="card-content" class="cardContent">
                      <ul>  
                        <li>AirBnb style Google Map functionality</li>
                        <li>Individual property page with Google Map Street view in slider</li>
                      </ul>
                      <div class="tags">
                        <span class="tag">Drupal 8</span>
                        <span class="tag">HTML (Pug)</span>
                        <span class="tag">Javascript (ES6)</span>
                        <span class="tag">CSS (Sass)</span>
                        <span class="tag">jQuery</span>
                      </div>
                  </div>
                  <template slot="card-link"><a href="http://crombie.ca/properties" target="_blank"></a></template>
                </card>
              </div>
            </div>
            <div class="has-text-centered">
              <router-link class="button is-dominant" :to="{ path: `/projects`}">View All Projects</router-link>
            </div>
          </div>
        </div>
      </section>
      <section class="section background_accent1">
        <h2 class="title is-3 text-center-me"><a href="https://www.instagram.com/dhavalvyas30/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" />&nbsp; DHAVALVYAS30</a></h2>
        <div class="Instafeed-container">
            <Instafeed :count="4">
              <template slot="feeds" slot-scope="props">
                <div class="Instafeed-column">
                    <div class="card">
                      <div class="card-image">
                        <a :href=props.feed.link target="_blank">
                          <figure class="image">
                            <img :src=props.feed.images.standard_resolution.url :alt=props.feed.caption.text>
                          </figure>
                        </a>
                      </div>
                      <div class="card-content">
                        <div class="content">
                          <p>{{ props.feed.caption.newCaption }}</p>
                          <p><a :href=tag.link v-for="(tag, index) in props.feed.tagLinks" target="_blank" :key=index>#{{ tag.tag }} </a></p>
                          <p v-if=props.feed.location><font-awesome-icon icon="map-marker-alt" />&nbsp;{{ props.feed.location.name }}</p>
                        </div>
                      </div>
                      <footer class="card-footer">
                        <a :href=props.feed.link target="_blank" class="card-footer-item"><font-awesome-icon icon="heart" />&nbsp;{{ props.feed.likes.count }}</a>
                        <a :href=props.feed.link target="_blank" class="card-footer-item"><font-awesome-icon icon="comments" />&nbsp;{{ props.feed.comments.count }}</a>
                        <a :href=props.feed.link target="_blank" class="card-footer-item"><font-awesome-icon icon="external-link-alt" /></a>
                      </footer>
                    </div>
                </div>
              </template>
              <template slot="error" slot-scope="props">
                <div class="fancy-alert"> {{ props.error.error_message }} </div>
              </template>
            </Instafeed>
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
  import Instafeed from '~/components/instafeed'

  export default {
    components: {
      allPosts,
      Author,
      Hero,
      IntroBox,
      BlogPostCard,
      Card,
      Instafeed
    },
    head () {
      return {
        title: 'Dhaval Vyas - Front End Developer',
        meta: [
          { hid: 'home', name: 'dhaval vyas', content: 'Dhaval Vyas is a Front End developer from Halifax, Nova Scotia, Canada. He creates for the web. This is portfolio of Dhaval Vyas.' }
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
        return { 
          posts: data.posts
        }
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

