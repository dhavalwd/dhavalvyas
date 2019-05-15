import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
// const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/dbvblog'
const GRAPHCMS_API = 'https://api-useast.graphcms.com/v1/cjm5gebne167p01c4x2mauv65/master'

export default () => ({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
})
