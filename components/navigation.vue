<template>
  <!-- Navigation Bar -->
  <div class='Main_Navigation'>
    <div class="brand">
        <nuxt-link to="/"><img src="~/assets/images/logo.svg" /></nuxt-link>
    </div>
    <nav class='cd-stretchy-nav' v-click-outside='hide' v-bind:class="{ 'nav-is-visible': isActive }">
        <a class='cd-nav-trigger' v-on:click='toggleMenu' href='javascript: void(0)'>
            <span aria-hidden='true'></span>
        </a>
        <ul class="Main_Navigation-links">
            <li><nuxt-link @click.native='toggleMenu' to='/'><span>Home</span> <font-awesome-icon icon="home" /></nuxt-link></li>
            <li><nuxt-link @click.native='toggleMenu' to='/blog'><span>Blog</span> <font-awesome-icon icon="book" /></nuxt-link></li>
            <li><nuxt-link @click.native='toggleMenu' to='/about'><span>About</span> <font-awesome-icon icon="user" /></nuxt-link></li>
            <li><nuxt-link @click.native='toggleMenu' to='/projects'><span>Projects</span> <font-awesome-icon icon="th-large" /></nuxt-link></li>
        </ul>

        <span aria-hidden='true' class='stretchy-nav-bg'></span>
    </nav>
  </div>
</template>

<script type='text/babel'>
import ClickOutside from 'vue-click-outside'

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
    },
    hide () {
      this.isActive = false
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

<style lang='scss' scoped type='text/scss'>
@import '../styles/base.scss';

.Main_Navigation {
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
          background-color: $accent;
          color: #fff;
        }
      }

      &:hover {
        &:after {
          opacity: 1;
        }

        span {
          background-color: $accent;
          transition: all 0.3s ease-in;
          color: #ffffff;
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

// Navigation
.cd-stretchy-nav {
  position: fixed;
  z-index: 2;
  top: 40px;
  right: 5%;
  pointer-events: none;
  .stretchy-nav-bg {
    /* this is the stretching navigation background */
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: $accent;
    box-shadow: 0 1px 4px rgba(255, 255, 255, 0.6);
    -webkit-transition: height 0.2s, box-shadow 0.2s;
    -moz-transition: height 0.2s, box-shadow 0.2s;
    transition: height 0.2s, box-shadow 0.2s;
  }
  &.nav-is-visible {
    pointer-events: auto;
    .stretchy-nav-bg {
      height: 100%;
      box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);
    }
  }
}

.cd-nav-trigger {
  position: absolute;
  z-index: 3;
  top: 0;
  right: 0;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  /* replace text with image */
  overflow: hidden;
  white-space: nowrap;
  color: transparent;
  pointer-events: auto;
  span {
    /* this is the hamburger icon */
    position: absolute;
    width: 16px;
    height: 2px;
    background-color: #ffffff;
    &::after, &::before {
      /* this is the hamburger icon */
      position: absolute;
      width: 16px;
      height: 2px;
      background-color: #ffffff;
    }
    /* middle line of the hamburger icon */
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    -webkit-transition: background-color 0.2s;
    -moz-transition: background-color 0.2s;
    transition: background-color 0.2s;
    &::after {
      /* top and bottom lines of the hamburger icon */
      content: '';
      top: 0;
      left: 0;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -webkit-transition: -webkit-transform 0.2s;
      -moz-transition: -moz-transform 0.2s;
      transition: transform 0.2s;
    }
    &::before {
      /* top and bottom lines of the hamburger icon */
      content: '';
      top: 0;
      left: 0;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -webkit-transition: -webkit-transform 0.2s;
      -moz-transition: -moz-transform 0.2s;
      transition: transform 0.2s;
      -webkit-transform: translateY(-6px);
      -moz-transform: translateY(-6px);
      -ms-transform: translateY(-6px);
      -o-transform: translateY(-6px);
      transform: translateY(-6px);
    }
    &::after {
      -webkit-transform: translateY(6px);
      -moz-transform: translateY(6px);
      -ms-transform: translateY(6px);
      -o-transform: translateY(6px);
      transform: translateY(6px);
    }
  }
}

.no-touch .cd-nav-trigger:hover ~ .stretchy-nav-bg {
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);
}

.nav-is-visible .cd-nav-trigger span {
  background-color: transparent;
  &::before {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  &::after {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}

.cd-stretchy-nav {
  ul {
    position: relative;
    z-index: 2;
    padding: 60px 0 0;
    visibility: hidden;
    text-align: right;
    a {
      position: relative;
      display: block;
      height: 50px;
      line-height: 50px;
      padding: 0 calc(1em + 50px) 0 1em;
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.4rem;
      -webkit-transition: color 0.2s;
      -moz-transition: color 0.2s;
      transition: color 0.2s;
      &::before {
        /* line visible next to the active navigation item */
        content: '';
        position: absolute;
        width: 3px;
        height: 16px;
        top: 50%;
        right: 60px;
        -webkit-transform: translateX(3px) translateY(-50%) scaleY(0);
        -moz-transform: translateX(3px) translateY(-50%) scaleY(0);
        -ms-transform: translateX(3px) translateY(-50%) scaleY(0);
        -o-transform: translateX(3px) translateY(-50%) scaleY(0);
        transform: translateX(3px) translateY(-50%) scaleY(0);
        background-color: #ffffff;
      }

      svg {
        position: absolute;
        right: 20px;
        top: 16px;
        font-size: 18px;
      }

      &:hover {
        svg {
          color: white;
        }
      }
    }
    span {
      /* navigation item labels */
      display: block;
      opacity: 0;
      -webkit-transform: translateX(-25px);
      -moz-transform: translateX(-25px);
      -ms-transform: translateX(-25px);
      -o-transform: translateX(-25px);
      transform: translateX(-25px);
    }
  }
  &.nav-is-visible ul {
    visibility: visible;
    a {
      &::after {
        /* navigation item icons */
        -webkit-transform: translateY(-50%) scale(1);
        -moz-transform: translateY(-50%) scale(1);
        -ms-transform: translateY(-50%) scale(1);
        -o-transform: translateY(-50%) scale(1);
        transform: translateY(-50%) scale(1);
        -webkit-animation: scaleIn 0.15s backwards;
        -moz-animation: scaleIn 0.15s backwards;
        animation: scaleIn 0.15s backwards;
        -webkit-transition: opacity 0.2s;
        -moz-transition: opacity 0.2s;
        transition: opacity 0.2s;
      }
      &.nuxt-link-exact-active {
        color: #ffffff;
        &::after {
          opacity: 1;
        }
        &::before {
          -webkit-transform: translateX(3px) translateY(-50%) scaleY(1);
          -moz-transform: translateX(3px) translateY(-50%) scaleY(1);
          -ms-transform: translateX(3px) translateY(-50%) scaleY(1);
          -o-transform: translateX(3px) translateY(-50%) scaleY(1);
          transform: translateX(3px) translateY(-50%) scaleY(1);
          -webkit-transition: -webkit-transform 0.15s 0.3s;
          -moz-transition: -moz-transform 0.15s 0.3s;
          transition: transform 0.15s 0.3s;
        }
      }
    }
    > li {
      &:first-child {
        a {
          svg {
            top: 16px;
            right: 18px;
          }
        }
      }
      &:nth-child(2) {
        a {
          svg {
            top: 18px;
            right: 20px;
          }
        }
      }
      &:nth-child(3) {
        a {
          svg {
            top: 16px;
            right: 20px;
          }
        }
      }
      &:nth-child(4) {
        a {
          svg {
            top: 16px;
            right: 20px;
          }
        }
      }
    }
    span {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
      -webkit-animation: slideIn 0.15s backwards;
      -moz-animation: slideIn 0.15s backwards;
      animation: slideIn 0.15s backwards;
      -webkit-transition: -webkit-transform 0.2s;
      -moz-transition: -moz-transform 0.2s;
      transition: transform 0.2s;
    }
  }
}

.no-touch .cd-stretchy-nav.nav-is-visible ul a:hover {
  color: #ffffff;
  &::after {
    opacity: 1;
  }
  span {
    -webkit-transform: translateX(-5px);
    -moz-transform: translateX(-5px);
    -ms-transform: translateX(-5px);
    -o-transform: translateX(-5px);
    transform: translateX(-5px);
  }
}

.cd-stretchy-nav.nav-is-visible ul li {
  &:first-of-type {
    a::after, span {
      -webkit-animation-delay: 0.05s;
      -moz-animation-delay: 0.05s;
      animation-delay: 0.05s;
    }
  }
  &:nth-of-type(2) {
    a::after, span {
      -webkit-animation-delay: 0.1s;
      -moz-animation-delay: 0.1s;
      animation-delay: 0.1s;
    }
  }
  &:nth-of-type(3) {
    a::after, span {
      -webkit-animation-delay: 0.15s;
      -moz-animation-delay: 0.15s;
      animation-delay: 0.15s;
    }
  }
  &:nth-of-type(4) {
    a::after, span {
      -webkit-animation-delay: 0.2s;
      -moz-animation-delay: 0.2s;
      animation-delay: 0.2s;
    }
  }
  &:nth-of-type(5) {
    a::after, span {
      -webkit-animation-delay: 0.25s;
      -moz-animation-delay: 0.25s;
      animation-delay: 0.25s;
    }
  }
}
</style>
