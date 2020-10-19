<template>
	<section class="m-banner">

	<VueSlickCarousel :arrows="true" :dots="true" :autoplay="true">
      <div><a href="#"><img src="./../../assets/Banner.png"/></a></div>
      <div><a href="#"><img src="./../../assets/Banner.png"/></a></div>
      <div><a href="#"><img src="./../../assets/Banner.png"/></a></div>
      <div><a href="#"><img src="./../../assets/Banner.png"/></a></div>
      <div><a href="#"><img src="./../../assets/Banner.png"/></a></div>
	</VueSlickCarousel>


	</section>
</template>


<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {
	name: 'Banner',
	components: { VueSlickCarousel },
}
</script>


<style >

.m-banner .slick-slider .slick-next {
	right: 160px;
	transform: rotate(180deg);
}
.m-banner .slick-slider .slick-prev {
	left: 160px;
    z-index: 9;
}
.m-banner .slick-dots {
	bottom: 25px
}
.m-banner .slick-dots  li{
	width: 16px;
    margin: 0 8px;
    height: 16px;
}
.m-banner .slick-dots button {
    border-radius: 100%;
    width: 16px;
    height: 16px;
	border: 2px solid #FAA500;
}

.m-banner .slick-dots .slick-active button {
    background-color: #FAA500;
}
.m-banner .slick-dots button:before {
	color: transparent!important;
	width: 16px;
	height: 16px;
}

.slick-prev:before, .slick-next:before{
	background:url('./../../assets/icon-arrow.svg');
	color: transparent;
	background-repeat: no-repeat;
	font-size: 30px;
    background-size: contain;
}


@media only screen and (max-width: 1600px) {
.m-banner .slick-slider .slick-next {
	right: 100px;
}
.m-banner .slick-slider .slick-prev {
	left: 100px;
}
}

@media only screen and (max-width: 1400px) {
.m-banner .slick-slider .slick-next {
	right: 40px;
}
.m-banner .slick-slider .slick-prev {
	left: 40px;
}
}

</style>
