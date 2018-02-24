<template>
  <!-- Navigation Bar -->
  <div>
    <section class="hero is-medium is-bold">
      <div class="hero-body">
        <div class="hero-container">
          <h1 class="title site-title">
            <slot name="title"></slot>
          </h1>
          <h2 class="subtitle">
            <slot name="subtitle"></slot>
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/babel">
  export default {
    props: ['title', 'subtitle']
  }
</script>


<style lang="less" scoped type="text/less">
  @import '../styles/base.less';

  .hero-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .hero {
    background-color: @dark-purple;
    margin-bottom: 40px;
  }

  .subtitle {
    color: #f3f3f3;
  }
</style>
