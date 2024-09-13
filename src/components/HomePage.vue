<template>
  <div class="background">
    <div>
    <!-- Header Section -->
    <header class="bg-primary text-white py-5">
      <div class="container1">
        <h3>Hello there,</h3>
        <h1>I'm Khotso Tshabalala</h1>
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
    <section id="projects" class="py-5 bg-dark">
      <div class="container text-center">
        <h2 style="color: antiquewhite;">Projects</h2>
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="card">
              <img src="https://res-console.cloudinary.com/dmdnmg8zs/thumbnails/v1/image/upload/v1726212049/U2NyZWVuc2hvdF8yMDI0LTA5LTEzX2F0XzA5LjE5LjU3X3Ztb2hteQ==/template_primary/Y19jcm9wLHdfMjIwMCxoXzE4MDA=" class="card-img-top pr" alt="Project 1">
              <div class="card-body">
                <h5 class="card-title">Process Pulse</h5>
                <p class="card-text">A full-stack web application similar to a bug bounty platform but mostly focuses on the optimization of business processes. <br> Built with Angular and Spring Boot.</p>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="card">
              <img src="https://via.placeholder.com/200" class="card-img-top pr" alt="Project 2">
              <div class="card-body">
                <h5 class="card-title">Project 2</h5>
                <p class="card-text">E-commerce platform with payment integration. <br> Built using Angular and Springboot.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-5">
      <h2 class="my-4">Contact Me</h2>
      <div class="contain">
    
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Name:</label>
        <input type="text" class="form-control" id="name" placeholder="John Doe" v-model="form.name" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address:</label>
        <input type="email" class="form-control" id="email" placeholder="john.doe@example.com" v-model="form.email" required>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message:</label>
        <textarea class="form-control" id="message" rows="4" v-model="form.message" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send:</button>
    </form>
    <p class="lead mt-3">I'd love to hear from you! Whether you have a project in mind or just want to collaborate, feel free to reach out.</p>
  </div>
  
      <!-- <div class="container text-center">
        <h2>Contact Me</h2>
        
        
        <a href="mailto:gomolemoktshabalala@gmail.com" class="btn btn-primary btn-lg">Email Me</a>
      </div> -->
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3">
      <div class="container">
        <div class="container">
      <div class="row">
        <div class="col-12">
          <p class="mb-0">Let's connect:</p>
          <div class="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline-light me-2"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline-light me-2"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline-light me-2"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline-light me-2"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline-light me-2"
              aria-label="GitHub"
            >
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
        <p>© 2024 Khotso Tshabalala. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    handleSubmit() {
  fetch('https://formspree.io/f/xvgpnrwg', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(this.form)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Form submitted successfully!');
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
    });
}

  }
};
</script>

<style>
.background {
 
  /* height: 100vh; */
  margin: 0;
  border: 0;
  padding: 0;
  overflow: hidden;
}

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

.container1 {
  margin-right: 55%;
  margin-top: 6%;
  text-align: center;

  h3 {
    font-size: 3rem;
  }

  h1{
    font-size: 4.2rem;
  }
}
.me-2 {
  font-size: 30px;
}
.pr {
  max-width: 600px;
  max-height: 800px;
}

.contain {
  /* max-width: 600px; */
  
  min-width: 350px;
  margin: 0 auto;
  font-weight: 500;
  input {
    max-width: 650px;
    margin: 0 auto;
  };
  textarea {
    max-width: 650px;
    margin: 0 auto;
  };
}
.card img {
  height: 30rem;
  margin: 0 auto;
}
</style>
