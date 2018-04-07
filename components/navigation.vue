<template>
  <!-- Navigation Bar -->
  <div class="Main_Navigation">
    <nav class="navbar is-transparent is-fixed-top">
        <div class="navbar-brand">
            <nuxt-link class="navbar-item" to="/"><img src="/images/logo.png"/></nuxt-link>
            <div class="navbar-burger burger" data-target="mainNavbar">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div id="mainNavbar" class="navbar-menu">
            <div class="navbar-end">
                <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
                <div class="navbar-item has-dropdown is-hoverable">
                    <nuxt-link class="navbar-link" to="/about">About</nuxt-link>
                    <div class="navbar-dropdown is-boxed">
                        <nuxt-link class="navbar-item" to="/about">About Me</nuxt-link>
                        <a class="navbar-item" target="_blank" href="/files/resume.pdf">Resume</a>
                    </div>
                </div>
                <nuxt-link class="navbar-item" to="/projects">Projects</nuxt-link>
            </div>
        </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped type="text/scss">
  @import '../styles/base.scss';

  .Main_Navigation {
      max-width: 960px;
      margin: 0 auto;
  }
  .navbar-light .navbar-nav .nav-link.nuxt-link-exact-active {
    border-bottom: 2px solid #2F2B59;
  }
</style>
