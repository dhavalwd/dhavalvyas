<template>
    <!-- Card -->
    <div class="card">
        <div class="card-image">
            <slot name="card-image"></slot>
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
      position: relative;
  }

  .card-image {
      img {
          border-radius: 0.25rem 0.25rem 0px 0px;
          max-width: 200px;
      }
  }

  img.slick-slide {
      max-width: 220px;
  }

  .card-link a{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
  }
.slick-next {
    border: none;
    background: rgba(0,0,0,0.4);
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 40px;
    text-indent: -9999px;
}
</style>
