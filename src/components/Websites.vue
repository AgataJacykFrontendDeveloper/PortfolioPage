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
          fill="#FFF9E2"
        />
        <path
          d="M0.00,50.10 C150.00,150.33 349.20,-50.10 500.00,50.10 L500.00,150.33 L0.00,150.33 Z"
          style="fill: #f6eece"
        ></path>
      </svg>
    </div>
    <div class="text">
      <h2>websites</h2>
      <p>Hover your mouse over the project you are interested in for more information</p>
      <br>

      <div class="parent">
        <div class="div1">
          <a href="https://github.com/AgataJacyk/bedzie5_theme"
            > <div class="project_box">
            <img class="project_image" src="/projects/bedzie5.gif" alt="My old page"
          />
          <div class="overlay">
    <div class="text_info"><p>Bedzie5</p>
      Wordpress Custom Template,<br>
      PHP, JavaScript, HTML, CSS,<br>
      Web Design, Graphic Design,
    </div>
  </div></div></a>
        </div>


        <div class="div2">
          <a href="https://nutriwiki.pl/"
            > <div class="project_box">
            <img class="project_image" src="/projects/nutri.gif" alt="My old page"
          />
          <div class="overlay">
    <div class="text_info"><p>Nutriwiki</p>
      Wordpress Custom Template,<br>
      PHP, JavaScript, HTML, CSS,<br>
      Newsletter, 404 Page, Subscription access,<br>
      Web Design, Graphic Design,</div>
  </div></div></a>
        </div>

        <div class="div3">
          <a href="https://github.com/Olkens/pokeProjekt"
            > <div class="project_box">
            <img class="project_image" src="/projects/pokeAPI.gif" alt="My old page"
          />
          <div class="overlay">
    <div class="text_info"><p>Pokemon Browser</p>
      Vue.js, HTML, SCSS,<br>
    Routing, Connection to API,<br>
  Responsive, Web Design, </div>
  </div></div></a>
        </div>


        <div class="div4">          
          <a href="https://super-mario-pizza.netlify.app/"
            > <div class="project_box">
            <img class="project_image" src="/projects/mariopizza.gif" alt="My old page"
          />
          <div class="overlay">
    <div class="text_info"><p>Mario themed Pizza</p>
      Vue.js, HTML, CSS,<br>
      Routing, Light/Dark Mode,<br>
      Web Design, Custom Graphic made by Me, 
    </div>
  </div></div></a>
          </div>


        <div class="div5">
          <a href="https://agatajacyk.github.io/DiceGame/dicee.html"
            > <div class="project_box">
            <img class="project_image" src="/projects/dicegame.gif" alt="My old page"
          />
          <div class="overlay">
    <div class="text_info"><p>Easy Dice Game with Responsive Sprinkles</p>
      HTML, CSS, JavaScript<br>
    Custom Graphic made by Me</div>
  </div></div></a>
        </div>


        <div class="div6">
          <a href="https://agatajacyk.github.io/monsterSlayer/">
            <div class="project_box">
            <img class="project_image" src="/projects/monsterSlayer.gif" alt="My old page"
          />
          <div class="overlay">
    <div class="text_info"> <p>Monster Slayer Game</p>
      Vue.js, HTML, CSS, JavaScript<br>
      Web Design
    </div>
  </div></div></a>
        </div>

      </div>
      <deafult-button
        ><router-link to="/Websites"
          >Click for more</router-link
        ></deafult-button
      >
    </div>
    <img class="border" src="/cream.png" />
  </div>
</template>

<script>
import DeafultButton from "../UI/buttons.vue";

export default {
  components: {
    DeafultButton,
  },
};
</script>

<style lang="scss" scoped>
a {
  font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (2865 - 300)));
  line-height: 0;
  padding-top: 0.5rem;
  color: #f6eece;
}

a:hover { 
  background-color: transparent;
}
.border {
  margin: 0 auto 0;
  width: 100%;
  height: auto;
}
.container,
.wave {
  width: 100%;
}
.container {
  margin: 3% 0 -20%;
  z-index: 4;
}
.parent > div > a {
  width: 80%;
  height: 80%;
  margin: 0 auto 0 ;
  padding: 0;
}


.project_box {
  border: solid 0.3em #fb7baa;
  position: relative;
  height: fit-content;
  width: fit-content;
  object-fit: cover;
}

img {
  display: block;
  height: 180px;
  width: 360px;
  object-fit: cover;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color:  #fdcce0;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
}

.project_box:hover .overlay {
  height: 100%;
}

.text_info {
  color: #fb7baa;
  font-size: 20px;
  position: absolute;
  line-height: 1.5rem;
  top: 10%;
  left: 5%;
  right: 5%;
}

.text_info p {
  margin: auto;
}
.text {
  background-color: #f6eece;
  margin-top: -5rem;
  padding-bottom: 4rem;
}
.wave {
  height: 200px;
  margin: 0;
}

@media (max-width: 1800px) {
  .parent {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 1 / 3 / 2 / 4; }
.div4 { grid-area: 2 / 1 / 3 / 2; }
.div5 { grid-area: 2 / 2 / 3 / 3; }
.div6 { grid-area: 2 / 3 / 3 / 4; }
}

@media (max-width: 1550px) {
  .container {
    padding-bottom: 30%;
    margin-bottom: -65%;
  }
  .parent > div > a {
  width: fit-content;
  height: fit-content;
  margin: 10px  0;
  }
}

@media (max-width: 1230px ) {
  
  .parent { 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
  
  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .div2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .div3 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .div4 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .div5 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .div6 {
    grid-area: 3 / 2 / 4 / 3;
  }
  .div7 {
    grid-area: 4 / 1 / 5 / 2;
  }
  .div8 {
    grid-area: 4 / 2 / 5 / 3;
  }
}


@media (max-width: 950px) {
  .parent { 
    display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(5, 1fr);
justify-items: center;
  }
  .div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 2 / 1 / 3 / 2; }
.div3 { grid-area: 2 / 1 / 3 / 2; }
.div4 { grid-area: 3 / 1 / 4 / 2; }
.div5 { grid-area: 4 / 1 / 5 / 2; }
.div6 { grid-area: 5 / 1 / 6 / 2; }
.div7 { grid-area: 6 / 1 / 7 / 2; }
.div8 { grid-area: 7 / 1 / 8 / 2; }
.div9 { grid-area: 8 / 1 / 9 / 2; }
}

@media (max-width: 700px) {

  img {
  width: 300px;
  height: 140px;
}
}
</style>
