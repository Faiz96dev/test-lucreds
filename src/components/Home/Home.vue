<template>
  <v-row align="center" justify="center" fluid  class=" cards-wrapper d-flex justify-center mt-4">
    <v-col style="height:100%" cols="8">
  <NotificationList/>
    </v-col>
<!--    <v-col  cols="3" >-->
<!--      <Card style="height: 200px" class="mb-10" >HUI</Card>-->
<!--      <Card style="height: 200px">HUI</Card>-->
<!--    </v-col>-->
  </v-row >
</template>

<script>
import NotificationList from "@/components/Home/NotificationList";

export default {
  name: "Home",
  components: {NotificationList}
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