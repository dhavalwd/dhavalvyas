<template>
  <div v-bind:class="{ small : isSmall, large : isLarge }" class="text-center">
    <img class="me" src="http://vuejsradar.com/assets/img/logo2.png"/>
    <h1 class="site-title" v-bind:class="{ 'mt-3' : isLarge}">
      <router-link :to="{ path: '/'}">Dhaval Vyas</router-link>
    </h1>
    <h2 class="site-subtitle" v-bind:class="{ 'mt-3' : isLarge}">Personal portfolio and Blog</h2>
    <div class="social d-flex justify-content-center" v-show="isLarge">
      <div v-show="isLarge" class="item"><a href="https://twitter.com/CoolDhavs"><i class="fa fa-twitter" aria-hidden="true"></i></a></div>
      <div v-show="isLarge" class="item"><a href="http://www.linkedin.com/in/dhavalbvyas"><i class="fa fa-linkedin" aria-hidden="true"></i></a></div>
      <div v-show="isLarge" class="item"><a href="https://github.com/dhavalwd"><i class="fa fa-github" aria-hidden="true"></i></a></div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    props: ['size'],
    data () {
      return {
        isSmall: (this.size === 'small'),
        isLarge: (this.size === 'large')
      }
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import '../styles/base.scss';

  .small {
    .site-title {
      font-size: 2.5em;
      margin-bottom: 0.5em;
    }

    .site-subtitle {
      font-size: 1.5em;
      margin-bottom: 0.5em;
    }

  }

</style>
