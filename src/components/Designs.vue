<template>
  <div class="container">
      <h2>designs</h2>
      <div class="parent">
        <div class="div1">
          <a href="https://www.figma.com/file/vLgSUxpqyHNop7ttdSCOhB/Projekt-NutrYa?type=design&node-id=338%3A193&mode=design&t=UMLvj6v1Vg7HfwmW-1"
            ><img class="project" src="/projects/nutri.gif"
          /></a>
        </div>
        <div class="div2">
          <a href="https://www.figma.com/file/WosSDOyYvSFDtDNvM6RSeg/Untitled?type=design&node-id=0%3A1&mode=design&t=Pqe5Ezl8Y1YxAIUR-1"
            ><img class="project" src="/projects/nutri-old.gif"
          /></a>
        </div>
        <div class="div3">
          <a href="https://www.figma.com/file/1qqeS4qyMFVk1vyrjTMBD0/Untitled?type=design&node-id=0%3A1&mode=design&t=u6z2tUMSa1xjrq7t-1"
            ><img class="project" src="/projects/wydawnictwo.gif"
          /></a>
        </div>
        <div class="div4">
          <a href="https://www.figma.com/file/RTqMsCbWO6YCV2qtjBjD14/Untitled?type=design&node-id=0%3A1&mode=design&t=c81ngT6jLdX2WNk7-1"
            ><img class="project" src="/projects/bedzie5.gif"
          /></a>
        </div>
        <div class="div5">
          <a href="https://www.canva.com/design/DAEnkuq_PB4/Uz0A2SWZfQSpfB6bYAAhTg/view"
            ><img class="project" src="/projects/savetheocean.gif"
          /></a>
        </div>
        <div class="div6">
          <a href="https://www.canva.com/design/DAEoZ3n40n0/cNZQuqPqZy89_niJ7I0ZjQ/view?website#4"
            ><img class="project" src="/projects/mountain.gif"
          /></a>
        </div>
        </div>
      <deafult-button><router-link to="/Designs">Click for more</router-link></deafult-button>
    </div>
</template>

<script>
import DeafultButton from '../UI/buttons.vue'

export default {
    components: {
    DeafultButton
    }
    };
</script>

<style lang="scss" scoped>
a {
  font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (2865 - 300)));
  line-height: 0;
  padding-top: 8px;
  color: #F6EECE;
}
.container {
  width: 100%;
  z-index: 2;
  background-color: #fdcce0;
  padding: 15% 0 15% 0;
  margin: 3% 0 -5%;
  background-image: url(/sprinkles.png);
  background-repeat: no-repeat;
  background-size: 30%;
  background-position: right center;
}
.parent > div > a {
  width: 80%;
  height: 80%;
  margin: 0 0 40px 0 ;
  padding: 0;

  &:hover {
    background-color: #fb7baa;
    border-radius: 60px;
    padding: 0;
    margin: 0;
  }
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
  .container{
    margin: 10% 0 -5%;
    padding-bottom: 30%;
    margin-bottom: -15%;
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

.project {
  width: 300px;
  height: 140px;
}
}
</style>
