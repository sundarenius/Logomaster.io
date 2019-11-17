<template>
  <div>
    <transition name="qfade" mode="out-in">
      <stepOne v-if="step === 1"/>
    </transition>
    <transition name="qfade" mode="out-in">
      <stepTwo v-if="step === 2"/>
    </transition>
    <transition name="qfade" mode="out-in">
      <stepThree v-if="step === 3"/>
    </transition>
    <transition name="qfade" mode="out-in">
      <stepFour v-if="step === 4"/>
    </transition>
    <transition name="qfade" mode="out-in">
      <stepFive v-if="step === 5"/>
    </transition>
    <transition name="qfade" mode="out-in">
      <stepSix v-if="step === 6"/>
    </transition>
    <transition name="qfade" mode="out-in">
      <stepSeven v-if="step === 7"/>
    </transition>
    <transition name="qfade" mode="out-in">
      <stepEight v-if="step === 8"/>
    </transition>
    <transition name="qfade" mode="out-in">
      <stepNine v-if="step === 9"/>
    </transition>
    <transition name="qfade" mode="out-in">
      <stepTen v-if="step === 10"/>
    </transition>
    <transition name="qfade" mode="out-in">
      <loadPage v-if="step === 11"/>
    </transition>
    <transition name="qfade" mode="out-in">
      <ResultPage v-if="step === 12"/>
    </transition>

    <section v-if="step === 0">

      <v-container>
        <v-layout pb-5 justify-center wrap row>
          <v-flex xs12 mb-4 :my-5="$vuetify.breakpoint.mdAndUp" :mt-3="$vuetify.breakpoint.smAndDown">
            <div style="font-weight:bold" :class="{'display-2' : $vuetify.breakpoint.mdAndUp, 'display-1' : $vuetify.breakpoint.smAndDown, 'text-xs-center' : true }">
              Your Personal Logo Generetor
            </div>
            <div :class="{'body-2 fontBold' : $vuetify.breakpoint.smAndDown, 'title' : $vuetify.breakpoint.mdAndUp, 'text-xs-center pt-3' : true}">
              Instant Modern &amp; Professional Custom-Made Logos. All logos for only $5!
            </div>
          </v-flex>

          <v-flex class="white lighten-1 v-card mainBackground mb-5" px-2 py-2 xs12 md7>
            <v-text-field
              class="title"
              dark
              box
              label="The name of your brand *"
              v-model="logoName"
            ></v-text-field>

            <v-text-field
              dark
              box
              label="Add a tagline (optional)"
              v-model="logoTagline"
            ></v-text-field>
            <transition name="qfade" mode="out-in">
              <div v-show="logoName.length > 0">
                <v-btn @click="openStep1" large round block class="success lighten-1 title">
                  Design
                  <v-icon large>arrow_right</v-icon>
                </v-btn>
              </div>
            </transition>
          </v-flex>
        </v-layout>
      </v-container>

      <section class="white lighten-1 py-5">
        <v-container>
          <v-layout justify-center row wrap pb-4>
            <v-flex py-3 text-xs-center xs5 md2>
              <div style="font-size:22px!important" class="ex2 purple--text scaleToSmall zindex20">
                <v-icon style="margin-bottom:7px;margin-right:-7px" class="purple--text scaleToSmall">play_arrow</v-icon>
                PTFLIX
              </div>
            </v-flex>
            <v-flex py-3 text-xs-center xs5 md2>
              <div style="font-size:13px!important;margin-top:-19px" class="ex1 red--text scaleToSmall zindex20">
                <v-icon class="red--text scaleToSmall">style</v-icon>
                <div>Flyers Shop</div>
              </div>
            </v-flex>
            <v-flex py-3 text-xs-center xs5 md2>
              <div style="font-size:22px!important;margin-top:-8px;margin-right:-30px" class="ex4 brown--text scaleToSmall zindex20">
                Coffeeshop
              </div>
            </v-flex>
            <v-flex py-3 text-xs-center xs5 md2>
              <div style="font-size:22px!important" class="ex9 red--text scaleToSmall zindex20">
                IloveIt
              </div>
            </v-flex>
            <v-flex py-3 text-xs-center xs5 md2>
              <div style="font-size:22px!important" class="ex10 cyan--text scaleToSmall zindex20">
                ZARA's
              </div>
            </v-flex>

            <v-flex py-3 text-xs-center xs5 md2>
              <div style="font-size:22px!important" class="ex11 orange--text scaleToSmall zindex20">
                Qauckery
              </div>
            </v-flex>
            <v-flex py-3 text-xs-center xs5 md2>
              <div style="font-size:22px!important" class="ex12 black--text scaleToSmall zindex20">
                Sirioso
              </div>
            </v-flex>
            <v-flex py-3 text-xs-center xs5 md2>
              <div style="font-size:22px!important" class="ex13 black--text scaleToSmall zindex20">
                exsitec
              </div>
            </v-flex>
            <v-flex py-3 text-xs-center xs5 md2>
              <div style="font-size:22px!important" class="ex14 orange--text scaleToSmall zindex20">
                Netisac
                <v-icon style="margin-bottom:4px;margin-left:-5px" class="orange--text scaleToSmall">label</v-icon>
              </div>
            </v-flex>
            <v-flex py-3 text-xs-center xs5 md2>
              <div style="font-size:22px!important" class="ex15 lime--text scaleToSmall zindex20">
                Sofiis
              </div>
            </v-flex>
            <v-flex py-3 text-xs-center xs5 md2>
              <div style="font-size:22px!important" class="ex9 cyan--text text--darken-2 scaleToSmall zindex20">
                Fashionista
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </section>



      <section v-if="1" id="start" class="primary darken-3 white--text py-5" style="position:relative">
         <div class="skewMe primary darken-3"></div>
        <v-container>
          <v-layout row wrap>
            <v-flex class="subheading" xs12>
              <div class="display-1 text-xs-center zindex20">
                How it works
              </div>
              <p class="pt-4 zindex20">
                <strong>Welcome to Logomaster.io!</strong> Here at Logomaster.io, you can easily, in just a few steps, 
                generate several unique and smart logos for your company or website.
              </p>
              <p class="zindex20">
               Just follow the steps and set your preferences and our algorithm will generate a number
               of different logos that will match your preferences.
              </p>
              <p class="zindex20">
                All the generated logos are up-to-date, elegant and follow the rules for logos.
              </p>
              <p class="zindex20">
               You can use or try the service completely for free. 
               If you are happy with one och more of the generated logos you can easily
               download them once your payment has been approved by Stripe.
              </p>
              <p class="zindex20">
                All of the downloaded logos have a transparent background so that you can use
                them wherever you like without it interfering with any of your themes.
              </p>
              <p class="zindex20">
                A logo should be smart and easy to remember, and it should also easily be associated with
                your company or website. The logo is an important part of the brand of your business, website or blog.
              </p>
              <p class="zindex20">
                A smart logo creates a great first impression of what your service or product is all about,
                and it can increase the entire customer experience as well as the value of your product.
              </p>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section id="howItStarted" class="mainBackground white--text py-5">
        <v-container>
          <v-layout row wrap>
            <v-flex pt-5 pb-3 class="subheading" xs12>
              <div class="display-1 text-xs-center zindex20 pt-5">
                How it all started
              </div>
              <p class="pt-4 zindex20">
                We have great experience from different kind of web services and have generated logos
                for most kind of websites.
              </p>
              <p class="zindex20">
                We noticed that these logos became increasingly popular, so we decided to start Logomaster.io
                in order to provide elegant and smart logos to anyone who needs a new logo
                at a very low and competitive price.
              </p>
              <p class="zindex20">
                When you work together with a web agency, you usually have to pay much more.
              </p>
              <p class="zindex20">
                We provide smart, up-to-date and elegant logos that everyone can afford.
              </p>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section id="aboutUs" class="white secondary--text py-5">
        <v-container>
          <v-layout row wrap>
            <v-flex class="subheading" xs12>
              <div class="display-1 text-xs-center">
                About us
              </div>
              <p class="pt-4">
                We all have great experience working in the IT consultant industry with a focus
                on front end solutions where we have been developing strong brands and logos for companies.
              </p>
              <p>
                If you want to get in touch with us, ask any questions, or would like to get a refund
                for your logo if you are for some reason not satisfied, please contact us at logomaster110@gmail.com.
                If you are, for whatever reason, not satisfied, we have a 100% money-back guarantee!
              </p>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </section>
  </div>
</template>

<script>
import stepOne from '@/components/logoCreator/step1.vue'
import stepTwo from '@/components/logoCreator/stepTwo.vue'
import stepThree from '@/components/logoCreator/stepThree.vue'
import stepFour from '@/components/logoCreator/stepFour.vue'
import stepFive from '@/components/logoCreator/stepFive.vue'
import stepSix from '@/components/logoCreator/stepSix.vue'
import stepSeven from '@/components/logoCreator/stepSeven.vue'
import stepEight from '@/components/logoCreator/stepEight.vue'
import stepNine from '@/components/logoCreator/stepNine.vue'
import stepTen from '@/components/logoCreator/stepTen.vue'
import ResultPage from '@/components/logoCreator/ResultPage.vue'
import loadPage from '@/components/logoCreator/loadPage.vue'

export default {
  components: {
    stepOne,
    stepTwo,
    stepThree,
    stepFour,
    stepFive,
    stepSix,
    stepSeven,
    stepEight,
    stepNine,
    stepTen,
    loadPage,
    ResultPage
  },
  data: () => ({
    // logoName: '',
    // logoTagline: ''
  }),
  computed: {
    logoName: {
      get () { return this.$store.state.logoInfo.logoName },
      set (value) { this.$store.commit('logoNameCommit', value) }
    },
    logoTagline: {
      get () { return this.$store.state.logoInfo.logoTagline },
      set (value) { this.$store.commit('logoTaglineCommit', value) }
    },
    step: {
      get () { return this.$store.state.step },
      set (value) { this.$store.commit('stepCommit', value) }
    }
  },
  methods: {
    openStep1 () {
      this.step = 1
    }
  }
}
</script>

<style>
.qfade-enter-active, .component-qfade-leave-active {
  transition: opacity 2.0s ease;
}
.qfade-enter, .component-qfade-leave-to {
  opacity: 0;
}
.greyBackground {
  background: grey;
}
.scaleToSmall {
  transform: none!important;
}
.skewMe {
  position: absolute;
  top: -7px;
  left: -80px;
  height: 600px;
  z-index: 10;
  width: 121vw;
  transform: skew(0deg, 7deg);
}
.zindex20 {
  position:relative;
  z-index:15;
}
@media only screen and (max-width: 600px) {
.scaleToSmall {
  transform: scale(0.8)!important;
}
}
</style>
