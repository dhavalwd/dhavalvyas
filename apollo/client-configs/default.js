import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
const GRAPHCMS_API = 'https://api-us-east-1.graphcms.com/v2/cjm5gebne167p01c4x2mauv65/master'

export default () => ({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
})
