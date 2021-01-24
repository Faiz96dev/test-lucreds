<template>
  <div class="">
    <div :class="{'expanded' : active}" v-if="active" class="bar">
      <div>
        <v-icon class="ma-3" @click="active = false" style="cursor: pointer">fas fa-arrow-up</v-icon>

      </div>
      <div class="d-flex ">
        <div class="info-item">
          <p>NEW REQUEST</p>
          <p>5</p>
        </div>
        <div class="info-item">
          <p>PROCESSING</p>
          <p>5</p>
        </div>
        <div class="info-item">
          <p>RATING</p>
          <p>4.9</p>
        </div>
        <div class="info-item">
          <p>PLAN</p>
          <p>Premium</p>
        </div>
      </div>
      <div>
        <v-switch
    ></v-switch>

      </div>

    </div>
    <div v-if="!active" class="bar">
      <v-icon @click="active = true" class="ma-3" style="cursor: pointer">fas fa-arrow-down</v-icon>
    </div>

  </div>
</template>

<script>
export default {
  name: "WhiteBar",
    data () {
      return {
        active: false,
    switch: false
      }
    },
}
</script>

<style scoped>
p{
  margin: 0;
}
.expanded {
  height: 70px !important;
}
.info-item{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  text-align: center;
  width: max-content;
}
.bar {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  height: 30px;
  background-color: whitesmoke;
  transition: 0.5s;
  width: 100%;
  -webkit-box-shadow: 0px 7px 28px 1px rgba(0, 0, 0, 0.69);
  box-shadow: 0px 7px 28px 1px rgba(0, 0, 0, 0.69);
}

</style>