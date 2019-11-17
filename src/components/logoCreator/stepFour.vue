<template>
  <div>
    <v-container>
      <v-layout row wrap py-5>
        <v-flex mb-5 xs12 text-xs-center>
          <div class="display-1">
            Which style suits you better?
          </div>
          <div class="title pt-3">
            Help us better understand your style by clicking on the images you prefer
          </div>
        </v-flex>

        <v-flex :mb-3="$vuetify.breakpoint.smAndDown" px-4 xs12 md6>
          <v-card @click="$store.state.logoInfo.styles[1] = 'ex3', choosedCard = true, $store.state.step = 5" class="py-5 pointer hoverCard">
            <v-card-text class="py-5">
              <div class="ex text-xs-center ex3">
                EXAMPLE
              </div>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex px-4 xs12 md6>
          <v-card @click="$store.state.logoInfo.styles[1] = 'ex4', choosedCard = true, $store.state.step = 5" class="py-5 pointer hoverCard">
            <v-card-text class="py-5">
              <div class="ex text-xs-center ex4">
                EXAMPLE
              </div>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex style="position:relative" pt-3>
          <span style="margin-top:10px;visibility:hidden">xx %</span>
          <div class="subheading" style="position:absolute;bottom:17px;left:20px;z-index:10;font-weight:bold">
            {{ progressStat }} %
          </div>
          <v-progress-linear
            style="border-radius:15px"
            color="error"
            height="25"
            :value="progressStat"
          ></v-progress-linear>
        </v-flex>

        <v-flex mt-5 text-xs-center xs12>
          <v-btn @click="$store.state.step = 3" round flat>
            <v-icon>arrow_left</v-icon>
            Back
          </v-btn>
          <v-btn @click="$store.state.step = 5" round flat>
            <span>Dislike both</span>
            <v-icon class="ml-1">close</v-icon>
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
    choosedCard: false,
    progressStat: 23
  }),
  computed: {
  }
}
</script>
