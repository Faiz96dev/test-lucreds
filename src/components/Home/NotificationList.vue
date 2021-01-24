<template>
   <Card>
  <div class="d-flex justify-space-between mb-5">
    <span>Latest notifications:</span>
    <v-icon size="medium">fas fa-question-circle</v-icon>
  </div>
  <ListItem v-for="(item, index) in notificationsList" :listObj="item" :key="index" />
   </Card>
</template>

<script>
import Card from "@/components/Card";
import ListItem from "@/components/ListItem";
import { mapState} from "vuex";
export default {
  name: "NotificationList",
  components: { Card, ListItem},
  computed:{
   ...mapState('main', ['notificationsList']),
}
}
</script>

<style scoped>


</style>