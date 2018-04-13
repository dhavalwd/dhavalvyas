import MarkdownIt from 'markdown-it'

export default ({ app }, inject) => {

  const md = new MarkdownIt({"html":true,"linkify":true,"breaks":true})

  inject('md', md)
}
