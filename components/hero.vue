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

<style lang="scss" scoped type="text/scss">
  @import '../styles/base.scss';

  .hero-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  .hero {
    background-color: $dark-purple;
    margin-bottom: 40px;
  }

  .subtitle {
    color: #f3f3f3;
  }
</style>
