<template>
  <div class="main_content">
    <section class="head">
      <div class="cv_header">
        <div class="parent">
          <div class="div1"><img src="/cv-profile.png" /></div>
          <div class="div2">
            <h3>Agata Jacyk</h3>
            <p>Junior Frontend Developer</p>
            <p><i class="fa-solid fa-phone"></i> <a href="tel:+48661470335">661-470-335</a> </p>
            <p><i class="fa-solid fa-envelope"></i> <a href="mailto:agatajacyk.webdeveloper@gmail.com">agatajacyk.webdeveloper@gmail.com</a></p>
            <p><i class="fa-solid fa-user"></i> <a href="https://agatajacyk.netlify.app/">https://agatajacyk.netlify.app/</a></p>
            <p><i class="fa-brands fa-github"></i> <a href="https://github.com/AgataJacyk">https://github.com/AgataJacyk</a></p>
            <p>
              if you hire me, you will gain an employee with a passion for
              creating and crossing your own borders. An ambitious person who is
              committed to his work. Together, we can create projects that go
              beyond the usual patterns, we are only limited by our imagination.
            </p>
          </div>
        </div>
        <img class="cream" src="/cream.png" />
      </div>
    </section>
    <section class="cv-contents">
      <div class="small-box"> 
        <h4>Education</h4>
<p>21 / 03 / 2021 - present
WSB University in Gdansk - 
Informatics - Frontend Developer</p>
<p>15 / 08 / 2020 - 20 / 03 / 2021
Software Development Academy - Java from scratch <br>
Software design patterns - 14h, <br>
HTML, CSS,JavaScript - 14h,<br>
frontend technologies: Angular - 21h</p>
<b>Last Udemy courses:</b>
<p>Vue - The Complete Guide (incl. 
Router & Composition API) - 
Maximilian Schwarzmüller </p>
<p>JavaScript - The Complete Guide 
2023 (Beginner + Advanced) - 
Maximilian Schwarzmüller</p>
<p> The Complete 2021 Web 
Development Bootcamp - Dr. 
Angela Yu</p>

<h4>Languages</h4>
<ul>
  <li>Polish (native)</li>
  <li>English (B2) - versant professional 
english certificate - No. 92256118</li>
  <li>Spanish (A1)</li>
</ul>

<h4>Hobbies</h4>
<ul>
<li>programming and web design</li>
<li>drawing, digital art</li>
<li>asian culture, kpop</li>
<li>tattoo artist</li>
</ul>

<h4>Other</h4>
<p>6 / 2024 <br>
Establishing a business - VivIT
</p>
<p>3 / 2022 - 9 / 2023<br>
Rector's Scholarship for academic 
achievements</p>
<p>3 / 2018 - 9 / 2019 <br>
Otwarte Klatki Animal Charity - 
Volunteer</p>

      </div>
<div class="big-box"> <h4>Job experience</h4>
  <p>2 / 2024 - present</p>
  <p>Internship in WEB4PRO</p>
  <p>React.js,  Wordpress, HTML, CSS, JavaScript</p>
  <p>Design for the projects, Graphics for the side</p>
  <p>Project Manager</p>
  <p>3 / 2021 - present</p>
<p>Freelancer - Frontend Developer</p>
<ul>
<li>
<p>7 / 2024 - present</p>
<p>Richi Safari - </p>
<p>React.js, JavaScript, Bootstrap, HTML, CSS</p>
<p>Web design, Graphics for the side</p>
</li>
<li>
<p>7 / 2023 - 9 / 2023</p>
<p><a href="https://nutriwiki.pl/ ">Nutri wiki</a></p>
<p>PHP, Wordpress, HTML, CSS, JavaScript </p>
<p>Web design, Graphics for the side, Coding - frontend site, Newsletter</p>
</li>
<br>
<li>
<p>8 / 2021 - 10 / 2021</p>
<p><a href="https://github.com/AgataJacyk/bedzie5_theme">Będzie5</a></p>
<p>PHP, Wordpress, HTML, CSS, JavaScript</p>
<p>Custom graphics made by me, Custom WP theme, Web Design</p>
</li>
</ul>
<h4>Projects</h4>
<p>4 / 2023 - present</p>
<p><a href="https://super-mario-pizza.netlify.app/">Mario Pizza</a></p>
  <ul><li>Vue.js application, CSS, HTML, Custom graphics made by me, Light/Dark mode</li>
</ul><br>
<p>7 / 2023 - 9 / 2023</p>
<p><a href="https://github.com/Olkens/pokeProjekt">Pokemon Browser</a></p>
<ul><li>Vue.js application, SCSS, HTML, Web Design, Connection to API </li>
  </ul>
<h4>Skills</h4>
<ul>
<li><b>Programming languages:</b> HTML 5, CSS 3, SCSS, Java Script(ES6)</li>
<li><b>Frameworks:</b> React.js, Node.js, Angular, Vue.js, Bootstrap</li>
<li><b>Database:</b> SQL</li>
<li><b>Web/Apps design:</b> Figma, Canva</li>
<li><b>Digital art:</b> Gimp, Procreate</li>
<li><b>Soft skills:</b> creativity, good sense of aesthetics, good communication, team player, organization, willingness to learn</li>
</ul>

</div>
    </section>
    <deafult-button
        ><a href="/AJ-CV.pdf" download>Download as .pdf file</a></deafult-button
      >
  </div>
</template>

<script>
import DeafultButton from "../UI/DeafultButtons.vue";

export default {
  components: {
    DeafultButton,
  },
};
</script>

<style lang="scss" scoped>
h3 {
  color:#ff0460;
  text-shadow: 3px 2px 0px  #ffaacf;
  margin: 0;
  font-size: calc(46px + (56 - 46) * ((100vw - 300px) / (2865 - 300)));
  width: 100%;
}
h3,
h4 {
  padding: 0;
}
h4 {
  font-size: calc(30px + (46 - 30) * ((100vw - 300px) / (2865 - 300)));
  margin: 0;
}
img {
  width: 70%;
  margin: 5% 15% 10%;
}
ul {
  width: fit-content;
}
li {
  display: list-item;
  text-align: left;
  list-style-type: disc;
  width: 100%;
}
li::marker {
  font-size: 12px;
  line-height: 2rem;
}

p {
  color: #fb7baa;
  padding: 0;
  text-shadow: none;
  margin: 0;
  margin-bottom: 1rem;
  line-height: 2rem;
  width: 100%;
}

.cv-contents {
  margin: 20% 5% 5%;
  width: 90%;
  padding-bottom: 50px;
display: grid;
grid-template-columns: 1fr 2fr;
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.cv-contents b { 
  color:#ff0460;
  font-size: calc(10px + (26 - 10) * ((100vw - 300px) / (2865 - 300)));
  font-weight: 400;
}
.small-box { 
grid-area: 1 / 1 / 2 / 2; 
border-right: 7px dotted  #ffaacf;;
padding: 0 3rem 0 2rem;
}
.big-box { grid-area: 1 / 2 / 2 / 3; 
padding: 0 2rem 0 4rem ;
}
.cv-contents p,
li {
  color: #000000;
  font-size: calc(10px + (26 - 10) * ((100vw - 300px) / (2865 - 300)));
  line-height: 1.5rem;
}
.cv-contents .big-box ul { 
    padding-inline-start: 2rem;
  }
.cream {
  margin: 0;
  width: 100%;
}
.cv_header {
  width: 100%;
  height: 550px;
  border-radius: 187px 0px;
}

.cv_header a,
.big-box a {
  color: #000000;
  display: inline;
text-decoration: none;
font-family: 'Oswald', sans-serif;
font-size: calc(10px + (28 - 10) * ((100vw - 300px) / (2865 - 300)));
line-height: 2rem;
letter-spacing: 0.07em;
margin-right: 0;
text-shadow: none;
text-transform: none;
text-align: end;
padding: 0;
}
.cv_header a {
  color: #ff0460;
  font-size: calc(12px + (32 - 12) * ((100vw - 300px) / (2865 - 300)));
}
.cv_header a:hover,.big-box a:hover {
    background-color: transparent;
    border-radius:none;
    color: #ff0460;
    font-weight: bold;
}
.cv_header p { 
  color: #ff0460;
  font-size: calc(12px + (32 - 12) * ((100vw - 300px) / (2865 - 300)));
}
.main_content {
  background-color: #beeff8;
  box-shadow: 6px 6px 0px #e2fafe;
  border-radius: 187px 0px;
  height: auto;
  width: 80%;
  margin: 10% 10%;
}
.parent {
  background-color: #f6eece;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0;
  width: 100%;
  border-radius: 187px 0 0 0;
  margin: 0;
}
.div1 {
  grid-area: 1 / 1 / 2 / 2;
}
.div2 {
  grid-area: 1 / 2 / 2 / 3;
  padding: 5%;
  text-align: end;
}

@media (max-width: 1100px) {
  img {
    width: 50%;
    margin: 10% auto 0;
  }

  .cv-contents {
    margin: 70% 0 5%;
  }

  .cv_header a, .cv_header p {
    text-align: center;
    line-height: 1rem;
  }
  .parent {
    grid-template-columns: 3fr;
  }
  .div1 {
    grid-area: 1 / 1 / 2 / 3;
   display: flex;
    justify-content: center;
  }
  .div2 {
    grid-area: 2 / 1 / 3 / 2;
  text-align: center;
  padding: 0;
  width: 80%;
  margin: auto;
  }
}
@media (max-width: 925px) {
  .cv-contents {
    margin: 50% 3% 5%;
  }
  p {
    padding: 0 10px;
  }
  li, p {
    line-height: 1rem;
  }
  .big-box { 
padding: 0 1rem;}
}

@media (max-width: 750px) {
  li { 
    width: 80%;
  }
  .cv-contents {
    margin: 40% 3% 5%;
  }
  .cv-contents .big-box ul {
    padding-inline-start: 1rem;
  }
  .main_content {
    margin: 20% 5%;
    width: 90%;
  }
  .small-box {
    padding: 0 1rem 0 0;
  }
}

</style>
