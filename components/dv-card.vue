<template>
    <!-- Card -->
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <slot name="card-image"></slot>
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4"><slot name="card-title"></slot></p>
                    <p class="subtitle is-6"><slot name="card-subtitle"></slot></p>
                </div>
            </div>

            <div class="content">
                <slot name="card-content"></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped type="text/scss">
  @import '../styles/base.scss';

  .card {
      box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
      border: none;
  }

  .card-image {
      img {
          border-radius: 0.25rem 0.25rem 0px 0px;
      }
  }
</style>
