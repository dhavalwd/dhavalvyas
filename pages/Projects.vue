<template>
  <main class="main" id="main">
    <hero class="hero-projects is-fullheight">
      <div slot="background" class="hero-bg" :style="{ backgroundImage: `url(/images/projects-bg.jpg)` }"></div>
      <template slot="title">Portfolio</template>
    </hero>
    <div class="projects-all layout-fixed">
      <div class="columns">
        <div class="column">
          <card>
            <no-ssr slot="card-image">
              <slick ref="slick" :options="slickOptions">
                <div>
                  <img src="~/assets/images/projects/can-1.jpg" alt="CANDAC">
                </div>
                <div>
                  <img src="~/assets/images/projects/can-2.jpg" alt="CANDAC">
                </div>
                <div>
                  <img src="~/assets/images/projects/can-3.jpg" alt="CANDAC">
                </div>
              </slick>
            </no-ssr>
            <template slot="card-title">CANDAC</template>
            <template slot="card-subtitle">@CANDAC (2014)</template>
            <!-- <div slot="card-content" class="cardContent">
                <ul>
                  <li>Druapl Custom Theme</li>
                  <li>JavaScript</li>
                  <li>SASS</li>
                  <li>jQuery</li>
                </ul>
            </div> -->
            <template slot="card-link"><a href="http://candac.ca/" target="_blank"></a></template>
          </card>
        </div>
        <div class="column">
          <card>
            <no-ssr slot="card-image">
              <slick ref="slick" :options="slickOptions">
                <div>
                  <img src="~/assets/images/projects/kier-1.jpg" alt="Kier Group Plc">
                </div>
                <div>
                  <img src="~/assets/images/projects/kier-2.jpg" alt="Kier Group Plc">
                </div>
                <div>
                  <img src="~/assets/images/projects/kier-3.jpg" alt="Kier Group Plc">
                </div>
              </slick>
            </no-ssr>
            <template slot="card-title">Kier Group PLC</template>
            <template slot="card-subtitle">@Investis (2011)</template>
            <!-- <div slot="card-content" class="cardContent">
                <ul>
                  <li>Sitecore CMS</li>
                  <li>JavaScript</li>
                  <li>SASS</li>
                  <li>jQuery</li>
                </ul>
            </div> -->
            <template slot="card-link"><a href="http://www.kier.co.uk/" target="_blank"></a></template>
          </card>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <card>
            <no-ssr slot="card-image">
              <slick ref="slick" :options="slickOptions">
                <div>
                  <img src="~/assets/images/projects/am-1.jpg" alt="Kier Group Plc">
                </div>
                <div>
                  <img src="~/assets/images/projects/am-2.jpg" alt="Kier Group Plc">
                </div>
                <div>
                  <img src="~/assets/images/projects/am-3.jpg" alt="Kier Group Plc">
                </div>
              </slick>
            </no-ssr>
            <template slot="card-title">ArcelorMittal Corporate</template>
            <template slot="card-subtitle">@Investis (2010)</template>
            <!-- <div slot="card-content" class="cardContent">
                <ul>
                  <li>Sitecore CMS</li>
                  <li>JavaScript</li>
                  <li>SASS</li>
                  <li>jQuery</li>
                </ul>
            </div> -->
            <template slot="card-link"><a href="http://corporate.arcelormittal.com/" target="_blank"></a></template>
          </card>
        </div>
        <div class="column">
          <card>
            <no-ssr slot="card-image">
              <slick ref="slick" :options="slickOptions">
                <div>
                  <img src="~/assets/images/projects/ct-1.jpg" alt="CareTech Community Service">
                </div>
                <div>
                  <img src="~/assets/images/projects/ct-2.jpg" alt="CareTech Community Service">
                </div>
                <div>
                  <img src="~/assets/images/projects/ct-3.jpg" alt="CareTech Community Service">
                </div>
              </slick>
            </no-ssr>
            <template slot="card-title">Caretech</template>
            <template slot="card-subtitle">@Investis (2011)</template>
            <!-- <div slot="card-content" class="cardContent">
                <ul>
                  <li>Sitecore CMS</li>
                  <li>JavaScript</li>
                  <li>SASS</li>
                  <li>jQuery</li>
                </ul>
            </div> -->
            <template slot="card-link"><a href="http://candac.ca/" target="_blank"></a></template>
          </card>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import Author from '~/components/author'
  import Hero from '~/components/hero'
  import Card from '~/components/dv-card'

  export default {
    components: {
      Author,
      Hero,
      Card
    },
    head () {
      return {
        title: 'Portfolio | Dhaval Vyas',
        meta: [
          { hid: 'portfolio', name: 'dhaval vyas', content: 'Dhaval Vyas is a Front End developer. He creates for the web.' }
        ]
      }
    },
    data () {
      return {
        slickOptions: {
          slidesToShow: 1,
          rows: 0,
          infinite: false,
          prevArrow: '<a href="#" class="slick-prev"></a>',
          nextArrow: '<a href="#" class="slick-next"></a>'
        }
      }
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
@import 'slick-carousel/slick/slick.css';
@import '../styles/base.scss';

.projects-all {
  max-width: 960px;
  margin: 40px auto 0px;
  padding: 3em 0 6em;
}
.cardContent a + a {
  padding-left: 5px;
}

.column {
  width: 100%;
  @media (min-width:640px) {
    width: 50%;
  }
}

</style>
