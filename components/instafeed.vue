<template>
  <!-- Instafeed -->
    <div :class="containerClass">
      <div class="Instafeed-columns">
        <slot v-for="(feed, index) in feeds" name="feeds" :index="index" :feed="feed"></slot>
        <slot name="error" :error="error"></slot>
      </div>
    </div>
</template>

<script type='text/babel'>
import axios from 'axios'

export default {
  name: 'instafeed',
  props: {
    token: {
        type: String,
        required: false
    },
    count: {
        type: Number,
        required: false
    },
    tags: {
        type: Array,
        default: () => [],
        required: false
    },
    containerClass: {
        type: String,
        default: 'Instafeed',
        required: false
    }
  },
  data: () => ({
    error: '',
    feeds: []
  }),
  mounted () {
    this.getUserFeed()
  },
  methods: {
    getUserFeed () {
        axios
            .get(`https://api.instagram.com/v1/users/self/media/recent?access_token=510263761.1677ed0.75d60c7473e0494c980e22a04f3c8606&count=${this.count}`)
            .then(response => {
                if (response.status === 400) this.error = response.meta
                if (response.status === 200) {
                    if (response.status === 200) {
                        this.feeds = response.data.data
                    }
                }
            })
    }
  }
}
</script>

<style lang="scss" scoped type="text/scss">
  @import '../styles/base.scss';
  
    .Instafeed-columns {
        display: flex;
        flex-flow: row; 
        flex-wrap: wrap;
    }
</style>
