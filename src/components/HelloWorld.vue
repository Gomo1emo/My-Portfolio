<template>

<nav class="navbar navbar-expand-lg navbar-dark bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Khotso.G Tshabalala</a>
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleNavbar"
        :class="{ collapsed: !isNavbarOpen }"
        aria-controls="navbarNav"
        aria-expanded="isNavbarOpen"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        :class="{ show: isNavbarOpen }"
        id="navbarNav"
      >
        <ul class="navbar-nav ms-auto links">
          <li class="nav-item">
            <a class="nav-link active" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/about">About me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/projects">Projects</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link active" href="/contact">Contact me</a>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HelloWorld'
 
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.navbar {
  background-color: transparent !important;
  position: absolute;
  
}



</style>
