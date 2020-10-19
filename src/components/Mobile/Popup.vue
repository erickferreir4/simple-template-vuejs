<template>

	<div class="m-popup" v-bind:class="{ active: isClose }" v-on:click.self="close">
		
		<div class="m-popup--center" >
			<button v-on:click="close">fechar</button>
			<span>
				<img src="./../../assets/newsletter-mail-icon.svg" />
				<p>Bem Vindo à MAEZTRA</p>

				<h3>Receba em Primeira mão
					<strong>desconto e ofertas exclusivas</strong></h3>
			</span>

			<form>
				<input type="text" placeholder="Digite seu e-mail" />
				<button type="submit">Enviar <img src="./../../assets/send.svg" /></button>
			</form>
		</div>
	</div>


</template>

<script>

export default {
	name: 'Popup',
	data: function () {
		return {
			isClose: false
		}
	},
	methods: {
		close: function () {
			this.isClose = 	false
			sessionStorage.setItem('popup', true)
		}
	},
	created: function() {
		let is_close = sessionStorage.getItem('popup')
		if(is_close === 'true') {
				this.isClose = false
		}
		else {
			setTimeout( () => {
				this.isClose = true
			}, 10000)
		}
	}


}


</script>


<style scoped>
.m-popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #0000008a;
	display: none;
	z-index:999;
}
.m-popup.active {
	display: block;
}
.m-popup--center {
	display: flex;
    align-items: center;
    justify-content: center;
	flex-direction: column;
	background-color: #fff;
    width: 80%;
	position: absolute;
    bottom: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
	padding: 20px;
}
.m-popup--center > button {
    position: absolute;
    top: -20px;
    right: 0;
    font-size: 12px;
    text-transform: uppercase;
    background-color: transparent;
    color: #fff;
	cursor: pointer;
}
.m-popup--center > form {
	width: 100%;
	display: flex;
    flex-direction: column;
	margin-top: 30px;
}
.m-popup--center > form input{
    border: 1px solid #C4C4C4;
    border-radius: 10px;
    padding: 12px;
    font-size: 12px;
}

.m-popup--center > form button{
    background-color: #FAA500;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 10px;
    padding: 12px;
	margin-top: 13px;
	display: flex;
    align-items: center;
    justify-content: center;
	cursor: pointer;
}
.m-popup--center > form button img{
	margin-left: 10px;
}

.m-popup--center > span {
	display: flex;
    flex-direction: column;
    align-items: center;
}
.m-popup--center > span p{
	font-size: 12px;
    text-transform: uppercase;
	margin: 15px 0;
}
.m-popup--center > span h3{
	font-size: 20px;
	color: #787D83;
	display: flex;
    flex-direction: column;
    align-items: center;
	line-height: 26px;
}
.m-popup--center > span h3 strong{
	font-weight: 700
}
</style>
