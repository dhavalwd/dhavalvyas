<template>
  <!-- Navigation Bar -->
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation-main" aria-controls="navigation-main" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- <nuxt-link class="navbar-brand" to="/">DV</nuxt-link> -->

        <div class="collapse navbar-collapse" id="navigation-main">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/">Home</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/about">About Us</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/projects">Projects</nuxt-link>
            </li>
            </ul>
            <!-- <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> -->
        </div>
    </nav>
  </div>
</template>

<style lang="less" scoped type="text/less">
  @import '../styles/base.less';
  
  .navbar-light .navbar-nav .nav-link.nuxt-link-exact-active {
    border-bottom: 2px solid #2F2B59;
  }
</style>
