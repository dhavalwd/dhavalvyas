<template>
  <main class="main" id="main">
    <hero class="hero-projects is-fullheight">
      <div slot="background" class="hero-bg" :style="{ backgroundImage: `url(/images/projects-bg.jpg)` }"></div>
      <template slot="title">Portfolio</template>
    </hero>
    <div class="projects-all layout-fixed">
      <div class="Project-columns">
        <div class="Project-column">
          <card>
            <no-ssr slot="card-image">
              <slick ref="slick" :options="slickOptions">
                <div>
                  <img src="~/assets/images/projects/crombie-1.jpg" alt="Crombie REIT">
                </div>
                <div>
                  <img src="~/assets/images/projects/crombie-2.jpg" alt="Crombie REIT">
                </div>
              </slick>
            </no-ssr>
            <template slot="card-title">Crombie REIT</template>
            <template slot="card-subtitle">@T4G (2017)</template>
            <!-- <div slot="card-content" class="cardContent">
                <ul>
                  <li>Druapl Custom Theme</li>
                  <li>JavaScript</li>
                  <li>SASS</li>
                  <li>jQuery</li>
                </ul>
            </div> -->
            <template slot="card-link"><a href="http://crombie.ca/" target="_blank"></a></template>
          </card>
        </div>
        <div class="Project-column">
          <card>
            <no-ssr slot="card-image">
              <slick ref="slick" :options="slickOptions">
                <div>
                  <img src="~/assets/images/projects/jazz-1.jpg" alt="Jazz Aviation">
                </div>
                <div>
                  <img src="~/assets/images/projects/jazz-2.jpg" alt="Jazz Aviation">
                </div>
                <div>
                  <img src="~/assets/images/projects/jazz-3.jpg" alt="Jazz Aviation">
                </div>
                <div>
                  <img src="~/assets/images/projects/jazz-4.jpg" alt="Jazz Aviation">
                </div>
                <div>
                  <img src="~/assets/images/projects/jazz-5.jpg" alt="Jazz Aviation">
                </div>
                <div>
                  <img src="~/assets/images/projects/jazz-6.jpg" alt="Jazz Aviation">
                </div>
                <div>
                  <img src="~/assets/images/projects/jazz-7.jpg" alt="Jazz Aviation">
                </div>
              </slick>
            </no-ssr>
            <template slot="card-title">Jazz Aviation LP</template>
            <template slot="card-subtitle">@Famous Folks (2016)</template>
            <!-- <div slot="card-content" class="cardContent">
                <ul>
                  <li>Druapl Custom Theme</li>
                  <li>JavaScript</li>
                  <li>SASS</li>
                  <li>jQuery</li>
                </ul>
            </div> -->
            <template slot="card-link"><a href="http://flyjazz.ca/" target="_blank"></a></template>
          </card>
        </div>
        <div class="Project-column">
          <card>
            <no-ssr slot="card-image">
              <slick ref="slick" :options="slickOptions">
                <div>
                  <img src="~/assets/images/projects/gg-1.jpg" alt="Garden Gangsters">
                </div>
                <div>
                  <img src="~/assets/images/projects/gg-2.jpg" alt="Garden Gangsters">
                </div>
                <div>
                  <img src="~/assets/images/projects/gg-3.jpg" alt="Garden Gangsters">
                </div>
                <div>
                  <img src="~/assets/images/projects/gg-4.jpg" alt="Garden Gangsters">
                </div>
              </slick>
            </no-ssr>
            <template slot="card-title">Garden Gangsters</template>
            <template slot="card-subtitle">@Famous Folks (2017)</template>
            <!-- <div slot="card-content" class="cardContent">
                <ul>
                  <li>Druapl Custom Theme</li>
                  <li>JavaScript</li>
                  <li>SASS</li>
                  <li>jQuery</li>
                </ul>
            </div> -->
            <template slot="card-link"><a href="http://gardengangsters.com/" target="_blank"></a></template>
          </card>
        </div>
        <div class="Project-column">
          <card>
            <no-ssr slot="card-image">
              <slick ref="slick" :options="slickOptions">
                <div>
                  <img src="~/assets/images/projects/cf-1.jpg" alt="Cadilac Fairview">
                </div>
                <div>
                  <img src="~/assets/images/projects/cf-2.jpg" alt="Cadilac Fairview">
                </div>
                <div>
                  <img src="~/assets/images/projects/cf-3.jpg" alt="Cadilac Fairview">
                </div>
                <div>
                  <img src="~/assets/images/projects/cf-4.jpg" alt="Cadilac Fairview">
                </div>
              </slick>
            </no-ssr>
            <template slot="card-title">Cadilac Fairview</template>
            <template slot="card-subtitle">@Famous Folks (2017)</template>
            <!-- <div slot="card-content" class="cardContent">
                <ul>
                  <li>Druapl Custom Theme</li>
                  <li>JavaScript</li>
                  <li>SASS</li>
                  <li>jQuery</li>
                </ul>
            </div> -->
            <template slot="card-link"><a href="https://cfoffice.ca/" target="_blank"></a></template>
          </card>
        </div>
        <div class="Project-column">
          <card>
            <no-ssr slot="card-image">
              <slick ref="slick" :options="slickOptions">
                <div>
                  <img src="~/assets/images/projects/grandpre-1.jpg" alt="Grand Pre 2017">
                </div>
                <div>
                  <img src="~/assets/images/projects/grandpre-2.jpg" alt="Grand Pre 2017">
                </div>
                <div>
                  <img src="~/assets/images/projects/grandpre-3.jpg" alt="Grand Pre 2017">
                </div>
              </slick>
            </no-ssr>
            <template slot="card-title">Grand Pre 2017</template>
            <template slot="card-subtitle">@Famous Folks (2016)</template>
            <!-- <div slot="card-content" class="cardContent">
                <ul>
                  <li>Druapl Custom Theme</li>
                  <li>JavaScript</li>
                  <li>SASS</li>
                  <li>jQuery</li>
                </ul>
            </div> -->
            <template slot="card-link"><a href="http://grandpre2017.ca/" target="_blank"></a></template>
          </card>
        </div>
        <div class="Project-column">
          <card>
            <no-ssr slot="card-image">
              <slick ref="slick" :options="slickOptions">
                <div>
                  <img src="~/assets/images/projects/bem-1.jpg" alt="Blue Elephant Marketing & Design">
                </div>
                <div>
                  <img src="~/assets/images/projects/bem-2.jpg" alt="Blue Elephant Marketing & Design">
                </div>
                <div>
                  <img src="~/assets/images/projects/bem-3.jpg" alt="Blue Elephant Marketing & Design">
                </div>
                <div>
                  <img src="~/assets/images/projects/bem-4.jpg" alt="Blue Elephant Marketing & Design">
                </div>
              </slick>
            </no-ssr>
            <template slot="card-title">Blue Elephant Marketing & Design</template>
            <template slot="card-subtitle">@Famous Folks (2017)</template>
            <!-- <div slot="card-content" class="cardContent">
                <ul>
                  <li>Druapl Custom Theme</li>
                  <li>JavaScript</li>
                  <li>SASS</li>
                  <li>jQuery</li>
                </ul>
            </div> -->
            <template slot="card-link"><a href="http://bemarketing.ca/" target="_blank"></a></template>
          </card>
        </div>
        <div class="Project-column">
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
        <div class="Project-column">
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
        <div class="Project-column">
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
        <div class="Project-column">
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
            <template slot="card-link"><a href="https://www.caretech-uk.com/" target="_blank"></a></template>
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
          { hid: 'portfolio', name: 'dhaval vyas', content: 'This is portfolio page of Dhaval Vyas. Portfolio page shows all projects of Dhaval Vyas.' }
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

.Project-columns {
  display: flex;
  flex-flow: row; 
  flex-wrap: wrap;
}

.Project-column {
  width: 100%;
  padding: 20px 30px;

  @media (min-width: 640px) {
    width: 50%;
    padding: 0 24px 32px;
  }
}

</style>
