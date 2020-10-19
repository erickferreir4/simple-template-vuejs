<template>

	<section class="m-vitrine">
		<div class="m-vitrine--center">

			<h3>As Mais Pedidas</h3>

				
			<div class="m-vitrine--products">

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

			</div>

		</div>
	</section>

</template>


<script>


export default {
	name: 'Vitrine',
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
	padding: 30px 0;
}

.m-vitrine--center .m-vitrine--products{
    overflow: auto;
    display: flex;
}
.m-vitrine--center .m-vitrine--product{
	width: 290px!important;
	margin:0;
	margin-left:16px;
	display: inline-table;
}

.m-vitrine--center .m-vitrine--product img{
	width: 100%;
}

.m-vitrine--center h3{
	font-size: 24px;
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


@media only screen and (max-width: 340px) {

.m-vitrine--center .m-vitrine--product{
	width: 260px!important;
}
}



</style>
