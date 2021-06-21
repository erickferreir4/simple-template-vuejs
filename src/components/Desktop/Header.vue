<template>
		<header>
			<div class="m-header">
				<div class="m-header--center">

					<div class="m-header--top">
						<p>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>		
					</div>


					<div class="m-header--middle">

						<div class="m-header--middle--logo">
							<img src="./../../assets/yourlogo.png" />
						</div>

						<div class="m-header--middle--search">
							<form>
								<input type="text" placeholder="O Que Você Busca?" />
								<input type="submit" value="Buscar"/>
							</form>
						</div>

						<div class="m-header--middle--user">
							<span>
								<img src="./../../assets/icon-user.svg" />
								<a href="#">Minha Conta</a>
							</span>

							<span>
								<img src="./../../assets/icon-heart.svg" />
								<a href="#">Lista de Desejos</a>
							</span>

							<span>
								<img src="./../../assets/icon-shoppingbag.svg" />
								<a href="#">Meu Carrinho</a>
							</span>
						</div>

					</div>


					<div class="m-header--bottom">
						<ul>
							<li>
								<img src="./../../assets/icon-dress.svg" />
								<a href="#">Novidades</a>
							</li>
							<li><a href="#">Vestidos</a></li>
							<li><a href="#">Roupas</a></li>
							<li><a href="#">Sapatos</a></li>
							<li><a href="#">Lingerie</a></li>
							<li><a href="#">Acessórios</a></li>
							<li><a href="#">OUTLET</a></li>
						</ul>

					</div>
				</div>
			</div>
		</header>
</template>

<script>
export default
{
	name: 'Header'
}
</script>


<style scoped>

.m-header--top {
	background-color: #353535;
	padding: 10px 0;
}
.m-header--top p{
	color: #fff;
	font-size: 12px;
	text-align: center;
}

.m-header--middle--logo img{
    max-width: 150px;
}
.m-header--middle {
	display: flex;
    justify-content: space-between;
    align-items: center;
	padding: 20px 160px;
	box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0), 0 0px 10px 0 rgba(0, 0, 0, 0.2);
}

.m-header--middle--search {
	width: 50%;
}

.m-header--middle--search form{
	display: flex;
}

.m-header--middle--search form input:first-of-type {
    background-color: #EFEFEF;
    padding: 13px 25px;
    font-size: 12px;
	width:78%;
	border-radius: 10px;
	color: #353535
}


.m-header--middle--search form input:last-of-type {
    color: #fff;
    background-color: #FAA500;
    font-size: 14px;
    border-radius: 8px;
    padding: 12px;
    width: 120px;
    position: relative;
    left: -20px;
}


.m-header--middle--user {
	display: flex;
    align-items: center;
}


.m-header--middle--user span{
	display: flex;
    align-items: center;
	margin-right: 50px;
}
.m-header--middle--user span img{
    margin-right: 8px;
}
.m-header--middle--user span a{
    font-size: 14px;
}

.m-header--middle--user span:last-of-type {
	border: 1px solid #FAA500;
    border-radius: 8px;
    padding: 14px;
	margin:0;
}

.m-header--bottom {

}

.m-header--bottom ul{
	display: flex;
    align-items: center;
    justify-content: center;
	padding: 20px 0;
}

.m-header--bottom li{
    margin: 0 45px;
    display: flex;
    align-items: center;
}

.m-header--bottom li a{
	font-size: 14px;
}

.m-header--bottom li:first-of-type a{
	color: #FAA500;
	font-weight: 700;
	margin-left: 8px;
}

@media only screen and (max-width: 1600px) {

.m-header--middle {
	padding: 20px 100px;
}
.m-header--middle--user span{
	margin-right: 25px;
}

}


@media only screen and (max-width: 1400px) {
.m-header--middle {
	padding: 20px 40px;
}
.m-header--middle--user span{
	margin-right: 20px;
}

}

</style>
