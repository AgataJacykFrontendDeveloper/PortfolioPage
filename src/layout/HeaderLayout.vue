<template>
  <header>
    <img src="/header.png" />
    <input type="checkbox" class="toggler" />
    <div class="hamburger"><div></div></div>
    <div class="menu">
      <div class="mynav">
        <ul>
          <li>
            <nav-button><router-link to="/">Home</router-link></nav-button>
          </li>
          <li>
            <nav-button><router-link to="/CV">My CV</router-link></nav-button>
          </li>
          <li>
            <nav-button
              ><router-link to="/Designs">Designs</router-link></nav-button
            >
          </li>
          <li>
            <nav-button
              ><router-link to="/Websites">Websites</router-link></nav-button
            >
          </li>
          <li>
            <nav-button
              ><router-link to="/About">About Page</router-link></nav-button
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import NavButton from "../UI/DeafultButtons.vue";

export default {
  components: {
    NavButton,
  },
};
</script>

<style lang="scss" scoped>
img {
  margin-top: -200px;
  width: 100%;
  height: 70%;
}
.menu {
  position: absolute;
  top: 20px;
  right: 0;
  display: flex;
  justify-content: end;
  width: 60%;
}
ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
}
.toggler { 
  visibility: hidden;
}

@media (max-width: 2150px) {
  img {
    margin-top: -140px;
  }
}
@media (max-width: 1400px) {
  img {
    margin-top: -50px;
  }
  .toggler {
    z-index: 999;
    height: 100px;
    width: 100px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    opacity: 0;
    visibility: visible;
  }
  .hamburger {
    position: absolute;
    top: 0;
    right: 0;
    height: 100px;
    width: 100px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
      position: relative;
      top: 0;
      right: 0;
      background: #fb7baa;
      height: 5px;
      width: 60%;
      transition: all 0.4s ease;
      &::before {
        content: "";
        position: absolute;
        top: -10px;
        background: #fb7baa;
        width: 100%;
        height: 5px;
        transition: all 0.4s ease;
      }
      &::after {
        content: "";
        position: absolute;
        top: -10px;
        background: #fb7baa;
        width: 100%;
        height: 5px;
        transition: all 0.4s ease;
        top: 10px;
      }
    }
  }
  .toggler:checked + .hamburger > div {
    background: rgba(0, 0, 0, 0);
    &::before {
      top: 0;
      transform: rotate(45deg);
      background: #fb7baa;
      z-index: 1000;
      position: absolute;
    }
    &::after {
      top: 0;
      transform: rotate(135deg);
      background: #fb7baa;
      z-index: 999;
      position: absolute;
    }
  }
  .menu {
    background: #f6eece;
    width: 0;
    height: 0;
    margin-top: 0;
    transition: all 0.4s ease;
  }
  .toggler:checked ~ .menu {
    width: 100%;
    height: 100vh;
    justify-content: center;
    position: absolute;
    z-index: 888;
  }
  .menu > div > ul {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    visibility: hidden;
    > li {
      list-style: none;
      width: 100%;
      margin-top: 40px;
      font-size: calc(32px + (46 - 32) * ((100vw - 300px) / (1550 - 300)));
      font-size: calc(32px + (46 - 32) * ((100vw - 300px) / (1550 - 300)));
    }
  }
  a {
    font-size: calc(32px + (46 - 32) * ((100vw - 300px) / (1550 - 300)));
  }
  .toggler:checked ~ .menu > div > ul {
    transition: visibility 0.4s ease;
    transition-delay: 0.1s;
    visibility: visible;
  }
}
@media (max-width: 1200px) {
  img {
  margin-top: -20px;
  width: 100%;
  height: 70%;
}
}
</style>
