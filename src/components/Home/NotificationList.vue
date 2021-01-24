<template>
   <Card>
  <div class="d-flex justify-space-between mb-5">
    <span>Latest notifications:</span>
    <v-icon size="medium">fas fa-question-circle</v-icon>
  </div>
  <ListItem/>
   </Card>
</template>

<script>
import Card from "@/components/Card";
import ListItem from "@/components/ListItem";
export default {
  name: "NotificationList",
  components: {ListItem, Card}
}
</script>

<style scoped>


</style>