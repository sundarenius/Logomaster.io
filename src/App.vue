<template>
  <v-app
    id="inspire"
    class="mainBackground"
    dark
  >
  <v-btn v-if="0" @click="test">TEST FROM APP.VUE</v-btn>
    <v-toolbar
      class="mainBackground"
      flat
      dark
    >
      <v-toolbar-title class="mr-5 align-center pointer">
        <div v-if="1" class="ex15 white--text" style="font-size:36px">
          Logomaster
        </div>
        <img v-if="0" src="@/assets/newLogo.png" width="160px" alt="Logomaster.io" style="margin-top: 15px">
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <div v-if="$vuetify.breakpoint.mdAndUp && $store.state.step < 1">
          <v-btn href="#start" flat>How it works</v-btn>
          <v-btn href="#howItStarted" flat>How it started</v-btn>
          <v-btn href="#aboutUs" flat>About us</v-btn>
        </div>
      <v-toolbar-side-icon v-if="$vuetify.breakpoint.smAndDown && $store.state.step < 1" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        
        <div @click="showSavedLogos" v-if="savedLogos > 0">
          <v-tooltip bottom>
            <span>All saved logos</span>
            <v-badge slot="activator" class="mt-2" overlap color="red" left style="cursor:pointer">
                <span style="font-weight:bold" slot="badge">{{ savedLogos }}</span>
                  <v-icon
                    x-large
                    color="white"
                  >
                    save_alt
                  </v-icon>
            </v-badge>
          </v-tooltip>
        </div>

    </v-toolbar>
    <v-content>
      <v-btn v-if="0" @click="test" small flat class="primary" style="position:absolute"/>
      <section v-show="$store.state.step < 1 && drawer" style="position:absolute;top:0px;width:100vw;z-index:15" class="secondary lighten-2">
        <v-layout wrap>
          <v-flex xs12>
            <v-btn href="#start" block flat>How it works</v-btn>
          </v-flex>
          <v-flex xs12>
            <v-btn href="#howItStarted" block flat>How it started</v-btn>
          </v-flex>
          <v-flex xs12>
            <v-btn href="#aboutUs" block flat>About us</v-btn>
          </v-flex>
        </v-layout>
      </section>

      <transition name="component-fade" mode="out-in">
        <section style="min-height:78vh">
          <router-view/>
        </section>
      </transition>

      <v-footer
        height="auto"
        color="grey darken-3"
        v-if="$store.state.step < 1"
      >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn href="#start" flat>How it works</v-btn>
      <v-btn href="#howItStarted" flat>How it started</v-btn>
      <v-btn href="#aboutUs" flat>About us</v-btn>
      <v-flex
        class="secondary darken-2"
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;{{ new Date().toISOString().substr(0, 4) }} — <strong>
          <img style="margin-bottom:-10px" src="@/assets/newLogo.png" width="100px" alt="Logomaster.io">
          - All rights reserved.
        </strong>
      </v-flex>
    </v-layout>
  </v-footer>

    </v-content>

    <v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" max-width="1100" v-model="showLogos">
      <v-card>
        <v-card-title class="justify-center primary lighten-2">
          <v-layout text-xs-center wrap>
            <v-flex xs12>
              <div style="font-weight:bold" :class="{'display-1' : $vuetify.breakpoint.mdAndUp, 'title' : $vuetify.breakpoint.smAndDown }">
                Your Saved Logos
              </div>
            </v-flex>
            <v-flex xs12>
              <div style="font-weight:bold" class="body-2">
                Click on the logo you want to buy
              </div>
            </v-flex>
          </v-layout>
          <div style="position:absolute;right:10px;top:10px;cursor:pointer">
            <v-icon @click="showLogos = false" style="font-weight:bold" x-large>close</v-icon>
          </div>
        </v-card-title>
        <v-card-text class="black savedLogosBackground">
          <v-layout justify-center v-bind:key="i" v-for="(l, i) in $store.state.savedLogos" row wrap>
            <v-flex @click="toCheckout(l)" style="transform:scale(1.5);cursor:pointer" my-4 md4 xs12 :id="'savedLogo' + i" class="text-xs-center hoverSaved">
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-dialog>


  </v-app>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'

export default {
  data: () => ({
    showLogos: false,
    drawer: false
  }),
  computed: {
    savedLogos () {
      return this.$store.state.savedLogos.length
    }
  },
  watch: {
    showLogos: function () {
      if (this.showLogos) {
        var nr = 0
        let x
        for (let i in this.$store.state.savedLogos) {
          x = document.querySelector('#savedLogo' + nr)
          x.innerHTML = this.$store.state.savedLogos[i]
          nr++
        }
      }
    }
  },
  methods: {
    test () {
      const order = {
      testOrder: true,
      email: 'sundarenius@gmail.com',
      price: '$5.99',
      logosLink: {
        x0: 'https://firebasestorage.googleapis.com/v0/b/logogenerator-a799f.appspot.com/o/logos%2F1551106473054wefWhatevercustom?alt=media&token=96f86695-35bb-406d-a639-33fcb4ad7acc',
        x1: 'https://firebasestorage.googleapis.com/v0/b/logogenerator-a799f.appspot.com/o/logos%2F1551106473054wefWhateverblack?alt=media&token=e1c986a2-1a24-458c-b865-d00fd1421f7b',
        x2: 'https://firebasestorage.googleapis.com/v0/b/logogenerator-a799f.appspot.com/o/logos%2F1551106473054wefWhateverwhite?alt=media&token=11414329-6d01-4625-b0f5-3acced89f546'
      }
    }
      console.log('hej')
      order.time = new Date().toISOString().substr(0, 19).replace('T', ' ')
      let theDBKey = firebase.database().ref().push().key
      firebase.database().ref('orders').child(theDBKey)
        .set(order)
        .then(res => {
          console.log('send successful')
        })
    },
    toCheckout (html) {
      this.$store.state.choosedLogo = html
      if (this.$store.state.step === 12) {
        this.$store.state.updateChoosenLogo++
      } else {
        this.$store.state.step = 12
      }
      this.showLogos = false
    },
    showSavedLogos () {
      this.showLogos = true
    }
  },
  props: {
    source: String
  }
}
</script>

<style>
.container {
  max-width: 1264px!important;
}
.fontBold {
  font-weight: bold;
}
.subheading {
  line-height: 18px;
}
.display-1 {
  font-weight: bold!important;
}
.pointer {
  cursor: pointer;
}
.hoverCard:hover {
  box-shadow: 1px 1px 2px 2px cyan;
}
.hoverCardResult:hover {
  background-color: #081f52;
}
.choosedCard {
  box-shadow: 1px 1px 2px 2px greenyellow;
}
.choosedCardResult {
  background-color: #081f52;
  box-shadow: 1px 1px 1px 1px #000;
}
.hoverSaved:hover {
  background: grey;
  border-radius: 10px;
}
.v-card {
  border-radius: 5px!important;
}
.mainBackgroundGREEN {
  background: #8BC34A!important; /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #8BC34A,#009688)!important; /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(270deg,#8BC34A,#009688)!important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.mainBackgroundOLD {
  background: #0c1856!important; /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, silver,#0c1856)!important; /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(270deg,silver,#0c1856)!important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.mainBackground {
  background: #4b6cb7!important; /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #4b6cb7,#182848)!important; /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(270deg,#4b6cb7,#182848)!important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.loggan {
  letter-spacing: 2px!important;
  font-size: 29px!important;
}
.logganColor {
  color: white;
  text-shadow: 2px 2px grey!important;
  font-weight: bold;
}
a {
  text-decoration: none!important;
}
body{
  animation:opac 1.8s}@keyframes opac{from{opacity:0}to{opacity:1};
}
.savedLogosBackground {
  background:
linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
background-color: #131313;
background-size: 20px 20px;
}
.pointer {
  cursor: pointer;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.colorPalette {
  padding: 15px;
  cursor: pointer;
}
.coffeeCup {
  background-image: url('');
  background-size:contain;
}
/* *******************  SCREENSHOT STYLES END ******************* */
.biggerSize {
  font-size: 5em!important;
}
.scaleDown {
  transform: scale(0.6)!important;
}
.marginBottomTagline {
  margin-bottom: -10px!important;
}
.marTop15 {
  margin-top: 45px!important;
}
.screenShotSize {
  font-size: 80px!important;
}
.showBigFontForLogotypTwo {
  font-size: 75px!important;
}
.resultFontIcons {
  font-size: 28px;
}
.changeIconPlaceForScreenshot {
  margin-left:-30px!important;
  margin-bottom:3px!important;
}
.changeIconPlaceForScreenshotRigth {
  margin-left: 12px!important;
}
.changeIconPlaceForScreenshotLeft {
  margin-bottom: 3.5px!important;
}
.changeIconPlaceForScreenshotTop {
  margin-left: -43px!important;
}
.dragToLeftBigLetter {
  margin-left:-19px!important;
  margin-bottom: 2.5px!important;
}
.dragUpLetter {
  margin-bottom:25px!important;
}
.dragToLeftBigLetterDragDown {
  margin-bottom: -7px!important;
  margin-left:-23px!important;
}
/* *******************  SCREENSHOT STYLES END ******************* */
/* *******************  FONT STYLES START ******************* */
.ex {
  font-size: 36px;
}
.theResultFont {
  font-size: 35px;
}
.bigLetter {
  font-size: 200%!important;
  text-transform: uppercase!important;
}
.resultFont {
  transform: scale(1.9)!important;
}
.scaleTheLogoTagLineClass {
  transform: scale(1.9)!important;
  margin-top: 32px!important;
}
/* @import url('https://fonts.googleapis.com/css?family=Monoton'); */
.ex1 {
  letter-spacing: 3px!important;
  text-align: center;
  text-transform: uppercase;
  text-shadow: #2c2c2c 3px 3px 5px;
  font-weight: 900;
  font-family: 'Monoton', cursive;
}
/* @import url('https://fonts.googleapis.com/css?family=Carter+One'); */
.ex2 {
  letter-spacing: 3px!important;
  font-family: 'Carter One', cursive;
  font-weight: bold;
  text-shadow: 1px 1px 1px #000;
}
.ex3 {
  letter-spacing: 2px!important;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif!important;
  text-shadow: 3px 5px 10px #000!important;
}
/* @import url('https://fonts.googleapis.com/css?family=Ultra'); */
.ex4OLD {
  letter-spacing: 2px!important;
  font-family: 'Ultra', serif;
  text-shadow: 0 1px 0 #bbb,
  0 2px 0 #bbb,
  0 3px 0 #aaa,
  0 4px 0 #aaa,
  0 5px 0 #999,
  0 6px 1px #000,
  0 0px 3px #000,
  0 1px 3px #000,
  0 3px 5px #000,
  0 5px 10px #000,
  0 5px 20px #000;
}
.ex4 {
  letter-spacing: 2px!important;
  font-family: 'Ultra', serif;
  text-shadow: 0 1px 0 #bbb,
  2px 4px 0 #bbb;
}
.ex5 {
  letter-spacing: 4px!important;
  font-family:'Monoton', cursive;
  text-shadow: 0 0 5px #fff,
0 0 20px #fff,
0 0 30px #fff,
0 0 40px lightslategrey,
0 0 70px lightslategrey,
0 0 80px lightslategrey,
0 0 100px lightslategrey,
0 0 150px lightslategrey;
}
/* @import url(https://fonts.googleapis.com/css?family=Bitter:400,700); */
.ex6 {
  letter-spacing: 2px!important;
  text-shadow: -1px -1px 0px rgba(255,255,255,0.3), 1px 1px 0px rgba(0,0,0,0.8)!important;
  opacity: 0.4;
  font: 700 80px 'Bitter'!important;
  font-size: 38px!important;
}
/* @import url(https://fonts.googleapis.com/css?family=Allerta+Stencil); */
.ex7 {
  font-weight: bold;
  font-family: 'Allerta Stencil', sans-serif;
  color: grey;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 3px;
  text-shadow: #EDEDED 3px 2px 0;
}
/* @import url(https://fonts.googleapis.com/css?family=Arvo:700); */
.ex8 {
  font-family: Arvo, sans-serif;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
  line-height: 1;
  text-shadow: #bababa -2px 4px 0px;
  position: relative;
}
.ex8SCREEN {
  font-family: Arvo, sans-serif;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0px;
  line-height: 1;
  text-shadow: #bababa 2px -4px 0px;
  position: relative;
}
/* @import url(https://fonts.googleapis.com/css?family=Coiny); */
.ex9 {
  letter-spacing: 2px;
  font-family: arial;
  font-family: 'Coiny', cursive;
  color: #fff;
}
/* @import url(https://fonts.googleapis.com/css?family=Black+Ops+One); */
.ex10 {
  letter-spacing: 2px!important;
  font-family:'Black Ops One', cursive;
  font-weight: bold;
  text-shadow: 2px 2px 2px black;
}
/* @import url(https://fonts.googleapis.com/css?family=Anton); */
.ex11 {
  letter-spacing: 3px!important;
  font-family: 'Anton', sans-serif;
  font-weight: bold;
  /* text-shadow: 2px 2px 2px lightgrey; */
}
/* @import url(https://fonts.googleapis.com/css?family=Nothing+You+Could+Do); */
.ex12 {
  letter-spacing: 2px!important;
  font-family:'Nothing You Could Do', cursive;
  font-weight: 900;
}
/* @import url(https://fonts.googleapis.com/css?family=Baloo); */
.ex13 {
  letter-spacing: 4px!important;
  font-family: 'Baloo', cursive;
  text-shadow: 0 1px 0 #ccc,
    0 2px 0 #c9c9c9,
    0 3px 0 #bbb,
    0 4px 0 #b9b9b9,
    0 5px 0 #aaa,
    0 6px 1px rgba(0,0,0,.1),
    0 0 5px rgba(0,0,0,.1),
    0 1px 3px rgba(0,0,0,.3),
    0 3px 5px rgba(0,0,0,.2),
    0 5px 10px rgba(0,0,0,.25),
    0 10px 10px rgba(0,0,0,.2),
    0 20px 20px rgba(0,0,0,.15);
}
/* @import url(https://fonts.googleapis.com/css?family=Bevan); */
.ex14 {
  letter-spacing: 2px!important;
  font-family: 'Bevan', cursive;
  font-weight: bold;
}
/* @import url(https://fonts.googleapis.com/css?family=Chewy); */
.ex15 {
  letter-spacing: 3px!important;
  font-family: 'Chewy', cursive;
  font-weight: bold;
  font-style: italic;
}
/* @import url(https://fonts.googleapis.com/css?family=Fredericka+the+Great); */
.ex16 {
  letter-spacing: 3px!important;
  font-family: 'Fredericka the Great', cursive;
  font-weight: bold;
}

/* *******************  FONT STYLES END ******************* */
@media only screen and (max-width: 600px) {
  .resultFont {
      transform: scale(1.5)!important;
    }
    .scaleTheLogoTagLineClass {
      transform: scale(1.4)!important;
      margin-top: 5px!important;
    }
}
</style>
