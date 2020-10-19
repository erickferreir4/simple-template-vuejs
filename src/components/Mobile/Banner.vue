<template>
	<section class="m-banner">

	<VueSlickCarousel :arrows="true" :dots="true" :autoplay="true">
      <div><a href="#"><img src="./../../assets/banner-mobile.png"/></a></div>
      <div><a href="#"><img src="./../../assets/banner-mobile.png"/></a></div>
      <div><a href="#"><img src="./../../assets/banner-mobile.png"/></a></div>
      <div><a href="#"><img src="./../../assets/banner-mobile.png"/></a></div>
      <div><a href="#"><img src="./../../assets/banner-mobile.png"/></a></div>
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


<style scoped>

.m-banner .slick-slider .slick-slide img{
	width: 100%;
}

.m-banner .slick-slider .slick-next {
	right: 30px;
	transform: rotate(180deg);
}
.m-banner .slick-slider .slick-prev {
	left: 30px;
    z-index: 9;
}
.m-banner .slick-dots {
	bottom: 20px
}
.m-banner .slick-dots  li{
	width: 8px;
    height: 8px;
    margin: 0 8px;
}
.m-banner .slick-dots button {
    border-radius: 100%;
    width: 8px;
    height: 8px;
	border: 1px solid #FAA500;
}

.m-banner .slick-dots .slick-active button {
    background-color: #FAA500;
}
.m-banner .slick-dots button:before {
	color: transparent!important;
	width: 8px;
	height: 8px;
}

.slick-prev:before, .slick-next:before{
	background:url('./../../assets/icon-arrow.svg');
	color: transparent;
	background-repeat: no-repeat;
	font-size: 30px;
    background-size: contain;
}


</style>
