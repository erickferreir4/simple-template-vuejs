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

import Header from './Mobile/Header.vue'
import Banner from './Mobile/Banner.vue'
import Tipbar from './Mobile/Tipbar.vue'
import Brands from './Mobile/Brands.vue'
import Vitrine from './Mobile/Vitrine.vue'
import Banner2 from './Mobile/Banner2.vue'
import Newsletter from './Mobile/Newsletter.vue'
import Footer from './Mobile/Footer.vue'
import Popup from './Mobile/Popup.vue'

export default {
	name: 'Mobile',
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
