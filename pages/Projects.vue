<template>
  <div class="page-index">
    <hero>
      <template slot="title">Projects</template>
    </hero>
    <div class="container-fluid text-center">
      <div class="row">
        <div class="col-sm-12">
            <p>This is Projects page.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Author from '~/components/author'
  import Hero from '~/components/hero'

  export default {
    components: {
      Author,
      Hero
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
