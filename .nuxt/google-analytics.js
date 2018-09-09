import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

export default async function ({ app: { router } }) {
  const moduleOptions = {"id":"UA-45684435-3"}
  Vue.use(VueAnalytics, Object.assign({ router }, moduleOptions))
}
