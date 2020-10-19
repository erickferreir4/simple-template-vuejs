<template>

	<div v-if="!isMobile()">
		<Desktop>
		</Desktop>
	</div>

	<div v-else>
		<Mobile>
		</Mobile>
	</div>

</template>

<script>

import Desktop from './components/Desktop.vue'
import Mobile from './components/Mobile.vue'



export default {
  name: 'App',
  components: {
	Desktop,
	Mobile
  },
  methods: {
	isMobile() {
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			return true
		} else {
			return false
		}
	}
  }
}
</script>

<style>
#app, a {
	font-family: 'Titillium Web', sans-serif;
	color: #353535
}

@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;400;700&display=swap');

/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

a {
	text-decoration: none;
}

button, input, select {
	outline: none;
}

* {
	padding:0;
	margin:0;
	vertical-align:baseline;
	list-style:none;
	border:0
}

</style>
