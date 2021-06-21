<template>
	<header>
		<div class="m-header--center">
			<div class="m-header--top">
				<p>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>	
			</div>

			<div class="m-header--middle">
				<span>
					<button><img src="./../../assets/icon-menu.svg" /></button>
					<img style="max-width: 110px" src="./../../assets/yourlogo.png" />
				</span>

				<span>
					<a href="#"><img src="./../../assets/icon-busca.svg" /></a>
					<a href="#"><img src="./../../assets/icon-shoppingbag-mobile.svg" /></a>
				</span>
			</div>
		</div>
	</header>
</template>


<script>

export default {
	name: 'Header',
}

</script>


<style scoped>
.m-header--top {
	background-color: #353535;
	padding: 10px;
}
.m-header--top p{
	color: #fff;
	font-size: 10px;
    text-align: center;
}
.m-header--middle {
    display: flex;
    align-items: center;
    justify-content: space-between;
	padding: 32px 20px;
}
.m-header--middle > span{
	display: flex;
    align-items: center;
    justify-content: center;
}
.m-header--middle > span:first-of-type button{
	margin-right: 23px;	
	background-color: transparent;
}
.m-header--middle > span:last-of-type a:last-of-type{
	margin-left: 40px;	
}
</style>
