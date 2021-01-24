<template>
  <div>
    <Card class="wrap-status">
      <span>Status</span>
      <div class="d-flex flex-column status">
        <div class="mb-8 mt-5 d-flex flex-column bl">
          <span class="grey--text">Your score</span>
          <span class="font-weight-bold amount-size">450</span>
        </div>
        <div class="line"></div>
        <div class="d-flex flex-column mt-5 bl">
          <span class="grey--text">Profile views this week</span>
          <span class="mt-5 font-weight-bold amount-size red--text">53</span>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from "../Card";

export default {
  name: "Status",
  components: {Card},
  props: {
    height: Number,
    width: Number
  },
}

</script>

<style scoped>

.line {
  width: 100%;
  height: 1px;
  background: #dddddd;
}

.wrap-status {
  height: 37vh;
  padding: 20px;
}

.amount-size {
  font-size: 25px;
}

@media screen and (max-height: 740px ) {
  .wrap-status {
    word-break: normal;
    height: max-content;
  }

  .status {
    flex-direction: row !important;
  }

  .line {
    height: 70%;
    width: 1px;
    margin: 20px;
  }

  .wrap-status div {
    margin: 10px;
  }

  .bl {
    margin-top: 10px !important;
    margin-bottom: 0 !important;
  }

  .bl span {
    margin: 0 !important;
  }
}

</style>