<template>
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-img 
      
        src="../assets/images/logo-desktop-ftontend.svg"
        
        cover
      ></v-img>
  
      <v-card-title>
        Made by Ahmed Hussein -New
      </v-card-title>
  
      <v-card-subtitle>
        Frontend Mentor challenger
      </v-card-subtitle>
  
      <v-card-actions>
       
     <a :href="mypage" target="_blank">
      <v-btn
          color="orange-lighten-2"
          variant="text"  >
          Explore
        </v-btn>
      </a>
        
  
        <v-spacer></v-spacer>
  
        <v-btn 
       
          @click="show = !show"
        >Show</v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            Used  Vue.js Vuetify to doing this challenge and it was very interesting and vuetify is vere big and can do any project.
 you can reuse this template  
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    </template>
    <script>
    import {ref } from 'vue';
   
  export default {
    data: () => ({
     mypage:ref("https://www.frontendmentor.io/profile/engahmedhusseinn"),
      show: false,
    }),
  }
</script>

