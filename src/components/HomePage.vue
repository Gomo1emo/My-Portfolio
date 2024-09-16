<template>
  <div class="background">
    <div>
      <!-- Header Section -->
      <header class=" py-5 ">
      
        <div class="container1 col-6">
          <h3>Hello there,</h3>
          <h1>I'm Khotso.G Tshabalala...</h1>
          <h3>Full-Stack Software</h3>
          <h3>Developer</h3>
          <a href="#contact" class="btn btn-light btn-lg mt-3">Contact Me</a> 
          <br>
          <br>
          <br>
          <br>
          <div class="social-links">
                  <a
                    href="https://www.linkedin.com/in/gomolemo-tshabalala-b6326712b"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn me-2 text-white"
                    aria-label="LinkedIn"
                    style="font-size: medium;"
                  >
                    <img
                      style="max-width: 3rem; height: 3rem; align-self: center"
                      src="../assets/linkedin.1024x1024.png"
                      alt="LinkedIn"
                    /> <p>LinkedIn</p>
                  </a>
                  <a
                    href="https://github.com/Gomo1emo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn me-2 text-white"
                    aria-label="GitHub"
                    style="font-size: medium;"
                  >
                    <img
                      style="
                        max-width: 3rem;
                        height: 3rem;
                        align-self: center;
                        background-color: ghostwhite;
                        border: 2px solid white;
                        border-radius: 5px;
                      "
                      src="../assets/github-original-wordmark.1024x1017.png"
                      alt=""
                    />
                    <p>GitHub</p>
                  </a>
                </div>
        </div>
        <!-- <div class="dev col-6">
          <img src="../assets/1709674937953.gif" alt="">
        </div> -->
        
        
        <!-- <div class="pic">
        <img class="hero" src="https://res.cloudinary.com/dmdnmg8zs/image/upload/v1726197596/about-brightcode-software-services_rv31wy.webp" alt="">
      </div> -->
      </header> <hr>

      <!-- About Me Section -->
      <section id="about" class="py-5 bg-custom text-white">
        <div class="container text-center">
          <h2>About Me</h2>
          <p class="lead mt-3">
            I am a passionate full-stack software developer with a strong
            foundation in modern web development technologies. I love building
            dynamic, scalable, and user-friendly web applications that solve
            real-world problems.
          </p>
        </div>
      </section> <hr>

      <!-- Skills Section -->
      <section id="skills" class="py-5 bg-custom ">
        <div class="container  text-white text-center">
          <h2>Skills</h2>
          <div class="row mt-4">
            <div class="col-md-4">
              <i class="fas fa-code fa-3x text-primary"></i>
              <h4 class="mt-2">Front-End Development</h4>
              <p>
                Proficient in HTML, CSS, JavaScript, Vue.js, Angular, and
                responsive design.
              </p>
              <ul class="ico">
                <li><i class="fab fa-html5 fa-2x text-danger"></i></li>
                <li><i class="fab fa-css3-alt fa-2x text-primary"></i></li>
                <li><i class="fab fa-js-square fa-2x text-warning"></i></li>
                <li><i class="fab fa-vuejs fa-2x text-success"></i></li>
                <li><i class="fab fa-angular fa-2x text-danger"></i></li>
              </ul>
            </div>

            <div class="col-md-4">
              <i class="fas fa-server fa-3x text-primary"></i>
              <h4 class="mt-2">Back-End Development</h4>
              <p>Experienced in building REST APIs with Java, Spring Boot.</p>
              <ul class="ico">
                <li>
                  <img
                    style="max-width: 5rem; height: 5rem; align-self: center"
                    src="../assets/java.756x1024.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    style="
                      max-width: 4.5rem;
                      height: 4.5rem;
                      align-self: center;
                    "
                    src="../assets/spring.1024x1023.png"
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <i class="fas fa-cloud fa-3x text-primary"></i>
              <h4 class="mt-2">Database Management</h4>
              <p>
                A database management professional skilled in PostgreSQL,
                DBeaver, Postman, and SQL manages and optimizes databases,
                writes and executes queries, and tests API interactions.
              </p>
              <ul class="ico">
                <li>
                  <img
                    src="../assets/postgresql-plain-wordmark.1024x1021.png"
                    alt="PostgreSQL"
                    style="width: 5rem; height: 5rem"
                  />
                </li>
                <li>
                  <img
                    src="../assets/dbeaver.1024x1014.png"
                    alt="DBeaver"
                    style="max-width: 5rem; height: 5rem; align-self: center"
                  />
                </li>
                <li><i class="fas fa-database fa-2x text-primary"></i></li>
                <li><img style="max-width: 14rem; height: 7rem; align-self: center" src="../assets/postman.webp" alt=""></li>
              </ul>
            </div>
          </div>
        </div>
      </section> <hr>

      <!-- Projects Section -->
      <section id="projects" class="py-5 bg-custom ">
        <div class="container text-center">
          <h2 style="color: antiquewhite">Projects</h2>
          <div class="row mt-4">
            <div class="col-md-6">
              <div class="card">
                <img
                  src="https://res.cloudinary.com/dmdnmg8zs/image/upload/v1726212049/Screenshot_2024-09-13_at_09.19.57_vmohmy.png"
                  class="card-img-top pr"
                  alt="Project 1"
                />
                <div class="card-body text-white bg-dark">
                  <h5 class="card-title">Process Pulse</h5>
                  <p class="card-text">
                    A full-stack web application similar to a bug bounty
                    platform but mostly focuses on the optimization of business
                    processes. <br />
                    Built with Angular, Spring Boot and PostgreSQL.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <img
                  src="https://via.placeholder.com/200"
                  class="card-img-top pr"
                  alt="Project 2"
                />
                <div class="card-body text-white bg-dark">
                  <h5 class="card-title">Project 2</h5>
                  <p class="card-text">
                    E-commerce platform with payment integration. <br />
                    Built using Angular and Springboot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> <hr>

      <!-- Contact Section -->
      <section id="contact" class="py-5 bg-custom text-white">
        <h2 class="my-4">Contact Me</h2>
        <div class="contain">
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="name" class="form-label">Name:</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="John Doe"
                v-model="form.name"
                required
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="john.doe@example.com"
                v-model="form.email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message:</label>
              <textarea
                class="form-control"
                id="message"
                rows="4"
                v-model="form.message"
                placeholder="Message..."
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send:</button>
          </form>
          <p class="lead mt-3">
            I'd love to hear from you! Whether you have a project in mind or
            just want to collaborate, feel free to reach out.
          </p>
        </div>

        <!-- <div class="container text-center">
        <h2>Contact Me</h2>
        
        
        <a href="mailto:gomolemoktshabalala@gmail.com" class="btn btn-primary btn-lg">Email Me</a>
      </div> -->
      </section>

      <!-- Footer -->
      <footer class="bg-dark text-white text-center py-2">
        <div class="container">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <p class="mb-0">Let's connect:</p>
                <div class="social-links">
                  <a
                    href="https://www.linkedin.com/in/gomolemo-tshabalala-b6326712b"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn me-2"
                    aria-label="LinkedIn"
                  >
                    <img
                      style="max-width: 3rem; height: 3rem; align-self: center"
                      src="../assets/linkedin.1024x1024.png"
                      alt="LinkedIn"
                    />
                  </a>
                  <a
                    href="https://github.com/Gomo1emo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn me-2"
                    aria-label="GitHub"
                  >
                    <img
                      style="
                        max-width: 3rem;
                        height: 3rem;
                        align-self: center;
                        background-color: ghostwhite;
                        border: 2px solid white;
                        border-radius: 5px;
                      "
                      src="../assets/github-original-wordmark.1024x1017.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p>© 2024 Khotso.G Tshabalala. All Rights Reserved.</p>
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
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      fetch("https://formspree.io/f/xvgpnrwg", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.form),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          alert("Form submitted successfully!");
          this.form.name = "";
          this.form.email = "";
          this.form.message = "";
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("There was an error submitting the form.");
        });
    },
  },
};
</script>

<style>
.background {
  /* height: 100vh; */
  margin: 0;
  border: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
}



header {
  /* background-image: url("../assets/stream-binary-code-design_53876-118375.jpg");*/
  background-image: url("https://res.cloudinary.com/dmdnmg8zs/image/upload/v1726151212/software-development-costs-1128x635_bpjqp9.jpg"); 
  background-size: contain;
  background-position: center;
  /* background-color: rgb(50, 6, 50) ; */
  height: 100vh;
  width: 100vw;
  
  /* background-color: black; */
}

footer {
  position: relative;
  bottom: 0;
  width: 100%;
}

.container1 {
  /* margin-right: 45%;
  margin-left: 2%; */
  
  padding-right: 1%;
  margin-top: 10%;
  text-align: center;
  font-family: 'Anonymous Pro', monospace;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;

  h3 {
    font-size: 2rem;
    color: ghostwhite;
  }

  h1 {
    font-size: 2.7rem;
    border-right: 2px solid hsl(0, 99%, 60%);
    animation: typewriter 7s steps(50) infinite alternate-reverse , blinkTextCursor 500ms infinite;
    white-space: nowrap;
    overflow: hidden;
    margin-left: 2%;
    color: orange;
  }
  
}
@keyframes typewriter {
    from { width: 0;
  }
  to {
    width: 655px;
  }
}

@keyframes blinkTextCursor {
  from {
    border-right-color: hsl(0, 99%, 60%);
    
  }
  to {
    border-right-color: transparent;
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
    max-width: 500px;
    margin: 0 auto;
  }

  textarea {
    max-width: 500px;
    margin: 0 auto;
  }
}

.card img {
  height: 25rem;
  margin: 0 auto;
}

.card {
  height: 33rem;
}

.ico {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}

.ico li {
  flex: 1 0 33%;
  /* Three items per row */
  text-align: center;
  padding: 10px;
  font-size: 2.5rem;
}


.dev {
  /* margin-top: 25%; */
  position: absolute;
  right: 0;
  top: 30%;
  width: 50%;
  margin: 0;



  img {
  max-width: 25rem;
  max-height: 30rem;
  border-radius: 10%;
  
  }
  
}
 .bg-custom {
  background-color: rgb(50, 6, 50) ;
  border-bottom: 2px solid black;
 }

 hr {

  margin: 0;
  width: 100%;
  
 }
 .social-linksa {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;

 }
 btn-custom {
  background-color: rgb(50, 6, 50) ;
 }
</style>
