<template>
	<section class="m-brands">
		<div class="m-brands--center">

			<h3>Marcas Parceiras</h3>

			<ul>
				<li><img src="./../../assets/brands3.png" /></li>
				<li><img src="./../../assets/brands1.png" /></li>
				<li><img src="./../../assets/brands2.png" /></li>
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
	padding: 20px 0;
}

.m-brands--center h3 {
	font-size: 24px;
    font-weight: 700;
    text-align: center;

}

.m-brands--center ul {
	display: flex;
    align-items: center;
	margin-top: 35px;
	overflow: auto;
    padding-left: 30px;
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
}

@media only screen and (max-width: 340px) {
.m-brands--center ul li{
	width: 260px;
}
.m-brands--center ul li img{
	width: inherit;
}

}

</style>
