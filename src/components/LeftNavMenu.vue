<template>
    <v-card>
      <v-navigation-drawer
        permanent
        width="55"
        style="height: 100%"
      >
        <v-list
        >
          <v-list-item link>
              <v-icon>mdi-folder</v-icon>
          </v-list-item>
          <v-list-item link>
              <v-icon>mdi-account-multiple</v-icon>
          </v-list-item>
          <v-list-item link>
              <v-icon>mdi-star</v-icon>
          </v-list-item>
        </v-list>

      </v-navigation-drawer>
    </v-card>
</template>

<script>
export default {
name: "LeftNavMenu"
}
</script>

<style scoped>

</style>