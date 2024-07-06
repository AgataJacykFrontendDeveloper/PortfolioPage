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
	  <div class="mess">
		<h2>About this page</h2>
		<p>Hello again!</p>
	  </div>
	  <img class="border" src="/cream.png" />
	</div>
  </template>
  
  <style lang="scss" scoped>
  .border {
  margin: 0 auto 0;
  width: 100%;
}

  .container,
  .wave {
	width: 100%;
  }
  .container {
	margin: 3% 0 20%;
	z-index: 4;
  }
  
  .mess {
	margin-bottom: 0;
	padding-bottom: 3rem;
  }
  .wave {
	height: 200px;
	margin: 0;
  }
  </style>
  