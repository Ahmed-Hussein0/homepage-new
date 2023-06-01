<template>
  <div class=" pt-10 ">
  
      <v-layout row wrap >

          <v-flex xs12 md8>

            <v-layout column wrap >
                        <v-flex xs12 md12  >
                          <v-img class="mr-10  ml-7" v-resize="onResize" :src="src"></v-img>
                        </v-flex>
                
                       <v-row>
                          <v-flex >
                            <h1 class="display-2 font-weight-black mt-9 ml-10">The Bright Future of Web 3.0?</h1>
                          </v-flex>

                        <v-col class="mr-8" >
                          <p class="mt-6">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                          <v-btn title x-large width="200"  color="error--text" depressed class="mt-5 main mb-10" >READ MORE</v-btn>
                        </v-col>
                  </v-row>
            </v-layout>
          
          </v-flex>
          
          <v-flex xs12 md4 >
                <!-- card -->
              
                <template>
                  <v-card    color="black" >
                  
                      <v-card-title  class="p--text pt-10"><h1>New</h1></v-card-title>


                        <div v-for="item in items" :key="item" >
                        
                          <v-card-subtitle class="pt-5 font-weight-bold heading-3" >
                            <h2 class="sub">{{ item.title }}</h2>
                          </v-card-subtitle>

                          <v-card-text>
                            <div class="subtext subtitle-1 pb-6"  >{{ item.subtitle }}</div>
                          </v-card-text>

                          <v-divider class="mx-4  grey"></v-divider>

                        </div>

                  </v-card>
                </template>
                <!-- card -->

            

          </v-flex>
      </v-layout>

      <!-- footer -->
       <v-row  class="pl-9 pt-16" >
              <div class="pr-4" v-for="item in cards" :key="item" >
                   <v-card max-width="320" flat >
                       <div class="pt-16 pb-16">
                          <v-row>
                               <div>
                                  <v-img  max-width="100" :src="item.img"> </v-img>
                                </div>
                                <v-col class="ml-1">
                                  <div class="font-weight-black display-1 idfootercard">{{ item.id }}</div>
                                  <div class="font-weight-bold pt-2  pb-2 footertitle">
                                   {{item.title}}
                                  </div>
                                  <span class="footersubtitle" >{{item.subtitle}}</span>
                                  </v-col>
                          </v-row>
                        </div>
                   </v-card>
                </div>
         </v-row>
       <!-- footer -->


  </div>
</template>
    
    
    <script>
    export default {
      data: () => ({
        srcfooter:require("../assets/images/image-retro-pcs.jpg"),
      src:"",
      items: [
        { title: "Hydrogen VS Electric Cars", subtitle: "Will hydrogen-fueled cars ever catch up to EVs?" },
        { title: "The Downsides of AI Artistry", subtitle: "What are the possible adverse effects of on-demand AI image generation?" },
        { title: "Is VC Funding Drying Up?", subtitle: "Private funding by VC firms is down 50% YOY. We take a look at what that means." },
      ],
      cards: [
        {id:"01", title: "Reviving Retro PCs", subtitle: "What happens when old PCs are given modern upgrades?",img:require("../assets/images/image-retro-pcs.jpg"), },
        { id:"02" ,title: "Top 10 Laptops of 2022", subtitle: "Our best picks for various needs and budgets.",img:require("../assets/images/image-top-laptops.jpg"), },
        { id:"03", title: "The Growth of Gaming", subtitle: "How the pandemic has sparked fresh opportunities.",img:require("../assets/images/image-gaming-growth.jpg"), },
       
      
      ],
         
      }),
  
      methods: {
        onResize () {
         const n=this. x= window.innerWidth;
         if(n<=1115)
        {
            this.src=require("../assets/images/image-web-3-mobile.jpg")
        }
        else{
            this.src=require("../assets/images/image-web-3-desktop.jpg")
        }
        },
        
      },
    }
  </script>

  <style lang="scss" >
@import "../scss/global/_color.scss";

.footersubtitle{
  color:$Dark-grayish-blue;
}
.footertitle{
&:hover{
  color: $Soft-red;

}
}
.idfootercard{
  margin-top: -10px;
  color: $Grayish-blue;
}
.sp{
  width: 200px;
}
.v-btn.main:hover{
  background-color: $Very-dark-blue;
}


  .p--text{
    color: $Soft-orange;
  }
  .sub{
    color:$Off-white;
    &:hover{
      color: $Soft-orange;
    }
  }
  .subtext{
      color:$Grayish-blue;
    }
    
  h1{
   
    
    width: 230px;
   

  }
  p{
    width: 350px;
   
  }
    
    </style>