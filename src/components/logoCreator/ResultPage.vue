<template class="white">
<div>
  <v-btn id="resultBTN" style="display:none" @click="processOrder"></v-btn>
    <v-navigation-drawer
      :permanent="$vuetify.breakpoint.mdAndUp"
      app
      class="mainBackground"
      style="background:rgb(40, 40, 40) !important;z-index:100"
      v-model="openDrawer">
    <v-layout style="position:relative" text-xs-center pt-4 row wrap>
      <v-btn style="position:sticky;top:10px;z-index:20" v-if="1" @click="test">TEST FR. resultpage</v-btn>
      <v-flex mb-4 xs12>
       <div class="ex15 white--text" style="font-size:36px">
          Logomaster
        </div>
      </v-flex>
    <v-flex xs12 v-bind:key="i" v-for="(x, i) in theColor" >
      <v-flex v-if="theColor.length > 0 && (x !== undefined && x !== null && x.length > 0)" mb-1 @click="choosedLogo = i" :class="{'title py-5 v-card pointer hoverCardResult' : true, 'choosedCardResult' : choosedLogo === i }" xs12>
        <!-- *******************  TEXT BASED LOGOS START  *******************  -->
        <span :id="'resultat' + i" v-if="$store.state.logoInfo.typeOfLogo === 2 && (x !== undefined && x !== null && x.length > 0)">
          <div :class="{'ex theResultFont' : true, [x] : true }">
            {{ $store.state.logoInfo.logoName }}
          </div>
          <div v-if="$store.state.logoInfo.logoTagline.length > 0 && (x !== undefined && x !== null && x.length > 0)" :class="{[x] : true, 'mt-1 scaleLogoTagline' : true }" style="font-size:0.7em!important">
            {{ $store.state.logoInfo.logoTagline }}
          </div>
        </span>
        <!-- *******************  TEXT BASED LOGOS START  *******************  -->
        <!-- *******************  ICON BASED LOGOS START  *******************  -->
        <div v-if="theColor.length > 0 && (x !== undefined && x !== null && x.length > 0)">

        <span :id="'resultat' + i" v-if="$store.state.logoInfo.typeOfLogo === 1 && (x.includes('x1 ') || x.includes('x5') || x.includes('x9') || x.includes('x13'))">
          <div :class="{'ex resultFontIcons' : true, [x] : true }">
            <v-icon style="margin-bottom:8px" large :class="{[getColor(x)] : true, 'mr-1' : true}">{{ icons[i] }}</v-icon>
            <span>{{ $store.state.logoInfo.logoName }}</span>
          </div>
          <div v-if="$store.state.logoInfo.logoTagline.length > 0" :class="{[x] : true }" style="font-size:0.7em!important">
            {{ $store.state.logoInfo.logoTagline }}
          </div>
        </span>

        <span :id="'resultat' + i" v-if="$store.state.logoInfo.typeOfLogo === 1 && (x.includes('x6') || x.includes('x10') || x.includes('x14') || x.includes('x16') || x.includes('x7') || x.includes('x11') || x.includes('x15') ||  x.includes('x12'))">
          <div :class="{'ex resultFontIcons' : true, [x] : true }">
            <v-layout wrap justify-center>
              <v-flex xs12>
                <div>
                  <v-icon large :class="{[getColor(x)] : true}">{{ icons[i] }}</v-icon>
                </div>
                <div style="margin-top:3px;margin-bottom:-6px">{{ $store.state.logoInfo.logoName }}</div>
              </v-flex>
            </v-layout>
          </div>
          <div v-if="$store.state.logoInfo.logoTagline.length > 0" :class="{[x] : true }" style="font-size:0.7em!important">
            {{ $store.state.logoInfo.logoTagline }}
          </div>
        </span>

        <span :id="'resultat' + i" v-if="$store.state.logoInfo.typeOfLogo === 1 && (x.includes('x4') || x.includes('x3') || x.includes('x2') || x.includes('x8'))">
          <div :class="{'ex resultFontIcons' : true, [x] : true }">
            <span>{{ $store.state.logoInfo.logoName }}</span>
            <v-icon style="margin-bottom:8px" large :class="{[getColor(x)] : true, 'ml-1' : true}">{{ icons[i] }}</v-icon>
          </div>
          <div v-if="$store.state.logoInfo.logoTagline.length > 0" :class="{[x] : true }" style="font-size:0.7em!important">
            {{ $store.state.logoInfo.logoTagline }}
          </div>
        </span>

        </div>
        <!-- *******************  ICON BASED LOGOS END  *******************  -->
        <!-- *******************  INITIAL BASED LOGOS START  *******************  -->
        <div v-if="theColor.length > 0 && (x !== undefined && x !== null && x.length > 0)">
          <span :id="'resultat' + i" v-if="$store.state.logoInfo.typeOfLogo === 3 && (x.includes('x2') || x.includes('x1 ') || x.includes('x5') || x.includes('x9') || x.includes('x13') || x.includes('x4') || x.includes('x8') || x.includes('x12') || x.includes('x16'))">
            <div :class="{'ex theResultFont' : true, [x] : true }">
            <span class="bigLetter">{{ $store.state.logoInfo.logoName[0] }}</span><span>{{ $store.state.logoInfo.logoName.substr(1) }}</span>
            </div>
            <div v-if="$store.state.logoInfo.logoTagline.length > 0" :class="{[x] : true }" style="margin-top:-16px;font-size:0.7em!important">
              {{ $store.state.logoInfo.logoTagline }}
            </div>
          </span>

          <span :id="'resultat' + i" v-if="$store.state.logoInfo.typeOfLogo === 3 && (x.includes('x6') || x.includes('x10') || x.includes('x14') || x.includes('x3') || x.includes('x7') || x.includes('x11') || x.includes('x15'))">
            <div :class="{'ex theResultFont' : true, [x] : true }">
              <v-layout wrap justify-center>
                <v-flex xs12>
                  <div class="bigLetter">{{ $store.state.logoInfo.logoName[0] }}</div>
                  <div v-if="!x.includes('x6')" style="margin-top:8px;margin-bottom:-8px">{{ $store.state.logoInfo.logoName }}</div>
                  <div v-if="x.includes('x6')" style="margin-top:-10px;margin-bottom:-20px">{{ $store.state.logoInfo.logoName }}</div>
                </v-flex>
              </v-layout>
            </div>
            <div v-if="$store.state.logoInfo.logoTagline.length > 0" :class="{[x] : true }" style="font-size:0.7em!important">
              {{ $store.state.logoInfo.logoTagline }}
            </div>
        </span>

        </div>
        <!-- *******************  INITIAL BASED LOGOS SLUT  *******************  -->
      </v-flex>
    </v-flex>
      <v-flex xs12>
        <v-btn @click="showMoreLogos" class="white--text" round block flat large>
          Show more
          <v-icon>arrow_drop_down</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-navigation-drawer>

    <transition name="qfade" mode="out-in">
      <section :key="resultPageKey">
        <div v-if="$vuetify.breakpoint.smAndDown" style="position:absolute;top:110px;left:-10px">
        <v-btn @click="openDrawer = true" fab class="transparent" style="position:relative;z-index:30" flat>
          <v-icon style="font-size:50px!important" :class="{[exploreBtnClass(theColor[choosedLogo])] : true}">explore</v-icon>
        </v-btn>
      </div>
        <v-layout justify-center row wrap pb-3>

          <!--  ******************* FÄRGPOLETTER  ******************* -->
          <v-flex style="position:relative;z-index:50" xs12 md8>
            <v-layout class="grey lighten-3" px-1 py-1 row wrap>
              <v-flex @click="changeColor(x)" style="cursor:pointer" v-bind:key="x" v-for="x in $store.state.colors" xs1>
                <div :class="{'colorPalette text-xs-center' : true, [x] : true}"></div>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>

        <!--  *******************  RESULTATEN *******************  -->
        <v-layout :class="{'whiteBack' : true, [whiteStripesBackground(theColor[choosedLogo])] : true}" mt-4 row wrap>
            <v-flex style="margin-top:-25px" text-xs-center py-5 px-2 xs12>
                <div id="screenShotThis" class="title showTheResult py-5"></div>

              <div :class="{'mt-4' : $store.state.logoInfo.logoTagline.length === 0, 'marTop15' : $store.state.logoInfo.logoTagline.length > 0 }" style="margin-bottom:-20px">
              <v-btn :block="$vuetify.breakpoint.smAndDown" @click="downloadClick" class="success lighten-1 px-5" round flat style="font-weight:bold">
                Download logo
                <v-icon class="ml-2">lock</v-icon>
              </v-btn>
              <v-btn :block="$vuetify.breakpoint.smAndDown" @click="saveLogo" :class="{'secondary lighten-1 px-5' : true, 'my-2' : $vuetify.breakpoint.smAndDown}" round flat style="font-weight:bold">
                Save logo
                <v-icon class="ml-2">save_alt</v-icon>
              </v-btn>
              <v-btn :block="$vuetify.breakpoint.smAndDown" @click="restart" class="secondary lighten-1 px-5" round flat style="font-weight:bold">
                Restart
                <v-icon class="ml-2">refresh</v-icon>
              </v-btn>
              </div>

            </v-flex>

            <v-flex align-center fill-height py-3 xs12 md6>
              <v-img
                style="position:relativemargin-top:-90px"
                src="https://logomaster.io/images/laptop.png"
                width="100%"
                class="align-center">
                <div style="margin-bottom:90px" v-if="$vuetify.breakpoint.mdAndUp" class="align-center text-align text-xs-center title py-5 showTheResult showResultSecondary"></div>
                <div v-if="$vuetify.breakpoint.smAndDown" style="margin-top:-60px;font-size:12px!important" class="text-xs-center title py-5 showTheResult showResultSecondary"></div>
              </v-img>
            </v-flex>

            <v-flex align-center fill-height :py-3="$vuetify.breakpoint.mdAndUp" xs12 md6>
              <v-img
                style="position:relative"
                src="https://logomaster.io/images/shirt.png"
                width="80%"
                class="align-center ml-5">
                <div style="margin-bottom:220px" v-if="$vuetify.breakpoint.mdAndUp" class="align-center text-align text-xs-center title py-5 showTheResult showResultSecondary"></div>
                <div v-if="$vuetify.breakpoint.smAndDown" style="margin-top:-160px" class="text-xs-center title py-5 showTheResult showResultSecondary"></div>
              </v-img>
            </v-flex>

        </v-layout>
      </section>
    </transition>

    <div>
      <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" max-width="700" v-model="paymentDialog">
        <v-card>
          <v-card-title style="font-weight:bold" class="secondary darken-1 title white--text justify-center">
            YOUR ORDER
            <v-icon class="ml-2">credit_card</v-icon>
            <v-icon @click="paymentDialog = false" large style="position:absolute;right:10px">close</v-icon>
          </v-card-title>
          <v-card-text>
            <v-layout row wrap>
              <v-flex v-if="0" xs12>
                <div v-if="0" class="body-2 white lighten-2 py-2 px-2">
                  <v-icon small>info</v-icon>
                  <span>
                    You will own all your rights to your logo as soon as your payment has been approved by Stripe,
                    the price includes your chosen logo, as well as a black and a white version of it,
                    all with a transparent background.
                  </span>
                   <div class="body-2 pt-2">
                    Please enter your correct email address, and we will send your receipt and <strong>logos by mail.</strong>
                  </div>
                  <div class="body-2 pt-2">
                    Once your payment has been approved by Stripe,
                    your download links will appear on this page within a few seconds.
                  </div>
                </div>
              </v-flex>

              <v-flex class="grey lighten-4 secondary--text v-card" xs12 pt-3>
                <p class="title text-xs-center" style="position:relative;z-index:5">
                  This includes in your order
                  <v-icon class="secondary--text ml-1">thumb_up</v-icon>
                </p>
              </v-flex>
              <v-flex :pb-3="$vuetify.breakpoint.mdAndUp" pt-3 style="margin-top:-20px" class="grey lighten-4 px-3 secondary--text body-1" xs12 md4>
                <p>
                  <v-icon class="success--text mr-2" style="font-weight:bold">check</v-icon>
                   All the rights to your logo
                </p>
                <p>
                  <v-icon class="success--text mr-2" style="font-weight:bold">check</v-icon>
                  Transparent background
                </p>
                <p>
                  <v-icon class="success--text mr-2" style="font-weight:bold">check</v-icon>
                  High resolution images
                </p>
              </v-flex>
              <v-flex py-3 style="margin-top:-20px" class="grey lighten-4 px-3 secondary--text body-1" xs12 md8>
                <p>
                  <v-icon class="success--text mr-2" style="font-weight:bold">check</v-icon>
                   Your chosen logo, plus a black and a white version
                </p>
                <p>
                  <v-icon class="success--text mr-2" style="font-weight:bold">check</v-icon>
                  Instant file access and logos sent by mail
                </p>
                <p style="font-weight:bold">
                  <v-icon class="success--text mr-2" style="font-weight:bold">check</v-icon>
                  100% Money-back Guarantee
                </p>
              </v-flex>

              <v-flex py-2 xs12 text-xs-center class="title">

                <v-layout row wrap>
                    <v-flex :class="{'whiteBack' : true, [whiteStripesBackground(theColor[choosedLogo])] : true}" text-xs-center py-3 xs12>
                      <div id="paymentResult" class="title py-2 showTheResult"></div>
                    </v-flex>
                </v-layout>

              </v-flex>
              <v-flex xs12>
                <v-text-field
                  light
                  solo
                  label="Your email adress *"
                  append-icon="mail"
                  v-model="order.email"
                ></v-text-field>
              </v-flex>
              <v-flex style="margin-top:-20px" pb-3 text-xs-center xs12>
                <v-btn :loading="processingOrder" @click="stripePayment" style="font-weight:bold" class="px-5 success title">
                  Pay {{ order.price }}
                  <v-icon class="ml-2">credit_card</v-icon>
                </v-btn>
                <div class="body-2 px-1 py-1 grey darken-1 mt-2 v-card">
                  <img class="mr-1" style="margin-bottom:-5px" width="20px" src="@/assets/stripe-icon.png" alt="Safe payment">
                  Safe &amp; Secure Online Payments With
                  <a class="body-2 white--text" href="https://stripe.com/" target="_blank">Stripe</a>
                </div>
                <div class="px-1 py-1 orange darken-4 white--text mt-2 body-2 v-card">
                  <v-icon class="mr-1">info</v-icon>
                  <span style="margin-top:-10px!important">
                    Your links will appear within a few seconds after your payment has been accepted by Stripe.
                  </span>
                </div>
              </v-flex>
            </v-layout>
            <v-layout style="border-top:1px solid #6b6a6aborder-bottom:1px solid #6b6a6afont-weight:bold" class="title py-3" row wrap>
              <v-flex text-xs-left xs6>
                Total amount
              </v-flex>
              <v-flex text-xs-right xs6>
                {{ order.price }}
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="paymentDialog = false" block flat class="secondary lighten-1">
              Close
              <v-icon class="ml-2">close</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <div>

      <!--  PROCESSING ORDER DIALOG   -->
      <v-dialog max-width="400" v-model="processingOrder">
        <v-card>
          <v-card-title class="secondary justify-center title">
            Processing your order...
          </v-card-title>
          <v-card-text v-if="0">
            <div class="body-1">
              Wait while we are processing your order.
              This might take up to 30 seconds.
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn :loading="processingOrder" flat block></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!--  Payments was succesful   -->
      <v-dialog max-width="400" v-model="paymentDoneDialog">
        <v-card>
          <v-card-title class="secondary justify-center title">
            Payment succesful
            <v-icon class="ml-2">check_circle</v-icon>
          </v-card-title>
          <v-card-text>
            <div class="body-1">
              <p>
                Your payment information has sucessfully been processed.
              Your logos should get downloaded automatically.
              If not..
              <span @click="downloadAllLogos" class="primary--text text--lighten-2 body-2 pointer">
                click here!
              </span>.
              </p>
              <p>
                You will also recieve an confirmation email from us soon with your receipt and with your logos again.
              </p>
              <p>
                Thank you and enjoy your new logo!
              </p>
            </div>
            <div v-if="Object.keys(order.logosLink).length > 0" class="body-2" style="font-weight:bold">
              Your logos: 
              <span class="caption">
                Open the links in a new tab and rightclick on the logo and
                save them to your device.
              </span>
              <div class="py-1 px-1 grey my-1">
                <a :href="order.logosLink.x0" target="_blank" class="yellow--text title" style="font-weight:bold">
                  Download logo 1
                </a>
              </div>
              <div class="py-1 px-1 grey my-1">
                <a :href="order.logosLink.x1" target="_blank" class="yellow--text title" style="font-weight:bold">
                  Download logo 2
                </a>
              </div>
              <div class="py-1 px-1 grey my-1">
                <a :href="order.logosLink.x2" target="_blank" class="yellow--text title" style="font-weight:bold">
                  Download logo 3
                </a>
              </div>
            </div>
            <div v-if="order.email.length === 0 || order.email === 'logomaster110@gmail.com'" style="font-weight:bold" class="subheading secondary mt-2 lighten-2 px-1 py-1">
              <p>
                <v-icon>info</v-icon>
                We haven't received your email yet.. please fill in the field and click send to recieve a receipt
                and your logos by mail!
              </p>
              <v-text-field
                label="Your email"
                v-model="order.emailSecondTime"
                color="white"
              ></v-text-field>
              <div class="text-xs-center">
                <v-btn @click="uploadOrderToFirebase" :disabled="!payBtn" style="margin-top:-10px" flat round class="success lighten-1">
                Send
                <v-icon small class="ml-2">send</v-icon>
              </v-btn>
              </div>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="paymentDoneDialog = false" class="success" flat block>Thanks!</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog max-width="400" v-model="savedLogoInfo">
        <v-card>
          <v-card-title class="primary lighten-1 justify-center">
            <div class="title">
              Your logo is saved
              <v-icon class="ml-1">check_circle</v-icon>
            </div>
          </v-card-title>
          <v-card-text>
            <p>
              You can find all your saved logos in the top right corner at
            "<v-icon>save_alt</v-icon>".
            </p>
            <p>
              Your logos will disappear if you reload your browser.
              Use the <strong>'restart'</strong> button if you want
              to restart and create new logos.
            </p>
            <p>
              You can save as many logos as you like.
            </p>
          </v-card-text>
          <v-card-actions style="margin-top:-20px">
            <v-btn style="font-weight:bold" @click="savedLogoInfo = false" class="primary lighten-2" flat block round>
              Thanks!
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

  <div style="display:none" id="panel">
    <div>
        <div>
            <input type="text" name="caption-input" id="caption-input" value="">
            <a href="javascript:getScreen()"></a>
            <a href="" id="blank"></a>
        </div>
    </div>
  </div>

    <!-- <div style="display:none;position:relative;z-index:-10;text-align:center;padding:50px" id="logoOne"></div>
    <div style="display:none;position:relative;z-index:-10;text-align:center;padding:50px" id="logoTwo"></div>
    <div style="display:none;position:relative;z-index:-10;text-align:center;padding:50px" id="logoThree"></div> -->

    </div>
  </div>
</template>

<script>
import domtoimage from 'dom-to-image'
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'

export default {
  data: () => ({
    savedLogoInfo: false,
    paymentDoneDialog: false,
    processingOrder: false,
    paymentDialog: false,
    openDrawer: true,
    resultPageKey: 0,
    choosedLogo: 0,
    theColor: [],
    icons: [],
    order: {
      email: '',
      price: '$5.00',
      logosLink: {},
      emailSecondTime: ''
    },
    uploadOnce: 0,
    controlBaseLinkOnce: 0
  }),
  watch: {
    updateChoosenLogo: function () {
      this.renderResult()
    },
    watchResultat: function () {
      let choosenResult = this.getResultatElement(1)
      let showResult = document.querySelector('#screenShotThis')
      let paymentResult = document.querySelector('#paymentResult')
      let showResultSecondary = document.querySelectorAll('.showResultSecondary')
      showResult.innerHTML = choosenResult.innerHTML
      showResult.className += ' resultFont'
      paymentResult.innerHTML = choosenResult.innerHTML
      showResultSecondary.forEach(val => {
        val.innerHTML = choosenResult.innerHTML
      })
      let logoOne = document.querySelector('#logoOne')
      let logoTwo = document.querySelector('#logoTwo')
      let logoThree = document.querySelector('#logoThree')
      logoOne.innerHTML = showResult.innerHTML
      logoTwo.innerHTML = showResult.innerHTML.replace(/--text/g, 'xx black--text')
      logoThree.innerHTML = showResult.innerHTML.replace(/--text/g, 'xx white--text')
      logoOne.innerHTML = logoOne.innerHTML.replace('font-size: 0.7em !important;', 'font-size:1.1em!important;margin-top:-5px!important')
      logoTwo.innerHTML = logoTwo.innerHTML.replace('font-size: 0.7em !important;', 'font-size:1.1em!important;margin-top:-5px!important')
      logoThree.innerHTML = logoThree.innerHTML.replace('font-size: 0.7em !important;', 'font-size:1.1em!important;margin-top:-5px!important')
    },
    watchLogoBaseCustom: function () {
      if (this.controlBaseLinkOnce === 0 && this.$store.state.logos.custom.length > 50 && this.$store.state.logos.black.length > 50 && this.$store.state.logos.white.length > 50) {
        this.controlBaseLinkOnce++
        this.uploadLogosToFirebase()
      }
    },
    watchLogoBaseBlack: function () {
      if (this.controlBaseLinkOnce === 0 && this.$store.state.logos.custom.length > 50 && this.$store.state.logos.black.length > 50 && this.$store.state.logos.white.length > 50) {
        this.controlBaseLinkOnce++
        this.uploadLogosToFirebase()
      }
    },
    watchLogoBaseWhite: function () {
      if (this.controlBaseLinkOnce === 0 && this.$store.state.logos.custom.length > 50 && this.$store.state.logos.black.length > 50 && this.$store.state.logos.white.length > 50) {
        this.controlBaseLinkOnce++
        this.uploadLogosToFirebase()
      }
    },
    watchLogoStorageCustom: function () {
      if (this.uploadOnce === 0 && this.$store.state.logosLink.custom !== '' && this.$store.state.logosLink.black !== '' && this.$store.state.logosLink.white !== '') {
        this.uploadOnce++
        Promise.all([this.$store.state.logosLink.custom, this.$store.state.logosLink.black, this.$store.state.logosLink.white])
          .then(res => {
            res.forEach((val, i) => {
              var keyName = 'x' + i
              this.order.logosLink[keyName] = val
            })
            this.uploadOrderToFirebase()
          })
      }
    },
    watchLogoStorageBlack: function () {
      if (this.uploadOnce === 0 && this.$store.state.logosLink.custom !== '' && this.$store.state.logosLink.black !== '' && this.$store.state.logosLink.white !== '') {
        this.uploadOnce++
        Promise.all([this.$store.state.logosLink.custom, this.$store.state.logosLink.black, this.$store.state.logosLink.white])
          .then(res => {
            res.forEach((val, i) => {
              var keyName = 'x' + i
              this.order.logosLink[keyName] = val
            })
            this.uploadOrderToFirebase()
          })
      }
    },
    watchLogoStorageWhite: function () {
      if (this.uploadOnce === 0 && this.$store.state.logosLink.custom !== '' && this.$store.state.logosLink.black !== '' && this.$store.state.logosLink.white !== '') {
        this.uploadOnce++
        Promise.all([this.$store.state.logosLink.custom, this.$store.state.logosLink.black, this.$store.state.logosLink.white])
          .then(res => {
            res.forEach((val, i) => {
              var keyName = 'x' + i
              this.order.logosLink[keyName] = val
            })
            this.uploadOrderToFirebase()
          })
      }
    }
  },
  computed: {
    updateChoosenLogo () {
      return this.$store.state.updateChoosenLogo
    },
    savedLogos () {
      return this.$store.state.savedLogos.length
    },
    watchLogoStorageCustom () {
      return this.$store.state.logosLink.custom
    },
    watchLogoStorageBlack () {
      return this.$store.state.logosLink.black
    },
    watchLogoStorageWhite () {
      return this.$store.state.logosLink.white
    },
    watchLogoBaseCustom () {
      return this.$store.state.logos.custom
    },
    watchLogoBaseBlack () {
      return this.$store.state.logos.black
    },
    watchLogoBaseWhite () {
      return this.$store.state.logos.white
    },
    payBtn () {
      return this.order.emailSecondTime.length > 3 && this.order.emailSecondTime.includes('@')
    },
    paymentNameControl () {
      if (this.order.name.includes(' ')) {
        if (this.order.name.split(' ').length > 1) {
          return this.order.name.split(' ')[1].length > 0
        } else {
          return false
        }
      } else {
        return false
      }
    },
    watchResultat () {
      return document.querySelector('#resultat' + this.choosedLogo)
    },
    styles: {
      get () { return this.$store.state.logoInfo.styles },
      set (value) { this.$store.commit('stylesCommit', value) }
    }
  },
  methods: {
    test () {
      domtoimage.toJpeg(document.querySelector('#logoOne'), { quality: 0.95 })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'my-image-name.jpeg';
            link.href = dataUrl;
            link.click();
        })
    },
    restart () {
      this.$store.state.logoInfo.typeOfLogo = 0
      this.$store.state.latestStyles = JSON.parse(JSON.stringify(this.$store.state.logoInfo.styles))
      this.$store.state.logoInfo.styles = []
      this.$store.state.choosedLogo = ''
      this.$store.state.step = 0
    },
    saveLogo () {
      this.$store.state.savedLogos.push(document.querySelector('#screenShotThis').innerHTML)
      if (this.$store.state.savedLogos.length === 1) {
        this.savedLogoInfo = true
      }
    },
    downloadClick () {
      this.paymentDialog = true
      let downloadClick = {
        html: document.querySelector('#screenShotThis').innerHTML,
        typeOfLogo: this.$store.state.logoInfo.typeOfLogo,
        brand: this.$store.state.logoInfo.logoName,
        industry: this.$store.state.logoInfo.choosedIndustry,
        time: new Date().toISOString().substr(0, 19).replace('T', ' '),
        device: this.$vuetify.breakpoint.name
      }
      firebase.database().ref('downloadClick').push(downloadClick)
    },
    stripePayment (e) {
      // document.querySelector('#userEmail').innerText = this.order.email
      document.querySelector('#payBtn').click()
      let downloadClick = {
        html: document.querySelector('#screenShotThis').innerHTML,
        typeOfLogo: this.$store.state.logoInfo.typeOfLogo,
        brand: this.$store.state.logoInfo.logoName,
        industry: this.$store.state.logoInfo.choosedIndustry,
        mail: this.order.email,
        time: new Date().toISOString().substr(0, 19).replace('T', ' '),
        device: this.$vuetify.breakpoint.name
      }
      fetch('http://ip-api.com/json/')
      .then(res => {
        return res.json()
      })
      .then(data => {
        downloadClick.country = data.country
        downloadClick.city = data.city
        downloadClick.region = data.regionName
        firebase.database().ref('payBtnClicked').push(downloadClick)
      })
    },
    uploadOrderToFirebase () {
      this.order.time = new Date().toISOString().substr(0, 19).replace('T', ' ')
      this.order.device = this.$vuetify.breakpoint.name
      if (this.order.email.length === 0) {
        this.order.email = 'logomaster110@gmail.com'
      }
      if (this.order.emailSecondTime.length > 0) {
        this.order.email = this.order.emailSecondTime
      }
      firebase.database().ref('orders').push(this.order)
        .then(res => {
          this.processingOrder = false
          this.paymentDoneDialog = true
          this.paymentDialog = false
          this.uploadOnce = 0
          this.controlBaseLinkOnce = 0
          if (this.order.email === 'logomaster110@gmail.com') {
            this.order.email = ''
          }
        })
    },
    getResultatElement (x) {
      // debugger
      let nr = 0
      let choosenResult
      if (!document.querySelector('#resultat' + nr) && x !== 1) {
        for (let i = 0; i < 20; i++) {
          if (document.querySelector('#resultat' + i)) {
            nr = i
            break
          }
        }
        this.choosedLogo = nr
        choosenResult = document.querySelector('#resultat' + nr)
      } else {
        choosenResult = document.querySelector('#resultat' + this.choosedLogo)
      }
      return choosenResult
    },
    renderResult (x) {
      const global = this
      setTimeout(function () {
        let choosenResult
        let showResult = document.querySelector('#screenShotThis')
        let paymentResult = document.querySelector('#paymentResult')
        let showResultSecondary = document.querySelectorAll('.showResultSecondary')
        if (global.$store.state.choosedLogo.length > 0) {
          choosenResult = global.$store.state.choosedLogo
          global.$store.state.choosedLogo = ''
          showResult.innerHTML = choosenResult
          paymentResult.innerHTML = choosenResult
          showResultSecondary.forEach(val => {
            val.innerHTML = choosenResult
          })
          global.paymentDialog = true
        } else {
          choosenResult = global.getResultatElement(x)
          showResult.innerHTML = choosenResult.innerHTML
          paymentResult.innerHTML = choosenResult.innerHTML
          showResultSecondary.forEach(val => {
            val.innerHTML = choosenResult.innerHTML
          })
        }
        showResult.className += ' resultFont'
        let logoOne = document.querySelector('#logoOne')
        let logoTwo = document.querySelector('#logoTwo')
        let logoThree = document.querySelector('#logoThree')
        logoOne.innerHTML = showResult.innerHTML
        logoTwo.innerHTML = showResult.innerHTML.replace(/--text/g, 'xx black--text')
        logoThree.innerHTML = showResult.innerHTML.replace(/--text/g, 'xx white--text')
        logoOne.innerHTML = logoOne.innerHTML.replace('font-size: 0.7em !important;', 'font-size:1.1em!important;margin-top:-5px!important')
        logoTwo.innerHTML = logoTwo.innerHTML.replace('font-size: 0.7em !important;', 'font-size:1.1em!important;margin-top:-5px!important')
        logoThree.innerHTML = logoThree.innerHTML.replace('font-size: 0.7em !important;', 'font-size:1.1em!important;margin-top:-5px!important')
        logoOne.innerHTML = logoOne.innerHTML.replace('<div class="bigLetter"', '<div class="bigLetter"')
        logoTwo.innerHTML = logoTwo.innerHTML.replace('<div class="bigLetter"', '<div class="bigLetter"')
        logoThree.innerHTML = logoThree.innerHTML.replace('<div class="bigLetter"', '<div class="bigLetter"')
      }, 100)
    },
    downloadAllLogos () {
      let logoOne = document.querySelector('#logoOne')
      let logoTwo = document.querySelector('#logoTwo')
      let logoThree = document.querySelector('#logoThree')
      // --------- LogoOne ---------
      // ----- TYP 3 (initialer) ------ //
      if (this.$store.state.logoInfo.typeOfLogo === 3) {
        logoOne.innerHTML = logoOne.innerHTML.replace(/theResultFont/g, 'biggerSize')
        logoOne.innerHTML = logoOne.innerHTML.replace(/scaleDown/g, '')
        if (!logoOne.innerHTML.includes('style="margin-top: 8px; margin-bottom: -8px;"')) {
          logoOne.innerHTML = logoOne.innerHTML.replace('margin-top: -16px; font-size:1.1em!important;margin-top:-5px!important', 'margin-top: -16px; font-size:1.6em!important;margin-top:-42px!important')
          if (logoOne.innerHTML.includes('x13') || logoOne.innerHTML.includes('x9')) {
            logoOne.innerHTML = logoOne.innerHTML.replace('margin-top: -16px; font-size:1.6em!important;margin-top:-42px!important', 'margin-top: -16px; font-size:1.6em!important;margin-top:-50px!important')
          } else if (logoOne.innerHTML.includes('x4') || logoOne.innerHTML.includes('x16')) {
            logoOne.innerHTML = logoOne.innerHTML.replace('margin-top: -16px; font-size:1.6em!important;margin-top:-42px!important', 'margin-top: -16px; font-size:1.6em!important;margin-top:-18px!important')
          } else if (logoOne.innerHTML.includes('x8')) {
            logoOne.innerHTML = logoOne.innerHTML.replace('margin-top: -16px; font-size:1.6em!important;margin-top:-42px!important', 'margin-top: -16px; font-size:1.3em!important;margin-top:7px!important')
          }
        } else if  (logoOne.innerHTML.includes('style="margin-top: 8px; margin-bottom: -8px;"')) {
          // STOR BOKSTAV OVANPÅ
          logoOne.innerHTML = logoOne.innerHTML.replace('font-size:1.1em!important;margin-top:-5px!important', 'font-size:1.4em!important;margin-top:-5px!important')
          logoOne.innerHTML = logoOne.innerHTML.replace('style="margin-top: 8px; margin-bottom: -8px;"', 'style="margin-top: -20px; margin-bottom: 25px;"')
          if (logoOne.innerHTML.includes('ex11')) {
            logoOne.innerHTML = logoOne.innerHTML.replace('style="margin-top: -20px; margin-bottom: 25px;"', 'style="margin-top: -40px; margin-bottom: 11px;"')
          }
        }
        if (logoOne.innerHTML.includes('ex6')) {
          logoOne.innerHTML = logoOne.innerHTML.replace('style="margin-top: -10px; margin-bottom: -20px;"', 'style="margin-top: -13px; margin-bottom: 13px;"')
        }
      }
      // --------- LogoTwo ---------
      // ----- TYP 3 (initialer) ------ //
      if (this.$store.state.logoInfo.typeOfLogo === 3) {
        logoTwo.innerHTML = logoTwo.innerHTML.replace(/theResultFont/g, 'biggerSize')
        logoTwo.innerHTML = logoTwo.innerHTML.replace(/scaleDown/g, '')
        if (!logoTwo.innerHTML.includes('style="margin-top: 8px; margin-bottom: -8px;"')) {
          logoTwo.innerHTML = logoTwo.innerHTML.replace('margin-top: -16px; font-size:1.1em!important;margin-top:-5px!important', 'margin-top: -16px; font-size:1.6em!important;margin-top:-42px!important')
          if (logoTwo.innerHTML.includes('x13') || logoTwo.innerHTML.includes('x9')) {
            logoTwo.innerHTML = logoTwo.innerHTML.replace('margin-top: -16px; font-size:1.6em!important;margin-top:-42px!important', 'margin-top: -16px; font-size:1.6em!important;margin-top:-50px!important')
          } else if (logoTwo.innerHTML.includes('x4') || logoTwo.innerHTML.includes('x16')) {
            logoTwo.innerHTML = logoTwo.innerHTML.replace('margin-top: -16px; font-size:1.6em!important;margin-top:-42px!important', 'margin-top: -16px; font-size:1.6em!important;margin-top:-18px!important')
          } else if (logoTwo.innerHTML.includes('x8')) {
            logoTwo.innerHTML = logoTwo.innerHTML.replace('margin-top: -16px; font-size:1.6em!important;margin-top:-42px!important', 'margin-top: -16px; font-size:1.3em!important;margin-top:7px!important')
          }
        } else if  (logoTwo.innerHTML.includes('style="margin-top: 8px; margin-bottom: -8px;"')) {
          // STOR BOKSTAV OVANPÅ
          logoTwo.innerHTML = logoTwo.innerHTML.replace('font-size:1.1em!important;margin-top:-5px!important', 'font-size:1.4em!important;margin-top:-5px!important')
          logoTwo.innerHTML = logoTwo.innerHTML.replace('style="margin-top: 8px; margin-bottom: -8px;"', 'style="margin-top: -20px; margin-bottom: 25px;"')
          if (logoTwo.innerHTML.includes('ex11')) {
            logoTwo.innerHTML = logoTwo.innerHTML.replace('style="margin-top: -20px; margin-bottom: 25px;"', 'style="margin-top: -40px; margin-bottom: 11px;"')
          }
        }
        if (logoTwo.innerHTML.includes('ex6')) {
          logoTwo.innerHTML = logoTwo.innerHTML.replace('style="margin-top: -10px; margin-bottom: -20px;"', 'style="margin-top: -13px; margin-bottom: 13px;"')
        }
      }
      // --------- LogoThree ---------
      // ----- TYP 3 (initialer) ------ //
      if (this.$store.state.logoInfo.typeOfLogo === 3) {
        logoThree.innerHTML = logoThree.innerHTML.replace(/theResultFont/g, 'biggerSize')
        logoThree.innerHTML = logoThree.innerHTML.replace(/scaleDown/g, '')
        if (!logoThree.innerHTML.includes('style="margin-top: 8px; margin-bottom: -8px;"')) {
          logoThree.innerHTML = logoThree.innerHTML.replace('margin-top: -16px; font-size:1.1em!important;margin-top:-5px!important', 'margin-top: -16px; font-size:1.6em!important;margin-top:-42px!important')
          if (logoThree.innerHTML.includes('x13') || logoThree.innerHTML.includes('x9')) {
            logoThree.innerHTML = logoThree.innerHTML.replace('margin-top: -16px; font-size:1.6em!important;margin-top:-42px!important', 'margin-top: -16px; font-size:1.6em!important;margin-top:-50px!important')
          } else if (logoThree.innerHTML.includes('x4') || logoThree.innerHTML.includes('x16')) {
            logoThree.innerHTML = logoThree.innerHTML.replace('margin-top: -16px; font-size:1.6em!important;margin-top:-42px!important', 'margin-top: -16px; font-size:1.6em!important;margin-top:-18px!important')
          } else if (logoThree.innerHTML.includes('x8')) {
            logoThree.innerHTML = logoThree.innerHTML.replace('margin-top: -16px; font-size:1.6em!important;margin-top:-42px!important', 'margin-top: -16px; font-size:1.3em!important;margin-top:7px!important')
          }
        } else if  (logoThree.innerHTML.includes('style="margin-top: 8px; margin-bottom: -8px;"')) {
          // STOR BOKSTAV OVANPÅ
          logoThree.innerHTML = logoThree.innerHTML.replace('font-size:1.1em!important;margin-top:-5px!important', 'font-size:1.4em!important;margin-top:-5px!important')
          logoThree.innerHTML = logoThree.innerHTML.replace('style="margin-top: 8px; margin-bottom: -8px;"', 'style="margin-top: -20px; margin-bottom: 25px;"')
          if (logoThree.innerHTML.includes('ex11')) {
            logoThree.innerHTML = logoThree.innerHTML.replace('style="margin-top: -20px; margin-bottom: 25px;"', 'style="margin-top: -40px; margin-bottom: 11px;"')
          }
        }
        if (logoThree.innerHTML.includes('ex6')) {
          logoThree.innerHTML = logoThree.innerHTML.replace('style="margin-top: -10px; margin-bottom: -20px;"', 'style="margin-top: -13px; margin-bottom: 13px;"')
        }
      }
      // --------- LogoOne ---------
      // ----- TYP 1 (Ikoner) ------ //
      if (this.$store.state.logoInfo.typeOfLogo === 1) {
        logoOne.innerHTML = logoOne.innerHTML.replace(/resultFontIcons/g, 'biggerSize')
        logoOne.innerHTML = logoOne.innerHTML.replace(/scaleDown/g, '')
        logoOne.innerHTML = logoOne.innerHTML.replace(/scaleDown/g, '')
        logoOne.innerHTML = logoOne.innerHTML.replace('font-size: 36px;', 'font-size: 54px;')
        logoOne.innerHTML = logoOne.innerHTML.replace('font-size:1.1em!important;margin-top:-5px!important', 'font-size:1.6em!important')
        if (logoOne.innerHTML.includes('style="margin-top: 3px; margin-bottom: -6px;"')) {
          logoOne.innerHTML = logoOne.innerHTML.replace('style="margin-top: 3px; margin-bottom: -6px;"', 'style="margin-top: -13px; margin-bottom: 10px;"')
          logoOne.innerHTML = logoOne.innerHTML.replace('style="font-size: 54px;"', 'style="font-size: 54px;margin-left:-15px!important"')
        }
        if (logoOne.innerHTML.includes('x4') || logoOne.innerHTML.includes('x3') || logoOne.innerHTML.includes('x2') || logoOne.innerHTML.includes('x8')) {
          logoOne.innerHTML = logoOne.innerHTML.replace('style="font-size: 54px; margin-bottom: 8px;"', 'style="font-size: 54px;margin-bottom:16px;margin-left:0px!important"')
        } else if (logoOne.innerHTML.includes('x1 ') || logoOne.innerHTML.includes('x5') || logoOne.innerHTML.includes('x13')) {
          logoOne.innerHTML = logoOne.innerHTML.replace('font-size: 54px; margin-bottom: 8px;', 'font-size: 54px; margin-bottom: 17px;')
          logoOne.innerHTML = logoOne.innerHTML.replace('style="font-size:1.6em!important"', 'style="font-size:1.6em!important;margin-top:-7px!important"')
        } else if (logoOne.innerHTML.includes('x9')) {
          logoOne.innerHTML = logoOne.innerHTML.replace('font-size: 54px; margin-bottom: 1px;', 'font-size: 54px; margin-bottom: 11px;')
          logoOne.innerHTML = logoOne.innerHTML.replace('style="font-size:1.6em!important"', 'style="font-size:1.6em!important;margin-top:-32px!important"')
        }
        if (logoOne.innerHTML.includes('x6')) {
          logoOne.innerHTML = logoOne.innerHTML.replace('style="margin-top: -10px; margin-bottom: 10px;"', 'style="margin-top: -10px; margin-bottom: 10px;font-size:2em"')
        }
      }
      // --------- LogoTwo ---------
      // ----- TYP 1 (Ikoner) ------ //
      if (this.$store.state.logoInfo.typeOfLogo === 1) {
        logoTwo.innerHTML = logoTwo.innerHTML.replace(/resultFontIcons/g, 'biggerSize')
        logoTwo.innerHTML = logoTwo.innerHTML.replace(/scaleDown/g, '')
        logoTwo.innerHTML = logoTwo.innerHTML.replace(/scaleDown/g, '')
        logoTwo.innerHTML = logoTwo.innerHTML.replace('font-size: 36px;', 'font-size: 54px;')
        logoTwo.innerHTML = logoTwo.innerHTML.replace('font-size:1.1em!important;margin-top:-5px!important', 'font-size:1.6em!important')
        if (logoTwo.innerHTML.includes('style="margin-top: 3px; margin-bottom: -6px;"')) {
          logoTwo.innerHTML = logoTwo.innerHTML.replace('style="margin-top: 3px; margin-bottom: -6px;"', 'style="margin-top: -13px; margin-bottom: 10px;"')
          logoTwo.innerHTML = logoTwo.innerHTML.replace('style="font-size: 54px;"', 'style="font-size: 54px;margin-left:-15px!important"')
        }
        if (logoTwo.innerHTML.includes('x4') || logoTwo.innerHTML.includes('x3') || logoTwo.innerHTML.includes('x2') || logoTwo.innerHTML.includes('x8')) {
          logoTwo.innerHTML = logoTwo.innerHTML.replace('style="font-size: 54px; margin-bottom: 8px;"', 'style="font-size: 54px;margin-bottom:16px;margin-left:0px!important"')
        } else if (logoTwo.innerHTML.includes('x1 ') || logoTwo.innerHTML.includes('x5') || logoTwo.innerHTML.includes('x13')) {
          logoTwo.innerHTML = logoTwo.innerHTML.replace('font-size: 54px; margin-bottom: 8px;', 'font-size: 54px; margin-bottom: 17px;')
          logoTwo.innerHTML = logoTwo.innerHTML.replace('style="font-size:1.6em!important"', 'style="font-size:1.6em!important;margin-top:-7px!important"')
        } else if (logoTwo.innerHTML.includes('x9')) {
          logoTwo.innerHTML = logoTwo.innerHTML.replace('font-size: 54px; margin-bottom: 1px;', 'font-size: 54px; margin-bottom: 11px;')
          logoTwo.innerHTML = logoTwo.innerHTML.replace('style="font-size:1.6em!important"', 'style="font-size:1.6em!important;margin-top:-32px!important"')
        }
        if (logoTwo.innerHTML.includes('x6')) {
          logoTwo.innerHTML = logoTwo.innerHTML.replace('style="margin-top: -10px; margin-bottom: 10px;"', 'style="margin-top: -10px; margin-bottom: 10px;font-size:2em"')
        }
      }
      // --------- LogoThree ---------
      // ----- TYP 1 (Ikoner) ------ //
      if (this.$store.state.logoInfo.typeOfLogo === 1) {
        logoThree.innerHTML = logoThree.innerHTML.replace(/resultFontIcons/g, 'biggerSize')
        logoThree.innerHTML = logoThree.innerHTML.replace(/scaleDown/g, '')
        logoThree.innerHTML = logoThree.innerHTML.replace(/scaleDown/g, '')
        logoThree.innerHTML = logoThree.innerHTML.replace('font-size: 36px;', 'font-size: 54px;')
        logoThree.innerHTML = logoThree.innerHTML.replace('font-size:1.1em!important;margin-top:-5px!important', 'font-size:1.6em!important')
        if (logoThree.innerHTML.includes('style="margin-top: 3px; margin-bottom: -6px;"')) {
          logoThree.innerHTML = logoThree.innerHTML.replace('style="margin-top: 3px; margin-bottom: -6px;"', 'style="margin-top: -13px; margin-bottom: 10px;"')
          logoThree.innerHTML = logoThree.innerHTML.replace('style="font-size: 54px;"', 'style="font-size: 54px;margin-left:-15px!important"')
        }
        if (logoThree.innerHTML.includes('x4') || logoThree.innerHTML.includes('x3') || logoThree.innerHTML.includes('x2') || logoThree.innerHTML.includes('x8')) {
          logoThree.innerHTML = logoThree.innerHTML.replace('style="font-size: 54px; margin-bottom: 8px;"', 'style="font-size: 54px;margin-bottom:16px;margin-left:0px!important"')
        } else if (logoThree.innerHTML.includes('x1 ') || logoThree.innerHTML.includes('x5') || logoThree.innerHTML.includes('x13')) {
          logoThree.innerHTML = logoThree.innerHTML.replace('font-size: 54px; margin-bottom: 8px;', 'font-size: 54px; margin-bottom: 17px;')
          logoThree.innerHTML = logoThree.innerHTML.replace('style="font-size:1.6em!important"', 'style="font-size:1.6em!important;margin-top:-7px!important"')
        } else if (logoThree.innerHTML.includes('x9')) {
          logoThree.innerHTML = logoThree.innerHTML.replace('font-size: 54px; margin-bottom: 1px;', 'font-size: 54px; margin-bottom: 11px;')
          logoThree.innerHTML = logoThree.innerHTML.replace('style="font-size:1.6em!important"', 'style="font-size:1.6em!important;margin-top:-32px!important"')
        }
        if (logoThree.innerHTML.includes('x6')) {
          logoThree.innerHTML = logoThree.innerHTML.replace('style="margin-top: -10px; margin-bottom: 10px;"', 'style="margin-top: -10px; margin-bottom: 10px;font-size:2em"')
        }
      }
      // --------- LogoOne ---------
      // ----- TYP 2 (TEXT) ------ //
      if (this.$store.state.logoInfo.typeOfLogo === 2) {
        logoOne.innerHTML = logoOne.innerHTML.replace(/theResultFont/g, 'biggerSize')
        logoOne.innerHTML = logoOne.innerHTML.replace(/scaleDown/g, '')
        logoOne.innerHTML = logoOne.innerHTML.replace(/scaleDown/g, '')
        logoOne.innerHTML = logoOne.innerHTML.replace('style="font-size:1.1em!important;margin-top:-5px!important"', 'style="font-size:1.6em!important;margin-top:-15px!important"')
        if (logoOne.innerHTML.includes('ex3') || logoOne.innerHTML.includes('ex7') || logoOne.innerHTML.includes('ex4')) {
          logoOne.innerHTML = logoOne.innerHTML.replace('style="font-size:1.6em!important;margin-top:-15px!important"', 'style="font-size:1.6em!important;margin-top:4px!important"')
        } else if (logoOne.innerHTML.includes('ex8')) {
          logoOne.innerHTML = logoOne.innerHTML.replace('style="font-size:1.6em!important;margin-top:-15px!important"', 'style="font-size:1.6em!important;margin-top:17px!important"')
        } else if (logoOne.innerHTML.includes('ex9')) {
          logoOne.innerHTML = logoOne.innerHTML.replace('style="font-size:1.6em!important;margin-top:-15px!important"', 'style="font-size:1.6em!important;margin-top:-28px!important"')
        } else if (logoOne.innerHTML.includes('ex15')) {
          logoOne.innerHTML = logoOne.innerHTML.replace('style="font-size:1.6em!important;margin-top:-15px!important"', 'style="font-size:1.6em!important;margin-top:8px!important"')
        } else if (logoOne.innerHTML.includes('ex16')) {
          logoOne.innerHTML = logoOne.innerHTML.replace('style="font-size:1.6em!important;margin-top:-15px!important"', 'style="font-size:1.6em!important;margin-top:5px!important"')
        } else if (logoOne.innerHTML.includes('ex13')) {
          logoOne.innerHTML = logoOne.innerHTML.replace('style="font-size:1.6em!important;margin-top:-15px!important"', 'style="font-size:1.6em!important;margin-top:-22px!important"')
        } else if (logoOne.innerHTML.includes('ex6') || logoOne.innerHTML.includes('ex8')) {
          logoOne.innerHTML = logoOne.innerHTML.replace('style="font-size:1.6em!important;margin-top:-15px!important"', 'style="font-size:1.6em!important;margin-top:12px!important"')
        }
      }
      // --------- LogoTwo ---------
      // ----- TYP 2 (TEXT) ------ //
      if (this.$store.state.logoInfo.typeOfLogo === 2) {
        logoTwo.innerHTML = logoTwo.innerHTML.replace(/theResultFont/g, 'biggerSize')
        logoTwo.innerHTML = logoTwo.innerHTML.replace(/scaleDown/g, '')
        logoTwo.innerHTML = logoTwo.innerHTML.replace(/scaleDown/g, '')
        logoTwo.innerHTML = logoTwo.innerHTML.replace('style="font-size:1.1em!important;margin-top:-5px!important"', 'style="font-size:1.6em!important;margin-top:-15px!important"')
        if (logoTwo.innerHTML.includes('ex3') || logoTwo.innerHTML.includes('ex7') || logoTwo.innerHTML.includes('ex4')) {
          logoTwo.innerHTML = logoTwo.innerHTML.replace('style="font-size:1.6em!important;margin-top:-15px!important"', 'style="font-size:1.6em!important;margin-top:4px!important"')
        } else if (logoTwo.innerHTML.includes('ex8')) {
          logoTwo.innerHTML = logoTwo.innerHTML.replace('style="font-size:1.6em!important;margin-top:-15px!important"', 'style="font-size:1.6em!important;margin-top:17px!important"')
        } else if (logoTwo.innerHTML.includes('ex9')) {
          logoTwo.innerHTML = logoTwo.innerHTML.replace('style="font-size:1.6em!important;margin-top:-15px!important"', 'style="font-size:1.6em!important;margin-top:-28px!important"')
        } else if (logoTwo.innerHTML.includes('ex15')) {
          logoTwo.innerHTML = logoTwo.innerHTML.replace('style="font-size:1.6em!important;margin-top:-15px!important"', 'style="font-size:1.6em!important;margin-top:8px!important"')
        } else if (logoTwo.innerHTML.includes('ex16')) {
          logoTwo.innerHTML = logoTwo.innerHTML.replace('style="font-size:1.6em!important;margin-top:-15px!important"', 'style="font-size:1.6em!important;margin-top:5px!important"')
        } else if (logoTwo.innerHTML.includes('ex13')) {
          logoTwo.innerHTML = logoTwo.innerHTML.replace('style="font-size:1.6em!important;margin-top:-15px!important"', 'style="font-size:1.6em!important;margin-top:-22px!important"')
        } else if (logoTwo.innerHTML.includes('ex6') || logoTwo.innerHTML.includes('ex8')) {
          logoTwo.innerHTML = logoTwo.innerHTML.replace('style="font-size:1.6em!important;margin-top:-15px!important"', 'style="font-size:1.6em!important;margin-top:12px!important"')
        }
      }
      // --------- LogoThree ---------
      // ----- TYP 2 (TEXT) ------ //
      if (this.$store.state.logoInfo.typeOfLogo === 2) {
        logoThree.innerHTML = logoThree.innerHTML.replace(/theResultFont/g, 'biggerSize')
        logoThree.innerHTML = logoThree.innerHTML.replace(/scaleDown/g, '')
        logoThree.innerHTML = logoThree.innerHTML.replace(/scaleDown/g, '')
        logoThree.innerHTML = logoThree.innerHTML.replace('style="font-size:1.1em!important;margin-top:-5px!important"', 'style="font-size:1.6em!important;margin-top:-15px!important"')
        if (logoThree.innerHTML.includes('ex3') || logoThree.innerHTML.includes('ex7') || logoThree.innerHTML.includes('ex4')) {
          logoThree.innerHTML = logoThree.innerHTML.replace('style="font-size:1.6em!important;margin-top:-15px!important"', 'style="font-size:1.6em!important;margin-top:4px!important"')
        } else if (logoThree.innerHTML.includes('ex8')) {
          logoThree.innerHTML = logoThree.innerHTML.replace('style="font-size:1.6em!important;margin-top:-15px!important"', 'style="font-size:1.6em!important;margin-top:17px!important"')
        } else if (logoThree.innerHTML.includes('ex9')) {
          logoThree.innerHTML = logoThree.innerHTML.replace('style="font-size:1.6em!important;margin-top:-15px!important"', 'style="font-size:1.6em!important;margin-top:-28px!important"')
        } else if (logoThree.innerHTML.includes('ex15')) {
          logoThree.innerHTML = logoThree.innerHTML.replace('style="font-size:1.6em!important;margin-top:-15px!important"', 'style="font-size:1.6em!important;margin-top:8px!important"')
        } else if (logoThree.innerHTML.includes('ex16')) {
          logoThree.innerHTML = logoThree.innerHTML.replace('style="font-size:1.6em!important;margin-top:-15px!important"', 'style="font-size:1.6em!important;margin-top:5px!important"')
        } else if (logoThree.innerHTML.includes('ex13')) {
          logoThree.innerHTML = logoThree.innerHTML.replace('style="font-size:1.6em!important;margin-top:-15px!important"', 'style="font-size:1.6em!important;margin-top:-22px!important"')
        } else if (logoThree.innerHTML.includes('ex6') || logoThree.innerHTML.includes('ex8')) {
          logoThree.innerHTML = logoThree.innerHTML.replace('style="font-size:1.6em!important;margin-top:-15px!important"', 'style="font-size:1.6em!important;margin-top:12px!important"')
        }
      }
      // DIVIDER
      const global = this
      var name = 'logomaster.io-'
      $('#caption-text').html(name)
      $('#panel').hide()
      logoTwo.style.display = ''
      logoThree.style.display = ''
      html2canvas(logoOne, {
        dpi: 192,
        onrendered: function (canvas) {
          $('#blank').attr('href', canvas.toDataURL('image/png'))
          global.$store.state.logos.custom = canvas.toDataURL('image/png')
          // $('#blank').attr('download', name + 'logo1' + '.png')
          // $('#blank')[0].click()
        }
      })
      html2canvas(logoTwo, {
        dpi: 192,
        onrendered: function (canvas) {
          $('#blank').attr('href', canvas.toDataURL('image/png'))
          global.$store.state.logos.black = canvas.toDataURL('image/png')
          // $('#blank').attr('download', name + 'logo2' + '.png')
          // $('#blank')[0].click()
          logoTwo.style.display = 'none'
        }
      })
      html2canvas(logoThree, {
        dpi: 192,
        onrendered: function (canvas) {
          $('#blank').attr('href', canvas.toDataURL('image/png'))
          global.$store.state.logos.white = canvas.toDataURL('image/png')
          // $('#blank').attr('download', name + 'logo3' + '.png')
          // $('#blank')[0].click()
          logoThree.style.display = 'none'
        }
      })
    },
    uploadLogosToFirebase () {
      let global = this
      let nr = [1, 32, 54, 234, 9834, 32, 'gg', 'sdf', 'as', 'wef', 'gfg', 'qwe', 43, 54, 65, 234, 54, 234, 54, 23, 45, 'x']
      let fileName = new Date().getTime() + nr[Math.floor(Math.random() * 10)] + this.$store.state.logoInfo.logoName.split(' ')[0]
      let customLogo = this.$store.state.logos.custom.substr(22)
      let blackLogo = this.$store.state.logos.black.substr(22)
      let whiteLogo = this.$store.state.logos.white.substr(22)
      let uploadCustomLogo = firebase.storage().ref('logos').child(fileName + 'custom').putString(customLogo, 'base64', { contentType: 'image/png' })
      uploadCustomLogo.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function (snapshot) {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          // VISA INGET
        }, function (error) {
          console.log(error)
        }, function () {
          // Upload completed successfully, now we can get the download URL
          var myStorage = firebase.storage()
          var giveMeCustom
          var getImageUrl = function () {
            return myStorage.ref('logos').child(fileName + 'custom').getDownloadURL()
          }
          giveMeCustom = getImageUrl()
          global.$store.state.logosLink.custom = giveMeCustom
        }
      )
      let uploadBlackLogo = firebase.storage().ref('logos').child(fileName + 'black').putString(blackLogo, 'base64', { contentType: 'image/png' })
      uploadBlackLogo.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function (snapshot) {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          // VISA INGET
        }, function (error) {
          console.log(error)
        }, function () {
          // Upload completed successfully, now we can get the download URL
          var myStorage = firebase.storage()
          var giveMeBlack
          var getImageUrl = function () {
            return myStorage.ref('logos').child(fileName + 'black').getDownloadURL()
          }
          giveMeBlack = getImageUrl()
          global.$store.state.logosLink.black = giveMeBlack
        }
      )
      let uploadWhiteLogo = firebase.storage().ref('logos').child(fileName + 'white').putString(whiteLogo, 'base64', { contentType: 'image/png' })
      uploadWhiteLogo.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function (snapshot) {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          // VISA INGET
        }, function (error) {
          console.log(error)
        }, function () {
          // Upload completed successfully, now we can get the download URL
          var myStorage = firebase.storage()
          var giveMeWhite
          var getImageUrl = function () {
            return myStorage.ref('logos').child(fileName + 'white').getDownloadURL()
          }
          giveMeWhite = getImageUrl()
          global.$store.state.logosLink.white = giveMeWhite
        }
      )
    },
    processOrder () {
      let zeroLogosLinkAtStore = {
        custom: '',
        black: '',
        white: ''
      }
      this.processingOrder = true
      this.order.logoHtml = document.querySelector('#resultat' + this.choosedLogo).innerHTML.toString()
      this.order.logosLink = {}
      this.$store.state.logosLink = JSON.parse(JSON.stringify(zeroLogosLinkAtStore))
      this.$store.state.logos = JSON.parse(JSON.stringify(zeroLogosLinkAtStore))
      this.downloadAllLogos()
    },
    paymentDate () {
      let x = this.order.date.split('')
      if (x.length >= 2 && !x.includes('/')) {
        if (x.includes('-')) {
          x = x.join('').replace('-', '').split('')
        }
        x.splice(2, 0, '/')
      }
      this.order.date = x.join('').substr(0, 5)
    },
    showMoreLogos () {
      let moreLogos = ['ex7', 'ex6', 'ex5', 'ex4', 'ex3', 'ex2', 'ex1', 'ex8', 'ex9', 'ex10', 'ex11', 'ex12', 'ex13', 'ex14', 'ex15', 'ex16']
      moreLogos.forEach(val => {
        var color = ' ' + this.$store.state.colors[Math.ceil(Math.random() * this.$store.state.colors.length - 1)] + '--text'
        if (true) {
          this.icons.push(this.$store.state.iconTypes.general[Math.ceil(Math.random() * this.$store.state.iconTypes.general.length - 1)])
        }
        if (this.$store.state.logoInfo.logoName.length > 8 || this.$store.state.logoInfo.typeOfLogo === 1 || this.$store.state.logoInfo.typeOfLogo === 3) {
          val += ' scaleDown'
          if (this.$store.state.logoInfo.logoTagline.length > 0) {
            val += ' marginBottomTagline'
          }
        }
        this.theColor.push(val + color)
      })
    },
    getColor (c) {
      let result
      let x = c.split(' ')
      x.forEach(val => {
        if (val.includes('--text')) {
          result = val
        }
      })
      return result
    },
    whiteStripesBackground (e) {
      if (e !== undefined && e !== '') {
        if (e.includes('black--text') || e.includes('secondary--text') || e.includes('success--text')) {
          return 'whiteBack'
        } else {
          return 'darkStripesBackground'
        }
      } else {
        return 'whiteBack'
      }
    },
    exploreBtnClass (e) {
      if (e !== undefined && e !== '') {
        if (e.includes('black') || e.includes('secondary') || e.includes('success')) {
          return 'black--text'
        } else {
          return 'white--text'
        }
      } else {
        return 'black--text'
      }
    },
    changeColor (c) {
      for (let i in this.theColor) {
        this.theColor[i] = this.theColor[i].split(' ')[0] + ' ' + c + '--text'
        this.theColor.forEach((val, index) => {
          if (!this.theColor[index].includes(c + '--text')) {
            this.theColor[index] = this.theColor[index].replace(/--text/g, '-old')
            this.theColor[index] = this.theColor[index].replace(/--deep/g, '-old')
            this.theColor[index] += ' ' + c + '--text'
          }
        })
        if (this.$store.state.logoInfo.logoName.length > 8 || this.$store.state.logoInfo.typeOfLogo === 1 || this.$store.state.logoInfo.typeOfLogo === 3) {
          this.theColor[i] += ' scaleDown'
          if (this.$store.state.logoInfo.logoTagline.length > 0) {
            this.theColor[i] += ' marginBottomTagline'
          }
        }
      }
      this.renderResult(1)
      this.resultPageKey++
    }
  },
  mounted () {
    let stylesLength = []
    // debugger
    if (this.$store.state.logoInfo.styles.length === 0 && this.$store.state.latestStyles.length > 0) {
      this.$store.state.logoInfo.styles = JSON.parse(JSON.stringify(this.$store.state.latestStyles))
      this.$store.state.logoInfo.typeOfLogo = 2
    }
    for (let i in this.$store.state.logoInfo.styles) {
      this.theColor[i] = this.$store.state.logoInfo.styles[i].split(' ')[0] + ' ' + this.$store.state.colors[Math.floor(Math.random() * this.$store.state.colors.length)] + '--text'
      if (this.$store.state.logoInfo.logoName.length > 8 || this.$store.state.logoInfo.typeOfLogo === 1 || this.$store.state.logoInfo.typeOfLogo === 3) {
        this.theColor[i] += ' scaleDown'
        if (this.$store.state.logoInfo.logoTagline.length > 0) {
          this.theColor[i] += ' marginBottomTagline'
        }
      }
    }
    if (this.$store.state.logoInfo.typeOfLogo === 1) {
      this.theColor.forEach((val, index) => {
        if (this.$store.state.logoInfo.choosedIndustry.length === 0) {
          this.icons.push(this.$store.state.iconTypes.general[Math.ceil(Math.random() * this.$store.state.iconTypes.general.length - 1)])
        } else if (this.$store.state.logoInfo.choosedIndustry === 'Data & IT') {
          this.icons.push(this.$store.state.iconTypes.data[Math.ceil(Math.random() * this.$store.state.iconTypes.data.length - 1)])
        } else if (this.$store.state.logoInfo.choosedIndustry === 'Blogging') {
          this.icons.push(this.$store.state.iconTypes.blogging[Math.ceil(Math.random() * this.$store.state.iconTypes.blogging.length - 1)])
        } else if (this.$store.state.logoInfo.choosedIndustry === 'Fitness') {
          this.icons.push(this.$store.state.iconTypes.fitness[Math.ceil(Math.random() * this.$store.state.iconTypes.fitness.length - 1)])
        } else if (this.$store.state.logoInfo.choosedIndustry === 'Marketing' || this.$store.state.logoInfo.choosedIndustry === 'Sales' || this.$store.state.logoInfo.choosedIndustry === 'Retail Sales') {
          this.icons.push(this.$store.state.iconTypes.marketing[Math.ceil(Math.random() * this.$store.state.iconTypes.marketing.length - 1)])
        } else if (this.$store.state.logoInfo.choosedIndustry === 'Bars & Restaurants' || this.$store.state.logoInfo.choosedIndustry === 'Beer, Wine & Liquor') {
          this.icons.push(this.$store.state.iconTypes.barsRestaurant[Math.ceil(Math.random() * this.$store.state.iconTypes.barsRestaurant.length - 1)])
        } else if (this.$store.state.logoInfo.choosedIndustry === 'Human resources') {
          this.icons.push(this.$store.state.iconTypes.hr[Math.ceil(Math.random() * this.$store.state.iconTypes.hr.length - 1)])
        } else if (this.$store.state.logoInfo.choosedIndustry === 'Kids') {
          this.icons.push(this.$store.state.iconTypes.kids[Math.ceil(Math.random() * this.$store.state.iconTypes.kids.length - 1)])
        } else if (this.$store.state.logoInfo.choosedIndustry === 'Shopping') {
          this.icons.push(this.$store.state.iconTypes.shopping[Math.ceil(Math.random() * this.$store.state.iconTypes.shopping.length - 1)])
        } else if (this.$store.state.logoInfo.choosedIndustry === 'Health and social care') {
          this.icons.push(this.$store.state.iconTypes.health[Math.ceil(Math.random() * this.$store.state.iconTypes.health.length - 1)])
        } else if (this.$store.state.logoInfo.choosedIndustry === 'Movies' || this.$store.state.logoInfo.choosedIndustry === 'TV-series') {
          this.icons.push(this.$store.state.iconTypes.movies[Math.ceil(Math.random() * this.$store.state.iconTypes.movies.length - 1)])
        } else if (this.$store.state.logoInfo.choosedIndustry === 'Banking & Mortgage') {
          this.icons.push(this.$store.state.iconTypes.banking[Math.ceil(Math.random() * this.$store.state.iconTypes.banking.length - 1)])
        } else if (this.$store.state.logoInfo.choosedIndustry === 'Education') {
          this.icons.push(this.$store.state.iconTypes.education[Math.ceil(Math.random() * this.$store.state.iconTypes.education.length - 1)])
        } else if (this.$store.state.logoInfo.choosedIndustry === 'Gambling & Casinos') {
          this.icons.push(this.$store.state.iconTypes.gambling[Math.ceil(Math.random() * this.$store.state.iconTypes.gambling.length - 1)])
        } else if (this.$store.state.logoInfo.choosedIndustry === 'Hotels, Motels & Tourism') {
          this.icons.push(this.$store.state.iconTypes.hotels[Math.ceil(Math.random() * this.$store.state.iconTypes.hotels.length - 1)])
        } else if (this.$store.state.logoInfo.choosedIndustry === 'Human Rights') {
          this.icons.push(this.$store.state.iconTypes.humanRights[Math.ceil(Math.random() * this.$store.state.iconTypes.humanRights.length - 1)])
        } else if (this.$store.state.logoInfo.choosedIndustry === 'Gaming') {
          this.icons.push(this.$store.state.iconTypes.gaming[Math.ceil(Math.random() * this.$store.state.iconTypes.gaming.length - 1)])
        } else if (this.$store.state.logoInfo.choosedIndustry === 'Music') {
          this.icons.push(this.$store.state.iconTypes.music[Math.ceil(Math.random() * this.$store.state.iconTypes.music.length - 1)])
        } else if (this.$store.state.logoInfo.choosedIndustry === 'Real Estate') {
          this.icons.push(this.$store.state.iconTypes.realEstate[Math.ceil(Math.random() * this.$store.state.iconTypes.realEstate.length - 1)])
        }
      })
    } else {
      this.icons = []
    }
    for (let i in this.theColor) {
      if (this.theColor[i] !== undefined && this.theColor[i] !== null && this.theColor[i].length > 0) {
        stylesLength.push(this.theColor[i])
      }
    }
    if (stylesLength.length < 6) {
      this.showMoreLogos()
    }
    this.resultPageKey++
    this.renderResult()
  },
  created () {
    document.querySelector('#triggerOrderFunctions').addEventListener('click', this.processOrder)
  }
}
</script>

<style>
.whiteBack {
  background: radial-gradient(black 3px, transparent 4px),
  radial-gradient(black 3px, transparent 4px),
  linear-gradient(transparent 4px, transparent 0),
  linear-gradient(45deg, transparent 74px, transparent 75px, #a4a4a4 75px, #a4a4a4 76px, transparent 77px, transparent 109px),
  linear-gradient(-45deg, transparent 75px, transparent 76px, #a4a4a4 76px, #a4a4a4 77px, transparent 78px, transparent 109px),
  transparent;
  background-size: 109px 109px, 109px 109px,100% 6px, 109px 109px, 109px 109px;
  background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
}
.whiteBack {
  background-color: #fff;
  background-image:
  linear-gradient(90deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px),
  linear-gradient(#eee .1em, transparent .1em);
  background-size: 100% 1.2em;
}
.darkStripesBackground {
  background:
  radial-gradient(black 15%, transparent 16%) 0 0,
  radial-gradient(black 15%, transparent 16%) 8px 8px,
  radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
  radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
  background-color: #282828;
  background-size: 16px 16px;
}
</style>
