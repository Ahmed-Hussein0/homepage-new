<template >
  <div >
   
    <v-toolbar flat app  prominent >
      
     <!-- desktob show -->
      <v-toolbar-title >
        <v-img  src="@/assets/images/logo.svg"></v-img>
      </v-toolbar-title>
      

      <v-spacer></v-spacer>
    

    <v-toolbar-items class="pt-16 hidden-xs-only" >
         <div  v-for="item in items"
          :key="item" >
        
            
              <router-link class="router-link-active router-link-exact-active" :to=item.routt>
                <v-btn text  color="grey">
                  {{ item.title }} 
                </v-btn>
              </router-link> 
              

           
            </div>
      </v-toolbar-items>
      <!-- desktob show -->

      <!-- mobile show -->
      <div class="hidden-sm-and-up p">
        <v-menu
      transition="slide-x-transition"
    >
      <template v-slot:activator="{ on }">
        <v-img
          color="primary"
          v-on="on"
          :src="drawer"
          
        >
        </v-img>
      </template>

      <v-list>
        <v-list-item
        v-for="item in items"
          :key="item"
        >
        <router-link class="router-link-active router-link-exact-active" :to=item.routt>
                <v-btn text  color="grey">
                  {{ item.title }} 
                </v-btn>
              </router-link> 
        </v-list-item>
      </v-list>
    </v-menu>

      </div>

     
      <!-- mobile show -->

    </v-toolbar>
  
  </div>
</template>
 
  
  <script>
  export default {
    data: () => ({
      drawer: require("@/assets/images/icon-menu.svg"),
      items: [
        { id: 1, title: "Home",routt:"/" },
        { id: 2, title: "New",routt:"/New"},
        { id: 3, title: "Popular" ,routt:"/Popular"},
        { id: 4, title: "Trending" ,routt:"/Trending"},
        { id: 4, title: "Category",routt:"/Category" },
      
      ],
    }),
  }
</script>

<style lang="scss"  >
@import "@/scss/global/_color.scss";
.p{
  padding-top: 80px;
}
.v-btn__content:hover {
   color:$Soft-red;

    }
</style>

  