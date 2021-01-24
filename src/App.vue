<template>
  <v-app id="app">
    <v-container class=" pa-0 display-flex" fluid>
      <TopNavBar/>
      <white-bar/>
    </v-container>

    <div style="display: flex; height: 90%">
      <left-nav-menu/>
      <router-view/>
    </div>

  </v-app>
</template>

<script>

import TopNavBar from "@/components/TopNavBar";
import LeftNavMenu from "@/components/LeftNavMenu";
import WhiteBar from "@/components/WhiteBar";

export default {
  name: 'App',

  components: {
    WhiteBar,
    LeftNavMenu,
    TopNavBar
  },

  data: () => ({
    //
  }),
};
</script>
