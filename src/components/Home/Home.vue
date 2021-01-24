<template>
  <v-row align="center" justify="center" fluid  class=" cards-wrapper d-flex justify-center mt-4">
    <v-col style="height:80vh" cols="8">
  <NotificationList/>
    </v-col>
  <v-col class="d-flex flex-column justify-space-between right-block"  cols="3" >
        <Status class="mb-3"/>
        <Earnings />
    </v-col>
  </v-row >
</template>

<script>
import NotificationList from "@/components/Home/NotificationList";
import Status from "@/components/Home/Status";
import Earnings from "@/components/Home/Earnings";

export default {
  name: "Home",
  components: {Earnings, Status, NotificationList}
}
</script>

<style scoped>
.cards-wrapper {
  height: 100%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}
</style>