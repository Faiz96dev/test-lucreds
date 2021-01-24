<template>
  <v-app-bar
      color="#5685fd"
      dense
      dark
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Page title</v-toolbar-title>

    <v-spacer></v-spacer>
    <transition name="slide-fade">
      <v-text-field
          class="mr-4"
           v-if="search"
      clearable
          style="width:100px"
          dense
          hide-details
          placeholder="Search"
      ></v-text-field>
    </transition>


    <v-btn @click="search = !search" icon>
      <v-icon>fas fa-search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>fas fa-bell</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>fas fa-user-circle</v-icon>
    </v-btn>


  </v-app-bar>
</template>

<script>
export default {
  name: "TopNavBar",
  data() {
    return {
      search: false
    }
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>