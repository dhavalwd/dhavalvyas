<template>
  <div class="page-index">
    <hero>
      <div slot="background" class="hero-bg" :style="{ backgroundImage: `url(/images/about-me-bg.jpg)` }"></div>
      <template slot="title">About Me</template>
    </hero>
    <main class="main" id="main">
      <section class="section">
        <h2 class="title has-text-centered">Timeline</h2>
        <div class="timeline is-centered">
          <!-- Item 1 -->
          <header class="timeline-header">
            <span class="tag is-medium is-primary">Current</span>
          </header>
          <div class="timeline-item is-primary">
            <div class="timeline-marker is-primary"></div>
            <div class="timeline-content">
              <p class="heading">January 2016</p>
              <p>Timeline content - Can include any HTML element</p>
            </div>
          </div>
          <div class="timeline-item is-warning">
            <div class="timeline-marker is-warning is-image is-32x32">
              <img src="http://bulma.io/images/placeholders/32x32.png">
            </div>
            <div class="timeline-content">
              <p class="heading">February 2016</p>
              <p>Timeline content - Can include any HTML element</p>
            </div>
          </div>

          <!-- Item 4 -->
          <header class="timeline-header">
            <span class="tag is-primary">2016</span>
          </header>
          <div class="timeline-item is-danger">
            <div class="timeline-marker is-danger is-icon">
              <i class="fa fa-flag"></i>
            </div>
            <div class="timeline-content">
              <p class="heading">Jun 2016</p>
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
              <p class="heading">Dec 2015</p>
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
              <p class="heading">Oct 2013</p>
              <p>Web Developer <a target="_blank" title="Opens in a new window" href="http://candac.ca/">@CANDAC</a></p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker is-icon">
              <i class="fa fa-book"></i>
            </div>
            <div class="timeline-content">
              <p class="heading">Sep 2013</p>
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
    </main>
  </div>
</template>

<script>
  import Hero from '~/components/hero'

  export default {
    components: {
      Hero
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
</style>
