<template>
	<section class="m-brands">
		<div class="m-brands--center">

			<h3>Marcas Parceiras</h3>

			<ul>
				<li><img src="./../../assets/brands1.png" /></li>
				<li><img src="./../../assets/brands2.png" /></li>
				<li><img src="./../../assets/brands3.png" /></li>
				<li><img src="./../../assets/brands4.png" /></li>
				<li><img src="./../../assets/brands5.png" /></li>
			</ul>


		</div>
	</section>
</template>

<script>
export default {
	name: 'Brands'
}
</script>


<style scoped>


.m-brands--center {
	padding: 55px 160px;
}

.m-brands--center h3 {
	font-size: 32px;
    font-weight: 700;
    text-align: center;

}

.m-brands--center ul {
	display: flex;
    align-items: center;
    justify-content: center;
	margin-top: 25px;
}
.m-brands--center ul li{
	margin: 0 8px;
}
.m-brands--center ul li:first-of-type{
	margin-left: 0;
}
.m-brands--center ul li:last-of-type{
	margin-right: 0;
}
.m-brands--center ul li img{
	width: 100%;
}


@media only screen and (max-width: 1600px) {
.m-brands--center {
	padding: 25px 100px;
}
}

@media only screen and (max-width: 1400px) {
.m-brands--center {
	padding: 25px 40px;
}
}



</style>
