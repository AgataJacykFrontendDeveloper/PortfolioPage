<template>
  <section class="welcome">
    <div class="profile">
      <img src="/gif1.gif" alt="I'm waving to you" />
    </div>
    <div class="welcome-text">
    <h1>Hello there!</h1>
    <p>
      My name is Agata. This is my portfolio page! Scroll down if you want to
      know me better
    </p></div>
  </section>
  <AboutMe></AboutMe>
  <Websites></Websites>
  <Designs></Designs>
  <LastPanel></LastPanel>
</template>

<script>
import AboutMe from "../components/AboutMe.vue";
import Designs from "../components/Designs.vue";
import Websites from "../components/Websites.vue";
import LastPanel from "../components/LastPanel.vue";

export default {
  components: {
    AboutMe,
    Websites,
    Designs,
    LastPanel,
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 150px;
  height: auto;
}
h1,
p {
  margin: 0 auto;
}
p {
  font-size: calc(18px + (32 - 18) * ((100vw - 300px) / (2865 - 300)));
  text-align: center;
  width: 70%;
  padding: 0;
}
.profile {
  margin: auto;
  width: 40%;
}
.profile img { 
  width: 70%;
  margin: auto;
}
.welcome {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
justify-content: center;
  width: 100%;
  margin: -10% auto 5%;
}
.welcome-text {
  width: 50%;
  margin: 0 auto;
}
@media (max-width: 950px) {
  .welcome {
  display: flex;
  flex-direction: column;
}
.welcome-text {
  width: 80%;
  margin: 0 auto;
}
.profile {
  margin: auto;
  width: 40%;
}
.profile img {
  width: 100%;
}
}
</style>
