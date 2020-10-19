<template>
	<footer>
		<div class="m-footer--center">

			<div class="m-footer--info">
			<ul>
				<li>Informações</li>
				<li><a href="#">Quem Somos</a></li>
				<li><a href="#">Prazo de Envio</a></li>
				<li><a href="#">Trocas e Devoluções</a></li>
				<li><a href="#">Promoções e Cupons</a></li>
			</ul>

			<ul>
				<li>Minha Conta</li>
				<li><a href="#">Minha Conta</a></li>
				<li><a href="#">Meus Pedidos</a></li>
				<li><a href="#">Cadastre-se</a></li>
			</ul>

			<ul>
				<li>Onde nos Encontrar</li>
				<li><a href="#">Lojas</a></li>
				<li><a href="#">Endereço</a></li>
			</ul>
			</div>


			<div class="m-footer--copr">
				<span>
					<img src="./../../assets/icon-facebook.svg" />
					<img src="./../../assets/icon-linkedin.svg" />
					<img src="./../../assets/icon-instagram.svg" />
					<img src="./../../assets/icon-youtube.svg" />
				</span>

				<span>
					<img src="./../../assets/icon-pagamento-Visa.png" />
					<img src="./../../assets/icon-pagamento-mastercard.png" />
					<img src="./../../assets/icon-pagamento-Visa.png" />
					<img src="./../../assets/icon-pagamento-mastercard.png" />
				</span>

				<span>
					<img src="./../../assets/powered-by-vtex.png" />
					<img src="./../../assets/powered-by-maeztra.png" />
				</span>

			</div>

		</div>
	</footer>
</template>


<script>

export default {
	name: 'Footer'
}

</script>


<style scoped>
.m-footer--center .m-footer--info{
    display: flex;
    justify-content: center;
	padding-top: 20px;
    padding-bottom: 40px;
}

.m-footer--center ul:nth-of-type(2){
	margin: 0 340px;
}

.m-footer--center ul li{
	margin: 24px 0;
}

.m-footer--center ul li a{
	font-size: 12px;
}
.m-footer--center ul li:first-of-type{
	font-size:16px;
	font-weight: 700;
}

.m-footer--copr {
    background-color: #353535;
	display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 160px;
}

.m-footer--copr span{
	display: flex;
    align-items: center;
    justify-content: center;
}
.m-footer--copr span img{
	margin: 10px;
}
</style>
