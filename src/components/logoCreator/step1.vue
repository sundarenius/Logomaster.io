<template>
  <div>
    <v-container class="fill-height">
      <v-layout style="margin-top:5%" align-center justify-center class="py-5 centerAlignMe" wrap>
        <v-flex text-xs-center xs12>
          <div class="display-1">
            Enter your industry
          </div>
        </v-flex>
        <v-flex mt-5 mb-4 xs12 md5>
          <v-autocomplete
            box
            label="Industry"
            :items="industries"
            v-model="choosedIndustry"
            @change="$store.state.step = 2"
          ></v-autocomplete>
        </v-flex>
        <v-flex text-xs-center xs12>
          <v-btn round @click="$store.state.step = 0" flat>
            <v-icon>arrow_left</v-icon>
            Back
          </v-btn>
          <v-btn @click="$store.state.step = 2" round class="red" flat>
            <span v-show="choosedIndustry.length === 0">Skip</span>
            <v-icon>arrow_right</v-icon>
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
  }),
  computed: {
    choosedIndustry: {
      get () { return this.$store.state.logoInfo.choosedIndustry },
      set (value) { this.$store.commit('choosedIndustryCommit', value) }
    },
    industries () {
      this.$store.state.logoInfo.industries.sort()
      return this.$store.state.logoInfo.industries
    }
  }
}
</script>
