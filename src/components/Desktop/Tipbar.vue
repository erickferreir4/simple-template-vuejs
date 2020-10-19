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
	padding: 25px 160px;
}

.m-tipbar--center h3 {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
}
.m-tipbar--center ul {
    display: flex;
    align-items: center;
    justify-content: center;
	margin-top: 25px;
}

.m-tipbar--center ul li{
	display: flex;
    align-items: center;
	background-color: #EFEFEF;
	border-radius: 4px;
	padding: 16px 10px 16px 25px;
	margin: 0 8px;
	width: 305px;
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

@media only screen and (max-width: 1600px) {
.m-tipbar--center {
	padding: 25px 80px;
}
.m-tipbar--center ul li{
	padding:16px 10px 16px 15px;
}
.m-tipbar--center ul li img{
	margin-right: 15px;
}
}

@media only screen and (max-width: 1400px) {
.m-tipbar--center {
	padding: 25px 20px;
}
.m-tipbar--center ul li{
	padding:16px 10px 16px 10px;
}
.m-tipbar--center ul li img{
	margin-right: 15px;
}
}
</style>
