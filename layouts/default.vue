<template>
  <div>
    <navigation></navigation>
    <nuxt/>
  </div>
</template>

<script>
  import Navigation from '~/components/navigation'

  export default {
    components: {
      Navigation
    }
  }
</script>

<style lang="sass" type="text/sass">
  @import '../node_modules/bulma/bulma';
  @import "../node_modules/bulma-timeline/dist/bulma-timeline.sass"
</style>
