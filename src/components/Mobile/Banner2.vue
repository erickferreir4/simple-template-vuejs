<template>

	<section class="m-banner2">
		<div class="m-banner2--center">

		<div class="m-banner2--left">
			<h3>Lorem ipsum </h3>
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque .
			</p>
		</div>

		<div class="m-banner2--right">
			<img src="./../../assets/banner2-mobile.png" />
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
	flex-direction: column;
	padding: 0 30px;
}

.m-banner2--left {
	width: 90%;
}
.m-banner2--right {
	width: 100%;
	margin-top: 25px;
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

</style>
