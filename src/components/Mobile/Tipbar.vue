<template>
	<section class="m-tipbar">

	<div class="m-tipbar--center">
		<h3>Por que comprar na Maeztra?</h3>

		<ul>
			<li>
				<img src="./../../assets/tipbar1.svg" />
				<span>
					<strong>Produtos importados</strong>
					Produto de Alta Qualidade
				</span>
			</li>
			<li>
				<img src="./../../assets/tipbar2.svg" />
				<span>
					<strong>Estoque no Brazil</strong>
					Produtos mais perto de você!	
				</span>
			</li>
			<li>
				<img src="./../../assets/tipbar3.svg" />
				<span>
					<strong>Trocas Garantidas</strong>
					Trocas em até 48 horas
				</span>
			</li>
			<li>
				<img src="./../../assets/tipbar4.svg" />
				<span>
					<strong>Ganhe 5% off</strong>
					Pagando à vista no Cartão	
				</span>
			</li>
			<li>
				<img src="./../../assets/tipbar5.svg" />
				<span>
					<strong>Frete Grátis</strong>
					Em compras acima de R$ 499,00	
				</span>
			</li>
		</ul>

	</div>

	</section>
</template>


<script>
export default {
	name: 'Tipbar'
}
</script>


<style scoped>
.m-tipbar--center {
	padding: 30px 0;
}

.m-tipbar--center h3 {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
}
.m-tipbar--center ul {
    display: flex;
    align-items: center;
	margin-top: 25px;
	overflow: auto;
	padding-left: 30px;
}

.m-tipbar--center ul li{
	display: flex;
    align-items: center;
	background-color: #EFEFEF;
	border-radius: 4px;
	padding: 16px 10px 16px 25px;
	margin: 0 8px;
	min-width: 265px;
}

.m-tipbar--center ul li:first-of-type{
	margin-left:0;
}
.m-tipbar--center ul li:last-of-type{
	margin-right:0;
}

.m-tipbar--center ul li span{
	font-size:12px;
	display: flex;
    flex-direction: column;
	line-height: 19px;
}
.m-tipbar--center ul li img{
	margin-right: 22px;
}
.m-tipbar--center ul li span strong{
	font-weight: 700;
	font-size:14px
}

@media only screen and (max-width: 340px) {
.m-tipbar--center ul li{
	min-width: 225px;
}
}
</style>
