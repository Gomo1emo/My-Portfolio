<template>
  <div class="background">
    <div class="content">
        <div style="position: relative" class="mt-16">
              <h1 >Hello,</h1>
              <h1 class="text-white">I'm Khotso.G Tshabalala</h1>
              <h3>Full-stack Developer</h3><br />

              
            </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
.background {
  background-image: url("https://res.cloudinary.com/dmdnmg8zs/image/upload/v1726141030/1209998-3840x2160-desktop-4k-glow-in-the-dark-background-photo_xuawlc.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin: 0;
  border: 0;
  overflow: hidden;
}

.content {
  margin-top: 5%;
}
.mt-16 {
    margin-right: 65%;
    margin-top: 10%;
}
h1, h3 {
    color: pink;
}
</style>
