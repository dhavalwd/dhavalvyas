<template>
    <main class="main" id="main">
      <hero class="is-fullheight hero-about-us">
        <div slot="background" class="hero-bg" :style="{ backgroundImage: `url(/images/about-me-bg.jpg)` }"></div>
        <template slot="title">About Me</template>
        <a class="button is-dominant" target="_blank" title="PDF, opens in a new window" href="/files/resume.pdf" slot="subtitle">Resume</a>
      </hero>
      <IntroBox>
        <template slot="intro_text">I create for the web and make the web stylish. I create elegant and responsive web interfaces using modern web technologies.</template>
      </IntroBox>
      <section class="section layout-fixed">
        <h2 class="title has-text-centered">Timeline</h2>
        <div class="timeline is-centered">
          <!-- Item 6 -->
          <header class="timeline-header">
            <span class="tag is-medium is-primary">Current</span>
          </header>
          <div class="timeline-item is-primary">
            <div class="timeline-marker is-primary"></div>
            <div class="timeline-content">
              <p>Front End Developer at <a target="_blank" title="Opens in a new window" href="http://www.t4g.com">@T4G</a></p>
            </div>
          </div>

          <!-- Item 5 -->
          <header class="timeline-header">
            <span class="tag is-medium is-primary">2017</span>
          </header>
          <div class="timeline-item is-primary">
            <div class="timeline-marker is-primary"></div>
            <div class="timeline-content">
              <p class="heading">July 2017</p>
              <p>Front End Developer at <a target="_blank" title="Opens in a new window" href="http://www.t4g.com">@T4G</a></p>
            </div>
          </div>

          <!-- Item 4 -->
          <header class="timeline-header">
            <span class="tag is-primary">2016</span>
          </header>
          <div class="timeline-item is-warning">
            <div class="timeline-marker is-warning is-image is-32x32">
              <img src="/images/wedding-couple.png">
            </div>
            <div class="timeline-content">
              <p class="heading">December 2016</p>
              <p>Got married 💍</p>
            </div>
          </div>
          <div class="timeline-item is-danger">
            <div class="timeline-marker is-danger is-icon">
              <i class="fa fa-flag"></i>
            </div>
            <div class="timeline-content">
              <p class="heading">June 2016</p>
              <p>Programmer <a target="_blank" title="Opens in a new window" href="http://www.famousfolks.ca">@Famous Folks</a></p>
            </div>
          </div>
          
          <!-- Item 3 -->
          <header class="timeline-header">
            <span class="tag is-primary">2015</span>
          </header>
          <div class="timeline-item is-danger">
            <div class="timeline-marker is-danger is-icon">
              <i class="fa fa-graduation-cap"></i>
            </div>
            <div class="timeline-content">
              <p class="heading">December 2015</p>
              <p>Graduated <a target="_blank" title="Opens in a new window" href="http://www.dal.ca">@Dalhousie</a></p>
            </div>
          </div>
          
          <!-- Item 2 -->
          <header class="timeline-header">
            <span class="tag is-primary">2013</span>
          </header>
          <div class="timeline-item">
            <div class="timeline-marker is-icon">
              <i class="fa fa-briefcase"></i>
            </div>
            <div class="timeline-content">
              <p class="heading">October 2013</p>
              <p>Web Developer <a target="_blank" title="Opens in a new window" href="http://candac.ca/">@CANDAC</a></p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker is-icon">
              <i class="fa fa-book"></i>
            </div>
            <div class="timeline-content">
              <p class="heading">September 2013</p>
              <p>Student <a target="_blank" title="Opens in a new window" href="http://www.dal.ca">@Dalhousie</a> (MACS)</p>
            </div>
          </div>
          
          <!-- Item 1 -->
          <header class="timeline-header">
            <span class="tag is-primary">2011</span>
          </header>
          <div class="timeline-item is-danger">
            <div class="timeline-marker is-danger is-icon">
              <i class="fa fa-flag"></i>
            </div>
            <div class="timeline-content">
              <p class="heading">July 2011</p>
              <p>Web Producer <a target="_blank" title="Opens in a new window" href="http://www.investis.com/">@Investis</a></p>
            </div>
          </div>
          <header class="timeline-header">
            <span class="tag is-medium is-primary">Start</span>
          </header>
        </div>
      </section>
      <section class="section background_accent1">
        <h2 class="title is-3 text-center-me"><a href="https://www.instagram.com/dhavalvyas30/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" />&nbsp; DHAVALVYAS30</a></h2>
        <div class="Instafeed-container">
            <Instafeed :token=accessToken :count="8">
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
  import Hero from '~/components/hero'
  import IntroBox from '~/components/intro_box'
  import Instafeed from '~/components/instafeed'
  import accessToken from '~/apollo/queries/instagramToken'

  export default {
    components: {
      Hero,
      IntroBox,
      Instafeed,
      accessToken
    },
    async asyncData ({params, payload, error, app}) {
        if (payload) return { accessToken: payload }
        else {
        let {data} = await app.apolloProvider.defaultClient.query(
            { query: accessToken, prefetch: true }
        )

        // ToDo: Convert date in readable format and pass it to data
        // for (let i = 0; i < data.allPosts.length; i++) {
        //   data.allPosts[i].dateAndTime = new Date(data.allPosts[i].dateAndTime).toDateString()
        // }
        return { accessToken: data.allInstagramTokens[0].accessToken }
        }
    },
    head () {
      return {
        title: 'About | Dhaval Vyas',
        meta: [
          { hid: 'about', name: 'about', content: 'This is about me page of Dhaval Vyas. This gives an idea about Dhaval Vyas\'s timeline.' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
@import '../styles/base.scss';

.about-me-contact {
  padding: 5rem 1.5rem;
  margin: 0 auto;
  max-width: 600px;
}

.tag {
  font-style: italic;
}

.tag:not(body).is-primary {
  background-color: $accent_2;
}

</style>
