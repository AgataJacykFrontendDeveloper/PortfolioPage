<template>
<div class="melting-button">
<slot></slot>
  <div class="drip-1"></div>
  <div class="drip-2"></div>
  <div class="drip-3"></div>
  <div class="drip-4"></div>
</div>
</template>

<style>
a {
display: block;
text-decoration: none;
font-family: 'Oswald', sans-serif;
font-size: calc(12px + (32 - 12) * ((100vw - 300px) / (2865 - 300)));
line-height: 58px;
letter-spacing: 0.07em;
color: #FB7BAA;
margin-right: 10px;
text-shadow: 3px 2px 0px #FFAACF;
text-transform: uppercase;
text-align: center;
padding: 0 40px;
height: auto;
}

a:hover{
    background-color: #FB7BAA;
    border-radius:60px;
    color: #F6EECE;
}
a:hover + .drip-1{
  height: 30px;
}
a:hover ~ .drip-2{
  height: 40px;
}

a:hover ~ .drip-3{
  height: 10px;
}
.drip-1{
  position:absolute;
  width:10px;
  height:0px;
  border-radius:0 0 21px 21px;
  background:#FB7BAA;
  margin: 0px 110px;
  transition: height 0.9s ease;
}

.drip-2{
  position:absolute;
  width:20px;
  height:0px;
  border-radius:0 0 21px 21px;
  background:#FB7BAA;
  margin: 0px 80px;
  transition: height .7s ease;
}
.drip-3{
  position:absolute;
  width:10px;
  height:0px;
  border-radius:0 0 21px 21px;
  background:#FB7BAA;
  margin: 0px 60px;
  transition: height 1.5s ease;
}

.drip-4{
  position:absolute;
  width:19px;
  height:0px;
  border-radius:0 0 21px 21px;
  background:#FB7BAA;
  margin: 0px 10px;
  transition: height .7s ease;
}
</style>