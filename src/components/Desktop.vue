<template>
	<div id="app">
		<Header>
		</Header>
		<Banner>
		</Banner>
		<Tipbar>
		</Tipbar>

		<Brands>
		</Brands>

		<Vitrine>
		</Vitrine>

		<Banner2>
		</Banner2>

		<Newsletter>
		</Newsletter>

		<Footer>
		</Footer>

		<Popup>
		</Popup>


	</div>
</template>


<script>

import Header from './Desktop/Header.vue'
import Banner from './Desktop/Banner.vue'
import Tipbar from './Desktop/Tipbar.vue'
import Brands from './Desktop/Brands.vue'
import Vitrine from './Desktop/Vitrine.vue'
import Banner2 from './Desktop/Banner2.vue'
import Newsletter from './Desktop/Newsletter.vue'
import Footer from './Desktop/Footer.vue'
import Popup from './Desktop/Popup.vue'

export default {
	name: 'Desktop',
	components: {
		Header,
		Banner,
		Tipbar,
		Brands,
		Vitrine,
		Banner2,
		Newsletter,
		Footer,
		Popup
	}
}

</script>


<style>
</style>
