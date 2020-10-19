<template>

	<section class="m-vitrine">
		<div class="m-vitrine--center">

			<h3>As Mais Pedidas</h3>

				
			<VueSlickCarousel :arrows="true" :dots="false" :autoplay="true" :slidesToShow="5">

				<div class="m-vitrine--product" v-for="(pNum, index) in itemsNum" :key="index">
					<img :src="items[pNum].img"/>

					<div class="m-vitrine--info">
					<span class="m-vitrine--colors">
						<button v-bind:style="{ 'background-color': items[pNum].colors[0] }"></button>
						<button v-bind:style="{ 'background-color': items[pNum].colors[1] }"></button>
						<button v-bind:style="{ 'background-color': items[pNum].colors[2] }"></button>
						<button v-bind:style="{ 'background-color': items[pNum].colors[3] }"></button>
					</span>

					<span>
						<p class="m-vitrine--price">{{items[pNum].price}}</p>
						<p class="m-vitrine--name">{{items[pNum].name}}</p>
						<p class="m-vitrine--desc">{{items[pNum].desc}}</p>
					</span>

					<button class="m-vitrine--buy">Adicionar</button>

					</div>
				</div>

			</VueSlickCarousel>

		</div>
	</section>

</template>


<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
	name: 'Vitrine',
	components: { VueSlickCarousel },
	data: function() {
		return {
			itemsNum: [0,1,0,1,0,1,0],
			items: [
				{
					name: 'Faux Suede Mini Skirt',
					price: 'R$ 500,00',
					img: require('./../../assets/product1.png'),
					desc: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
					colors: ['#DEAC71', '#D37164', '#6497D3', '#3C3B79']
				},
				{
					name: 'Ruched Rose Print Mini Skirt',
					img: require('./../../assets/product2.png'),
					price: 'R$ 320,00',
					desc: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
					colors: ['#1C1A19', '#D84E4B', '#CFC9B0', '#EAE9E5'],
				},
			]
		}	
	}
	

}
</script>

<style>

.m-vitrine--center {
	padding: 25px 160px;
}

.m-vitrine--center .m-vitrine--product{
	max-width: 290px!important;
	margin: 0 16px;
}

.m-vitrine--center .m-vitrine--product img{
	width: 100%;
}

.m-vitrine--center h3{
	font-size: 32px;
    font-weight: 700;
    text-align: center;
	margin-bottom: 35px;
}
.m-vitrine--center .m-vitrine--info{
	padding: 10px 25px;
}

.m-vitrine--center .m-vitrine--colors{
    display: block;
    margin-bottom: 13px;
}
.m-vitrine--center .m-vitrine--colors button{
    width: 27px;
    height: 27px;
    border-radius: 4px;
	margin-right: 8px;
	cursor: pointer;
}

.m-vitrine--center .m-vitrine--price{
	font-size: 20px;
    font-weight: 700;
}
.m-vitrine--center .m-vitrine--name{
	color: #000;
	font-size: 16px;
	margin: 10px 0;
}

.m-vitrine--center .m-vitrine--desc{
	font-size: 12px;
    line-height: 17px;
	color: #9C9C9C;
	-webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
}

.m-vitrine--center .m-vitrine--buy{
	background-color: #FAA500;
    color: #fff;
    font-size: 16px;
    letter-spacing: 1px;
	border-radius: 4px;
    width: 100%;
    padding: 10px;
	margin-top: 8px;
	cursor: pointer;
}

.m-vitrine--center .slick-slide{
	display: flex!important;
    justify-content: center;
	overflow: hidden;
}
.m-vitrine--center .slick-slider .slick-next{
	transform: rotate(180deg);
	right: 15px;
}

.m-vitrine--center .slick-slider .slick-prev{
	left: 15px;
    z-index: 9;
}

@media only screen and (max-width: 1600px) {
.m-vitrine--center {
	padding: 25px 100px;
}
.m-vitrine--center .slick-slider .slick-next{
	top: 45%;
	right: 0px;
}
.m-vitrine--center .slick-slider .slick-prev{
	top: 45%;
}
}

@media only screen and (max-width: 1400px) {
.m-vitrine--center {
	padding: 25px 40px;
}
.m-vitrine--center .m-vitrine--name{
	font-size: 15px;
}
}



</style>
