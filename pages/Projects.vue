<template>
  <main class="main" id="main">
    <hero class="hero-projects is-fullheight">
      <div slot="background" class="hero-bg" :style="{ backgroundImage: `url(/images/projects-bg.jpg)` }"></div>
      <template slot="title">Projects</template>
    </hero>
    <div class="projects-all layout-fixed">
      <div class="columns">
        <div class="column">
          <card>
            <img slot="card-image" src="~/assets/images/kier-1.jpg" alt="Kier Group Plc">
            <template slot="card-title"><a href="http://www.kier.co.uk/" target="_blank">Kier Group PLC</a></template>
            <template slot="card-subtitle"><a target="_blank" href="https://www.investis.com/">@Investis</a></template>
            <div slot="card-content" class="cardContent">
                <p>This project was built using below front end languages.<br/>
                <a href="javascript: void(0)">JavaScript</a><a href="javascript: void(0)">SASS</a><a href="javascript: void(0)">jQuery</a>.</p>
            </div>
          </card>
        </div>
        <div class="column">
          <card>
            <img slot="card-image" src="~/assets/images/am-1.jpg" alt="ArcelorMittal">
            <template slot="card-title"><a href="http://corporate.arcelormittal.com/" target="_blank">ArcelorMittal Corporate</a></template>
            <template slot="card-subtitle"><a target="_blank" href="http://investis.com">@Investis</a></template>
            <div slot="card-content" class="cardContent">
                <p>This project was built using below front end languages.<br/>
                <a href="#">JavaScript</a><a href="#">SASS</a><a href="#">jQuery</a>.</p>
            </div>
          </card>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import Author from '~/components/author'
  import Hero from '~/components/hero'
  import Card from '~/components/dv-card'

  export default {
    components: {
      Author,
      Hero,
      Card
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

<style lang="scss" scoped type="text/scss">
@import '../styles/base.scss';

.projects-all {
  max-width: 960px;
  margin: 40px auto 0px;
}
.cardContent a + a {
  padding-left: 5px;
}
</style>
