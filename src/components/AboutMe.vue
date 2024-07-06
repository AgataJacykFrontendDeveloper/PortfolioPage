<template>
  <div class="container">
    <div class="wave">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          transform="translate(0, -10)"
          d="M000,50.10 C100.00,100.33 569.20,-50.10 500.00,50.10 L500.00,100.33 L0.00,100.33 Z"
          fill="#E2FAFE"
        />
        <path
          d="M0.00,50.10 C150.00,150.33 349.20,-50.10 500.00,50.10 L500.00,150.33 L0.00,150.33 Z"
          style="fill: #beeff8"
        ></path>
      </svg>
    </div>
    <div class="text">
      <h2>About Me</h2>
      <p>I am a computer science student with a front-end specialization with three years of experience in designing and creating websites. I have several commercial projects on my account, including WordPress-based projects and those created completely from scratch, with a full design and in accordance with the client's requirements. My skills include landing page development as well as front-end development in JavaScript using Vue and other tools. You can also find ambitious projects on my resume, such as an app using the Pokemon API that uses data to see which Pokemon will win a fight. As a creative developer, I am ready to solve your problems and create a unique website for you that will meet your requirements.</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
h2, 
p { 
padding-left: 0;
}

p {
  color: #06adcc;
  width: 80%;
}
.container,
.wave {
  margin: 0;
  width: 100%;
}
.container {
  z-index: 3;
}


.text {
  background-color: #beeff8;
  padding: 2rem 0 15rem 0;
  margin-bottom: -10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wave {
  height: 200px;
  overflow: hidden;
}

@media (max-width: 1400px) {
.text{
  padding: 2rem 0 15rem 0;
  margin-bottom: -13%;
}
}
@media (max-width: 950px) {
.text{
  margin-bottom: -20%;
}

}
</style>
