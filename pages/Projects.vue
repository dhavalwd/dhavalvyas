<template>
  <div class="page-index">
    <hero class="hero-projects">
      <div slot="background" class="hero-bg" :style="{ backgroundImage: `url(/images/projects-bg.jpg)` }"></div>
      <template slot="title">Projects</template>
    </hero>
    <div class="projects-all">
      <div class="columns">
        <div class="column">
          <card>
            <img slot="card-image" src="https://source.unsplash.com/888HU1GauzY/800x500" alt="Placeholder image">
            <template slot="card-title">Project 1</template>
            <template slot="card-subtitle"><a href="http://www.t4g.com">@T4G</a></template>
            <div slot="card-content" class="cardContent">
                This project was built using these frameworks and languages.<br/>
                <a href="#">JavaScript</a><a href="#">SASS</a><a href="#">jQuery</a>.
            </div>
          </card>
        </div>
        <div class="column">
          <card>
            <img slot="card-image" src="https://source.unsplash.com/888HU1GauzY/800x500" alt="Placeholder image">
            <template slot="card-title">Project 2</template>
            <template slot="card-subtitle"><a href="http://investis.com">@Investis</a></template>
            <div slot="card-content" class="cardContent">
                This project was built using these frameworks and languages.<br/>
                <a href="#">JavaScript</a><a href="#">SASS</a><a href="#">jQuery</a>.
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
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
  margin: 0 auto;
}
.cardContent a + a {
  padding-left: 5px;
}
</style>
