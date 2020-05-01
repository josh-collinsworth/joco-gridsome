<template>
	<header class="header">
		<g-link id="logo" to="/">
			<img id="jc-logo" src="images/2020-logo.svg" />
		</g-link>
		<nav class="nav" role="navigation">
			<!-- <g-link v-for="page in allPagesNoHome" :key="page.node.id" class="nav__link" :to="'/' + page.node.slug">
				{{page.node.title}}
			</g-link> -->
			<button @click="toggleDarkMode">☾</button>
			<g-link class="nav__link" to="/projects">Projects</g-link>
			<g-link class="nav__link" to="/about">About</g-link>
			<g-link class="nav__link" to="/design">Design</g-link>
			<g-link class="nav__link" to="/blog">Blog</g-link>
			<g-link class="nav__link" to="/contact">Contact</g-link>
			<g-link class="nav__link" to="/uses">Uses</g-link>
		</nav>
	</header>
</template>

<script>
export default {
	mounted() {
		const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		console.log(userPrefersDark)

		if(userPrefersDark) {
			console.log(userPrefersDark)
			this.setDarkModeColors()
			localStorage.setItem('josh-collinsworth-dark-mode', JSON.stringify(true))
		}
	},
	methods: {
		toggleDarkMode() {
			let darkMode = JSON.parse(localStorage.getItem('josh-collinsworth-dark-mode'))

			if(darkMode !== true && darkMode !== false) {
				localStorage.setItem('josh-collinsworth-dark-mode', JSON.stringify(false))
				return
			}

			darkMode = !darkMode
			localStorage.setItem('josh-collinsworth-dark-mode', JSON.stringify(darkMode))

			darkMode ? this.setDarkModeColors() : this.setLightModeColors()

			// --yellow: #ffd100;
			// --orange: #ff6a13;
			// --lightGray: #a7a8aa;
			// --midGray: #888b8d;
			// --darkGray: #53565a;
			// --black: #101820;
			// --lightBlue: #7ba7bc;
			// --darkBlue: #34657f;

			// --column-width: 12vw;
			// --max-width: 36em;
		},
		setDarkModeColors() {
			this.updateCustomProperty({
				'--white': '#101820',
				'--black': '#ffffff',
				'--darkGray': '#ffffff',
				'--heading-color': 'var(--lightBlue)',
				'--link-color': 'var(--lightBlue)',
			})
		},
		setLightModeColors() {
			this.updateCustomProperty({
				'--white': '#ffffff',
				'--black': '#101820',
				'--darkGray': '#53565a',
				'--heading-color': 'var(--darkGray)',
				'--link-color': 'var(--darkBlue)',
			})
		},
		updateCustomProperty(props = {}) {
			Object.entries(props).forEach(set => {
				document.documentElement.style.setProperty(set[0], set[1])
			})
		}
	}
}
</script>


<style lang="scss">
#logo  {
  width: 4em;
}

#jc-logo {
  max-width: 4em;
}

nav[role="navigation"] {
  text-align: center;

  a {
    display: inline-block;
    font-weight: normal;
    text-decoration: none;
    border-bottom: .1em solid transparent;

    &:hover {
      border-bottom-color: var(--yellow);
    }
  }
}

.header {
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
}

.nav__link {
  margin-left: 1em;
  font-weight: bold;
}

.nav__link.active--exact {
  border-bottom-color: var(--yellow);
}
</style>
