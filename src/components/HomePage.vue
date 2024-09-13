<template>
  <div class="background">
    <div>
    <!-- Header Section -->
    <header class="bg-primary text-white py-5">
      <div class="container">
        <h3>Hello there,</h3>
        <h1>Khotso Tshabalala</h1>
        <h3 >Full-Stack Software</h3>
        <h3>Developer</h3>
        <a href="#contact" class="btn btn-light btn-lg mt-3">Contact Me</a>
      </div>
      <!-- <div class="pic">
        <img class="hero" src="https://res.cloudinary.com/dmdnmg8zs/image/upload/v1726197596/about-brightcode-software-services_rv31wy.webp" alt="">
      </div> -->
    </header>

    <!-- About Me Section -->
    <section id="about" class="py-5 bg-light">
      <div class="container text-center">
        <h2>About Me</h2>
        <p class="lead mt-3">
          I am a passionate full-stack software developer with a strong foundation
          in modern web development technologies. I love building dynamic, scalable, and user-friendly web applications that solve real-world problems.
        </p>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-5">
      <div class="container text-center">
        <h2>Skills</h2>
        <div class="row mt-4">
          <div class="col-md-4">
            <i class="fas fa-code fa-3x text-primary"></i>
            <h4 class="mt-2">Front-End Development</h4>
            <p>Proficient in HTML, CSS, JavaScript, Vue.js, Angular, and responsive design.</p>
          </div>
          <div class="col-md-4">
            <i class="fas fa-server fa-3x text-primary"></i>
            <h4 class="mt-2">Back-End Development</h4>
            <p>Experienced in building REST APIs with Java, Spring Boot, Node.js, and databases like MySQL and MongoDB.</p>
          </div>
          <div class="col-md-4">
            <i class="fas fa-cloud fa-3x text-primary"></i>
            <h4 class="mt-2">Cloud & DevOps</h4>
            <p>Knowledge in deploying applications to AWS, Cloudinary, Docker, and working with CI/CD pipelines.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-5 bg-light">
      <div class="container text-center">
        <h2>Projects</h2>
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="card">
              <img src="https://via.placeholder.com/400" class="card-img-top" alt="Project 1">
              <div class="card-body">
                <h5 class="card-title">Project 1</h5>
                <p class="card-text">A full-stack web application for managing tasks, built with Vue.js and Spring Boot.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <img src="https://via.placeholder.com/400" class="card-img-top" alt="Project 2">
              <div class="card-body">
                <h5 class="card-title">Project 2</h5>
                <p class="card-text">E-commerce platform with payment integration, built using Angular and Node.js.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-5">
      <div class="container text-center">
        <h2>Contact Me</h2>
        <p class="lead mt-3">I'd love to hear from you! Whether you have a project in mind or just want to chat, feel free to reach out.</p>
        <a href="mailto:khotso.tshabalala@example.com" class="btn btn-primary btn-lg">Email Me</a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3">
      <div class="container">
        <p>© 2024 Khotso Tshabalala. All Rights Reserved.</p>
      </div>
    </footer>
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
 
  /* height: 100vh; */
  margin: 0;
  border: 0;
  overflow: hidden;
}

/* .content {
  margin-top: 5%;
}
.mt-16 {
    margin-right: 65%;
    margin-top: 10%;
}
.h {
    color: rgb(41, 142, 214);
    text-align: center;
}
.b {
  color: blue; 
}*/
.hero {
  margin-left: 50%;
  margin-top: 7%;
  width: 30rem;
  height: 20rem;
  min-width: 380px;

}
header {
  background-image: url('https://res.cloudinary.com/dmdnmg8zs/image/upload/v1726151212/software-development-costs-1128x635_bpjqp9.jpg');
  background-size: contain;
  background-position: center;
  height: 100vh;
}

footer {
  position: relative;
  bottom: 0;
  width: 100%;
}
.container {
  margin-right: 10%;
  margin-top: 6%;
  text-align: center;
}
</style>
