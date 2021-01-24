<template>
  <v-row align="center" justify="center" fluid class=" cards-wrapper d-flex justify-center mt-4">
    <v-col style="height:80vh" cols="9">
      <NotificationList/>
    </v-col>
    <v-col class="d-flex flex-column right-block" cols="2">
      <Status/>
      <Earnings/>
    </v-col>
  </v-row>
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

.right-block {
  height: 80vh;
  justify-content: space-between;
  margin-left: 6px;
}
</style>