<template>
    <!-- Blog Post Card -->
    <div class="Blog_Post_Card">
        <div class="Blog_Post_Card-image">
            <figure class="image is-4by3">
                <slot name="Blog_Post_Card-image"></slot>
            </figure>
        </div>
        <div class="Blog_Post_Card-info">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4"><slot name="Blog_Post_Card-title"></slot></p>
                </div>
            </div>

            <div class="Blog_Post_Card-content">
                <p><slot name="Blog_Post_Card-content"></slot></p>
            </div>
        </div>
        <div class="Blog_Post_Card-link">
            <slot name="Blog_Post_Card-link"></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped type="text/scss">
  @import '../styles/base.scss';

  .Blog_Post_Card {
      box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
      border: none;
      border-radius: 0.5rem 0.5rem 0 0;
      position: relative;
      transform: translateY(0px);
      transition: transform 0.3s ease-in-out;
      will-change: transform;

      &:hover {
          transform: translateY(-5px);
      }
  }

  .Blog_Post_Card-image {
      img {
          border-radius: 0.5rem 0.5rem 0 0;
      }
  }

  .Blog_Post_Card-info {      
      padding: 30px;
  }

  .Blog_Post_Card-content {
      padding-top: 10px;
      font-size: 14px;
  }

  .Blog_Post_Card-link a {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
  }
</style>
