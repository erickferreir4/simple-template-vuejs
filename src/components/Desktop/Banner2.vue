<template>

	<section class="m-banner2">
		<div class="m-banner2--center">

		<div class="m-banner2--left">
			<h3>Lorem ipsum </h3>
			<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum 
mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh
sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus
ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id.
Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar
velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed
pellentesque porttitor phasellus donec condimentum sit sapien.
			</p>
		</div>

		<div class="m-banner2--right">
			<img src="./../../assets/banner2.png" />
		</div>
		


		</div>
	</section>

</template>

<script>
	
export default {
	name: 'Banner2',
}

</script>




<style scoped>
.m-banner2--center {
	display: flex;
    align-items: center;
    justify-content: space-between;
	padding: 60px 160px;
}

.m-banner2--left {
    width: 27%;
}
.m-banner2--right {
	width: 70%
}
.m-banner2--right img {
	width: 100%;
}

.m-banner2--left h3 {
	font-size: 24px;
    font-weight: 700;
	
}
.m-banner2--left p {
    font-size: 14px;
    line-height: 20px;
	margin-top: 20px;
}

@media only screen and (max-width: 1600px) {
.m-banner2--center {
	padding: 60px 100px;
}
}
@media only screen and (max-width: 1400px) {
.m-banner2--center {
	padding: 60px 40px;
}
}
</style>
