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


.m-newsletter {
    margin: 40px 0;
}
.m-newsletter--center {
	display: flex;
    align-items: center;
    justify-content: center;
	flex-direction: column;
    border-top: 1px solid #EFEFEF;
    border-bottom: 1px solid #EFEFEF;
	padding: 30px 30px 25px;
}

.m-newsletter--center h3{
	font-size: 24px;
    font-weight: 700;
}


.m-newsletter--center form{
	margin-top: 20px;
}

.m-newsletter--center form input{
    padding: 11px;
    border-radius: 4px;
    font-size: 14px;
}

.m-newsletter--center form input:first-of-type{
	border: 1px solid #353535;
    padding: 4px 25px;
	margin-right: 15px;
}

.m-newsletter--center form input:last-of-type{
    background-color: #FAA500;
    color: #fff;
	padding: 5px 20px;
}


@media only screen and (max-width: 340px) {
.m-newsletter--center form input:first-of-type{
    padding: 4px 15px;
	margin-right: 10px;
}

.m-newsletter--center form input:last-of-type{
	padding: 5px 15px;
}

.m-newsletter--center h3{
	font-size: 22px;
}


}



</style>
