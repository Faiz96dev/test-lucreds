<template>
  <div>
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

    <div @click="isOnline = !isOnline" class="status-toggle"><p>Status: <span class="status" :class="{'online' : isOnline }" >{{ getStatus }}</span>
    </p></div>


     <div  style="right: 23%;" class="status-toggle"><p>Last scan:<span>{{ new Date() | moment("MMM Do YY") }}</span></p></div>

  </div>
</template>

<script>
export default {
  name: "WhiteBar",
  computed: {
    getStatus() {
      if (this.isOnline) return 'ONLINE'
      return 'OFFLINE'
    },
    getDate(){
      return Date.now()
    }
  },
  data() {
    return {
      active: false,
      switch: false,
      isOnline: false

    }
  },
}
</script>

<style scoped>
p {
  margin: 0;
}

.status{
  color:red
}
.online{
  color:green!important;
}

.expanded {
  height: 70px !important;
}

.status-toggle{
  cursor: pointer;
  width: 170px  ;
  border-radius: 5px;
  text-align: center;
  border: 1px solid grey;
  border-top: none;
  right: 10%;
  position: absolute;
}

.info-item {
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
  -webkit-box-shadow: 0px 3px 20px 1px rgba(0, 0, 0, 0.69);
  box-shadow: 0px 3px 20px 1px rgba(0, 0, 0, 0.69);
}

</style>