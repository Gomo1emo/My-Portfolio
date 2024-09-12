<template>
    <div class="conte">
       
      <v-card
        elevation="0"
        rounded="0"
        width="100%"
        class="bg-grey text-center"
      >
        <v-card-text>
          <v-btn
            class="mx-4"
            icon="fas fa-comment"
            variant="plain"
            color="white"
          ></v-btn>
          <v-btn
            class="mx-4"
            icon="fas fa-university"
            variant="plain"
            color="white"
          ></v-btn>
          <v-btn
            class="mx-4"
            icon="fas fa-wifi"
            variant="plain"
            color="white"
          ></v-btn>
          <v-btn
            class="mx-4"
            icon="fas fa-podcast"
            variant="plain"
            color="white"
          ></v-btn>
        </v-card-text>

        <v-card-text class="text-white">
          @ {{ new Date().getFullYear() }} —
          <strong>AAE IdeaPro All Rights Reserved</strong>
        </v-card-text>
      </v-card>
    
    </div>
    
    
    </template>
    
    <script>
    export default {
        name:'ContactPage',
    };
    </script>
    
    <style>
    .conte {
        background-image: url('https://res.cloudinary.com/dmdnmg8zs/image/upload/v1726146411/wallpaperflare.com_wallpaper_oadyzp.jpg');
        background-position: center;
        background-size: cover;
        height: 100vh;
        overflow: hidden;
        margin: 0;
  border: 0;
    }
    </style>