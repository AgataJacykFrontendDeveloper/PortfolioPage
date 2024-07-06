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
      <div class="parent">
        <div class="div1">
          <h2>Stay in touch!</h2>
          <p>
            THANK YOU FOR YOUR TIME reviewing my website. If you think that my
            skills and character correspond to the conditions prevailing in the
            company, I will be very glad if you CONTACT one of the indicated
            forms. In addition, I WILL BE GRATEFUL FOR EVERY TIP FOR IMPROVING
            my website. Any comments on improving the code will be a VALUABLE
            LESSON. Have a nice day!
          </p>
        </div>
        <div class="div2">
          <Git /><br />
          <LinkedIn /><br />
          <Gmail /><br />
          <Phone />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Git from "../components/icons/IconGit.vue";
import LinkedIn from "../components/icons/IconLinkedIn.vue";
import Gmail from "../components/icons/IconGmail.vue";
import Phone from "../components/icons/IconPhone.vue";

export default {
  components: {
    Git,
    LinkedIn,
    Gmail,
    Phone,
  },
};
</script>

<style lang="scss" scoped>
p {
  color: #06adcc;
}
.container,
.parent,
.wave,
.div1 p {
  width: 100%;
}
.container {
  z-index: 3;
}
.parent {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 3rem;
  grid-row-gap: 30px;
  margin: 0;
}
.wave {
  margin: 0;
}
.div1 {
  grid-area: 1 / 1 / 2 / 2;
}
.div2 {
  grid-area: 1 / 2 / 2 / 3;
  margin: auto;
}
.text {
  background-color: #beeff8;
  padding: 2rem 0 5rem 0;
}
.wave {
  height: 200px;
  overflow: hidden;
}
@media (max-width: 1400px) {
  .parent {
    grid-column-gap: 10px;
  }
}
</style>
