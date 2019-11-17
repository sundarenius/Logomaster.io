<template>
  <v-container fill-height style="min-height:90vh">
    <v-layout style="margin-top:-110px" justify-center wrap align-center>
      <v-flex pb-4 xs12 text-xs-center>
        <div style="font-weight:bold" :class="{'display-2' : $vuetify.breakpoint.smAndUp, 'title' : $vuetify.breakpoint.xsOnly}">
          Creating your logos...
        </div>
      </v-flex>
      <v-flex text-xs-center xs10 md5>
        <template>
        <v-progress-linear style="border-radius:15px" height="15px" color="white" :indeterminate="true"></v-progress-linear>
      </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  created () {
    setTimeout(() => {
      this.$store.state.step = 12
    }, 900)
  }
}
</script>

