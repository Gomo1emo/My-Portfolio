<template>
    <div class="conte">
       
      <v-card
        elevation="0"
        rounded="0"
        width="100%"
        class="bg-grey text-center"
      >

        <v-card-text class="text-white">
          @ {{ new Date().getFullYear() }} —
          <strong>Khotso.G Tshabalala All Rights Reserved</strong>
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