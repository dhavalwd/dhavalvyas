<template>
  <div>
    <navigation></navigation>
    <nuxt/>
    <Footer></Footer>
  </div>
</template>

<script>
  import Navigation from '~/components/navigation'
  import Footer from '~/components/footer'

  export default {
    components: {
      Navigation,
      Footer
    }
  }
</script>

<style lang="sass" type="text/sass">
  @import '../node_modules/bulma/bulma'
  @import '../node_modules/bulma-timeline/dist/bulma-timeline'
</style>
