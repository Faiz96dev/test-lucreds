<template>
  <v-app id="app">
    <v-container class=" pa-0" fluid>
      <TopNavBar/>
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

export default {
  name: 'App',

  components: {
    LeftNavMenu,
    TopNavBar
  },

  data: () => ({
    //
  }),
};
</script>
