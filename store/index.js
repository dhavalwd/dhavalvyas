import Vuex from 'vuex'

const makeStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      post: {}
    },
    mutations: {
      updatePosts (state, { posts }) {
        state.posts = posts
      },
      updatePost (state, { post }) {
        state.post = post
      }
    },
    actions: {
      getPostWithSlug ({commit, state}, slug) {
        let post = state.posts.find((post) => {
          return (post.slug === slug)
        })
        commit('updatePost', { post: post })
      },
      getPosts ({commit}) {
        commit('updatePosts', { posts: [
          {
            id: 1,
            slug: 'purpose-for-the-new-site',
            title: 'Purpose for the new site',
            created_at: '02/24/2018',
            meta: {
              id: 1,
              name: 'Purpose for the new site',
              content: 'Purpose for the new site'
            }
          }
        ]})
      }
    }
  })
}

export default makeStore
