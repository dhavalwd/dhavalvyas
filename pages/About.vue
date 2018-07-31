<template>
    <main class="main" id="main">
      <hero class="is-fullheight">
        <div slot="background" class="hero-bg" :style="{ backgroundImage: `url(/images/about-me-bg.jpg)` }"></div>
        <template slot="title">About Me</template>
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
              <p class="heading">June 2018</p>
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
      <section class="section about-me-contact">
        <h2 class="title has-text-centered">Drop me a message!</h2>
        <form name="contact" method="POST" netlify>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Name">
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" placeholder="Email">
            </div>
          </div>
          <div class="field">
            <label class="label">Subject</label>
            <div class="control">
              <input class="input" type="text" placeholder="Subject">
            </div>
          </div>
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </section>
    </main>
</template>

<script>
  import Hero from '~/components/hero'
  import IntroBox from '~/components/intro_box'

  export default {
    components: {
      Hero,
      IntroBox
    },
    head () {
      return {
        title: 'About | Dhaval Vyas',
        meta: [
          { hid: 'about', name: 'about', content: 'About Dhaval Vyas.' }
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
</style>
