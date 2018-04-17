<template>
  <div class="post" v-html="$md.render(markdown)"></div>
</template>
<script type="text/babel">
// import Highlight from 'highlight.js/lib/highlight.js'
// import hljsBash from 'highlight.js/lib/languages/bash.js';
// import highlightCSS from 'highlight.js/lib/languages/css.js';
// import hljsJs from 'highlight.js/lib/languages/javascript.js';

// Highlight.registerLanguage('css', highlightCSS);
// Highlight.registerLanguage('base', hljsBash);
// Highlight.registerLanguage('javascript', hljsJs);

export default {
  props: {
    markdown: {
      type: String
    }
  }
}
// default: ''
</script>
