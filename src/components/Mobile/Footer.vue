<template>
	<footer>
		<div class="m-footer--center">

			<div class="m-footer--info">

			<button v-on:click="open">Informações <strong>+</strong></button>
			<ul>
				<li><a href="#">Quem Somos</a></li>
				<li><a href="#">Prazo de Envio</a></li>
				<li><a href="#">Trocas e Devoluções</a></li>
				<li><a href="#">Promoções e Cupons</a></li>
			</ul>

			<button v-on:click="open">Minha Conta <strong>+</strong></button>
			<ul>
				<li><a href="#">Minha Conta</a></li>
				<li><a href="#">Meus Pedidos</a></li>
				<li><a href="#">Cadastre-se</a></li>
			</ul>

			<button v-on:click="open">Onde nos Encontrar <strong>+</strong></button>
			<ul>
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
	name: 'Footer',
	data: function () {
		return {
		}
	},
	methods: {
		open: function (ev) {
			ev.target.classList.toggle('active')
		}		
	}
}

</script>


<style scoped>

.m-footer--center .m-footer--info{
	padding: 0 30px 40px;
}

.m-footer--center button{
	font-size:16px;
	font-weight: 700;
	margin-bottom: 20px;
	display: flex;
    justify-content: space-between;
    align-items: center;
	cursor: pointer;
	width: 100%;
    background: transparent;
}

.m-footer--center button.active+ul{
	display:block;
}

.m-footer--center ul{
	display: none;
	margin-bottom: 40px;
    padding: 0 10px;
}

.m-footer--center ul li{
    margin: 2px 0;
}
.m-footer--center ul li a{
	font-size: 12px;
}

.m-footer--copr {
    background-color: #353535;
}

.m-footer--copr span img{
	margin: 10px;
}
.m-footer--copr span {
	margin: 10px 0;
	display: flex;
    align-items: center;
}

.m-footer--copr {
	display: flex;
    flex-direction: column;
    align-items: center;
	padding: 15px 0;
}


</style>
