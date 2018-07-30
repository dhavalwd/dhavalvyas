<template>
  <!-- Navigation Bar -->
  <div class='Main_Navigation'>
    <div class="brand">
        <nuxt-link to="/"><img src="~/assets/images/logo.svg" /></nuxt-link>
    </div>
    <nav class='cd-stretchy-nav' v-bind:class="{ 'nav-is-visible': isActive }">
        <a class='cd-nav-trigger' v-on:click='toggleMenu' href='javascript: void(0)'>
            <span aria-hidden='true'></span>
        </a>
        <ul class="Main_Navigation-links">
            <li><nuxt-link @click.native='toggleMenu' to='/'><span>Home</span></nuxt-link></li>
            <li><nuxt-link @click.native='toggleMenu' to='/blog'><span>Blog</span></nuxt-link></li>
            <li><nuxt-link @click.native='toggleMenu' to='/about'><span>About</span></nuxt-link></li>
            <li><nuxt-link @click.native='toggleMenu' to='/projects'><span>Projects</span></nuxt-link></li>
        </ul>

        <span aria-hidden='true' class='stretchy-nav-bg'></span>
    </nav>
  </div>
</template>

<script type='text/babel'>
export default {
  name: 'quickMenu',
  props: ['size'],
  data () {
    return {
      isSmall: this.size === 'small',
      isLarge: this.size === 'large',
      isActive: false
    }
  },
  methods: {
    toggleMenu (e) {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang='scss' scoped type='text/scss'>
@import '../styles/base.scss';

.Main_Navigation {
  max-width: 960px;
  margin: 0 auto;
  position: relative;
  z-index: 999;

  .cd-stretchy-nav &-links {
    a {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      &.nuxt-link-exact-active {
        &:after {
          opacity: 1;
        }
        span {
          background-color: #9acd91;
          color: #0e3150;
        }
      }

      &:hover {
        &:after {
          opacity: 1;
        }

        span {
          background-color: #9acd91;
          transition: all 0.3s ease-in;
          color: #0e3150;
        }
      }
      span {
        @extend %font-lora;
        font-size: 0.65em;
        background-color: #0e3150;
        border-radius: 4px;
        padding: 4px 16px;
        line-height: 2;
      }
    }
  }
}

.cd-stretchy-nav {
    z-index: 3;
}

.navbar {
  position: absolute;
  z-index: 3;
  width: 100%;
  left: 0;

  &.is-transparent {
    background: transparent;
  }
}

.navbar-brand {
  width: auto;
  .navbar-item {
    width: 100px;
    img {
      max-height: none;
    }
  }
}

.navbar-light .navbar-nav .nav-link.nuxt-link-exact-active {
  border-bottom: 2px solid #2f2b59;
}
</style>
