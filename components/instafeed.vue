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
import _ from 'lodash'

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
                        this.manageTags()
                        // console.log("Inside User Feed", this.feeds[0].caption.text)
                    }
                }
            })
    },
    manageTags () {
        _.forEach(this.feeds, (value, key) => {
            var newCaption = [];
            var captionParts;

            if (this.feeds[key].caption && this.feeds[key].caption.text && this.feeds[key].caption.text.length > 0) {
                captionParts = this.feeds[key].caption.text.split(' ');
                for (var i=0; i < captionParts.length ; i++) {
                    if (captionParts[i].charAt(0) !== '#') {
                        newCaption.push(captionParts[i])
                    }
                }
            }
            this.feeds[key].caption.newCaption = newCaption.join(' ')
        });


        // Add links for the tags
        _.forEach(this.feeds, (value, key) => {
            var tagLinks = [];

            if (this.feeds[key].tags && this.feeds[key].tags.length > 0) {
                for (var i=0; i < this.feeds[key].tags.length ; i++) {
                    var singleTag = {}
                    singleTag.tag = this.feeds[key].tags[i]
                    singleTag.link = `https://www.instagram.com/explore/tags/${this.feeds[key].tags[i]}`
                    tagLinks.push(singleTag)
                }
            }
            this.feeds[key].tagLinks = tagLinks
        });

        console.log("Feed", this.feeds)
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
