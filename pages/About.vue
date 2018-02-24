<template>
  <div class="page-index">
    <hero>
      <template slot="title">About Us</template>
    </hero>
    <section class="section">
      <div class="container">
        <h1 class="title">Work History</h1>
      </div>
    </section>
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
