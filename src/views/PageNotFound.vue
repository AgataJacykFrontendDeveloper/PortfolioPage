<template>
	<section>
	<CommonContainer>
	  <div class="mess">
	  <div class="parent">
		<div class="div1">
			<h2>Oh no!</h2>
			<p>Page not found. Try visit my cv page instead.</p>
			<NavButton><router-link to="/CV">Go to CV</router-link></NavButton></div>
		  <div class="div2"><img src="/lost.png"></div>
		  </div>
		</div>
	</CommonContainer>
	</section>
	</template>
	
	<script>
	import CommonContainer from '../UI/CommonContainer.vue'
	import NavButton from '../UI/DeafultButtons.vue'
	
	export default {
	  components: {
		CommonContainer,
		NavButton
	  }
	}
	</script>
	
	
  <style lang="scss" scoped>
  h2 {
	  font-size: calc(64px + (160 - 64) * ((100vw - 300px) / (1871 - 300)));
  }
  img {
	  margin-left: 30%;
	  margin-top: -15%;
	  width: 70%;
  }
  a {
	  font-size: calc(30px + (40 - 30) * ((100vw - 300px) / (2865 - 300)));
	  width: 15%;
	  padding: 0;
	  &:hover {
		  background-color: #FB7BAA;
		  border-radius: 60px;
		  color: #F6EECE;
		  + .drip-1 {
			  height: 30px;
		  }
		  ~ {
			  .drip-2 {
				  height: 40px;
			  }
			  .drip-3 {
				  height: 10px;
			  }
		  }
	  }
  }
  .parent {
	  display: block;
	  grid-template-columns: 2fr;
	  grid-template-rows: repeat(4, 1fr);
	  grid-column-gap: 0px;
	  grid-row-gap: 0px;
  }
  .div1 {
	  grid-area: 1 / 1 / 2 / 3;
  }
  .div2 {
	  grid-area: 2 / 1 / 3 / 2;
  }
  @media (max-width: 1550px) {
	  a {
		  width: 30%;
	  }
	  h2, p {
		  padding: 0;
		  margin: 0;
	  }
	  img {
		  margin: 0;
		  width: 100%;
	  }
	  .parent {
		  grid-template-columns: 3fr 1fr;
		  display: block;
		  justify-content: start;
		  align-content: start;
	  }
	  .div1 {
		  grid-area: 1 / 1 / 2 / 3;
		  display: flex;
		  flex-direction: column;
	  }
	  .div2 {
		  grid-area: 2 / 1 / 3 / 2;
		  width: 100%;
	  }
  }
	</style>
	
  
  