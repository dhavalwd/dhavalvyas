<template>
  <!-- Navigation Bar -->
  <div>
    <section class="hero is-medium is-bold">
      <div class="hero-body">
        <slot name="background"></slot>
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
    position: relative;
    z-index: 4;
  }
  
  .hero {
    background-color: $dark-purple;
    margin-bottom: 40px;
    position: relative;
  }

  .subtitle {
    color: #f3f3f3;
  }

  .hero-bg {
    background-color: rgba(0,0,0,0.6);
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-blend-mode: multiply;
    background-position: center;
  }
</style>
