<template>
    <div>
  <Card class="wrap-status">
      <span>Status</span>
      <div class="mb-8 mt-5 d-flex flex-column">
          <span class="grey--text">Your score</span>
          <span class="font-weight-bold amount-size">450</span>
      </div>
      <div class="line"></div>
      <div class="d-flex flex-column mt-5">
          <span class="grey--text">Profile views this week</span>
          <span class="mt-5 font-weight-bold amount-size red--text">53</span>
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
            width:Number
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
        height: 40vh;
      padding: 20px;
    }
    .amount-size {
        font-size: 25px;
    }


</style>
