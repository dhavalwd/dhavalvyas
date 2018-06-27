<template>
    <!-- Footer Bar -->
    <section class="section has-text-centered intro_box">
        <div class="container">
            <h2 class="subtitle"><slot name="intro_text"></slot></h2>
        </div>
    </section>
</template>

<style lang="scss" scoped type="text/scss">
@import '../styles/base.scss';

.intro_box {
  background-color: #f2f2f2;
  padding: 5rem 1.5rem;
  .container {
    margin: 0 auto;
    max-width: 600px;
  }
  .subtitle {
      font-size: 1.5rem;
  }
}
</style>
