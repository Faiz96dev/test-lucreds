<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card",

  props: {
    height: Number,
    width:Number
  },
}

</script>

<style scoped>
.card {
  width: auto;
  height: 100%;
  padding: 10px;
  border: 1px solid #7499F5;
  border-radius: 10px;
  background: rgb(11, 175, 171);
  background: linear-gradient(0deg, rgba(11, 175, 171, 0) 90%, rgba(224, 232, 255, 1) 100%);
  -webkit-box-shadow: 0px 4px 7px 4px rgba(81, 81, 81, 0.67);
  box-shadow: 0px 4px 7px 4px rgba(81, 81, 81, 0.67);
}


</style>