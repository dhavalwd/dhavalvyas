<template>
    <!-- Footer Bar -->
    <div class="footer">
        <div class="container">
            <div class="content has-text-centered">
                <p>
                    <a target="_blank" href="https://dev.to/dhavalwd" title="DEV Profile">
                        <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Dhaval Vyas's DEV Profile" height="30" width="30" />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/dhavalvyas30/" class="Instagram">
                        <img src="~/assets/images/instagram-icon.png" alt="Dhaval Vyas's Instagram Profile" height="30" width="30" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/dhavalbvyas/" class="LinkedIn">
                        <img src="~/assets/images/linkedin-icon.png" alt="Dhaval Vyas's LinkedIn Profile" height="30" width="30" />
                    </a>
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped type="text/scss">
  @import '../styles/base.scss';

  .footer {
      padding: 3rem 1.5rem;
      background-color: rgba($accent_2, 0.05);

      a {
          padding: 0 8px;
      }
  }
</style>
