<template>
  <div>
    <div class="list-item-wrapper">
      <div class="d-flex align-center">
        <div v-if="listObj.isActive" class="green-point"></div>
        <div  :class="{'ml-6' : !listObj.isActive}" class="description-block d-flex flex-column ">
          <p class="list-title">{{ listObj.title }}</p>
          <p>{{ listObj.description}}</p>
        </div>
      </div>
<!--      <div style="height: 100%" class="d-flex  ">-->
        <v-btn v-if="listObj.withAction" width="150" class="action-btn mr-5">Action</v-btn>
        <v-progress-linear
            v-if="listObj.progress"
      color="blue lighten-1 "
      rounded
      height="8"
      stream
      buffer-value="3"
      class="progress-line"
      value="77"
    ></v-progress-linear>
        <p class="list-date">{{ listObj.date }}</p>
<!--      </div>-->
    </div>
  <v-divider
      class=" mt-1"
    ></v-divider>
  </div>
</template>

<script>

export default {
  name: "ListItem",
  props:{
    listObj:{
      type:Object,
    },

  },

}
</script>

<style scoped>

p {
  font-size: 15px;
  padding-bottom: 0;
  margin-bottom: 0;
}
.progress-line{
  width: 40%;
}

.list-item-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-item-wrapper:hover{

}


.list-date {
  font-size: 10px;
  align-self: flex-end;
}

.action-btn {
  justify-self: end;
  border-radius: 30px;
  border: 1px solid #749CFD;
  font-weight: 300;
}

.list-title {
  font-weight: bold;
}

.green-point {
  height: 15px;
  width: 15px;
  margin-right: 10px;
  background-color: #70C675;
  border: 1px solid #57995c;
  border-radius: 100%;
}
</style>