<template>
  <div>
    <v-container>
      <v-layout row wrap py-5>
        <v-flex mb-5 xs12>
          <div class="display-1 text-xs-center">
            Choose Preferred Logo Type
          </div>
        </v-flex>

        <v-flex px-2 md4>
          <v-card @click="$store.state.logoInfo.typeOfLogo = 1, $store.state.step = 3" :class="{'grey darken-1 pointer hoverCard' : true, 'choosedCard' : $store.state.logoInfo.typeOfLogo === 1}" style="height:220px">
            <v-layout py-5 px-3 row wrap>
              <v-flex style="margin-top:-10px" class="title text-xs-center px-4" xs12>
                <div>
                  <v-icon large>
                    favorite
                  </v-icon>
                </div>
                <div class="py-4">
                  Icon based
                </div>
                <div class="subheading">
                  An elegant and easy to remember
                  shape in the center
                  of your logo design.
                </div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>

        <v-flex px-2 md4 :my-3="$vuetify.breakpoint.smAndDown">
          <v-card @click="$store.state.logoInfo.typeOfLogo = 2, $store.state.step = 3" :class="{'grey darken-1 pointer hoverCard' : true, 'choosedCard' : $store.state.logoInfo.typeOfLogo === 2}" style="height:220px">
            <v-layout py-5 px-3 row wrap>
              <v-flex class="title text-xs-center px-4" xs12>
                <div class="ex1">
                  Logomaster.io
                </div>
                  <div class="py-4">
                    Text based
                  </div>
                  <div style="display:none;position:absolute;top:5px;right:5px;border-radius:10px;font-weight:bold" class="caption py-1 px-2 success">Most popular</div>
                <div class="subheading">
                  Your logo name
                  as the key element of your
                  logo design.
                </div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>

        <v-flex px-2 md4>
          <v-card @click="$store.state.logoInfo.typeOfLogo = 3, $store.state.step = 3" :class="{'grey darken-1 pointer hoverCard' : true, 'choosedCard' : $store.state.logoInfo.typeOfLogo === 3}" style="height:220px">
            <v-layout py-5 px-3 row wrap>
              <v-flex style="margin-top:-10px" class="title text-xs-center px-4" xs12>
                <div class="display-1">
                  A
                </div>
                <div class="py-4">
                  Initial based
                </div>
                <div class="subheading">
                  Initials as the main
                  element of your
                  logo design.
                </div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>

        <v-flex mt-5 text-xs-center xs12>
          <v-btn @click="$store.state.step = 1" round flat>
            <v-icon>arrow_left</v-icon>
            Back
          </v-btn>
          <v-btn :disabled="$store.state.logoInfo.typeOfLogo === 0" @click="$store.state.step = 3" class="success" round flat>
            <span>Next</span>
            <v-icon class="ml-1">arrow_right</v-icon>
          </v-btn>
        </v-flex>
        <v-flex text-xs-center xs12>
          <v-btn small @click="$store.state.step = 0, $store.state.logoInfo.styles = []" class="px-5" round flat>
            Restart
            <v-icon class="ml-2">refresh</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    msg: 'hej'
  })
}
</script>
