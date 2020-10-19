<template>

	<section class="m-newsletter">
		<div class="m-newsletter--center">

			<h3>Recebe Nossa Newsletter</h3>

			<form>
				<input type="text" placeholder="Digite seu e-mail" />
				<input type="submit" value="Enviar" />
			</form>

		</div>
	</section>

</template>


<script>

export default {
	name: 'Newsletter'
}

</script>

<style scoped>


.m-newsletter--center {
	display: flex;
    align-items: center;
    justify-content: center;
	padding: 40px 0;
    border-top: 1px solid #EFEFEF;
    border-bottom: 1px solid #EFEFEF;
}

.m-newsletter--center h3{
	font-size: 24px;
    font-weight: 700;
	margin: 0 25px;
}


.m-newsletter--center form{
	margin: 0 25px;
}

.m-newsletter--center form input{
    padding: 11px;
    border-radius: 4px;
}

.m-newsletter--center form input:first-of-type{
	border: 1px solid #353535;
    font-size: 14px;
    width: 510px;
}

.m-newsletter--center form input:last-of-type{
    background-color: #FAA500;
    color: #fff;
    font-size: 16px;
    width: 130px;
	position: relative;
    left: -10px;
}
</style>
