<template>
  <v-app >
    <v-main >
      <fheader/>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import fheader from './components/common/fheader';

export default {
  name: "App",
  components:{
    fheader, 
  },
};
</script>

<style lang="scss" scoped>
@import "./scss/global/_color.scss";
* {
 
  padding-left:50px;
  padding-right: 50px;
  background-color: $Back-color;
}
</style>
