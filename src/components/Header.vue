<template>
	<header class="header">
		<g-link id="logo" to="/">
			<img id="jc-logo" src="/images/2020-logo.svg" />
		</g-link>
		<nav class="nav" role="navigation">
			<button id="dark-mode-toggle" @click="toggleDarkMode" :class="this.darkMode && 'dark'">
				<LightDarkIcon />
			</button>
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
import LightDarkIcon from './LightDarkIcon'

export default {
	components: {
		LightDarkIcon
	},
	data: () => ({
		darkMode: false
	}),
	mounted() {
		const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		this.darkMode = JSON.parse(localStorage.getItem('collinsworth-dark-mode'))

		if(userPrefersDark && this.darkMode === null) {
			this.setDarkModeColors()
			this.darkMode = true
		}

		const allLinks = document.querySelectorAll('a');
	},
	watch: {
		darkMode(to) {
			localStorage.setItem('collinsworth-dark-mode', JSON.stringify(to))
		}
	},
	methods: {
		toggleDarkMode() {

			if(this.darkMode !== true && this.darkMode !== false) {
				localStorage.setItem('collinsworth-dark-mode', JSON.stringify(false))
			}

			this.darkMode = !this.darkMode

			this.darkMode ? this.setDarkModeColors() : this.setLightModeColors()

			// --yellow: #ffd100;
			// --orange: #ff6a13;
			// --lightGray: #a7a8aa;
			// --midGray: #888b8d;
			// --darkGray: #53565a;
			// --black: #101820;
			// --lightBlue: #7ba7bc;
			// --darkBlue: #34657f;
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
		},
	}
}
</script>


<style lang="scss">
#logo  {
  width: 4em;
}

#jc-logo {
  max-width: 4em;
	display: block;
}

nav[role="navigation"] {
  text-align: right;

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
	$white: var(--white);
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
	align-items: center;
  margin-bottom: 4rem;
	box-shadow: 0 0 1rem rgba(0,0,0,.05);
	width: 100%;
}

.nav__link {
  margin-left: 1em;
  font-weight: bold;
}

.nav__link.active--exact {
  border-bottom-color: var(--yellow);
}

button#dark-mode-toggle {
	position: fixed;
	left: 1rem;
	bottom: 1rem;
	height: calc(2rem + .2rem);
	width: calc(2rem + .2rem);
	overflow: hidden;
	padding: 0;
	border: none;
	border-radius: 2rem;
	border: 2px solid var(--darkGray);
	background: var(--white);
	z-index: 10;

	&.dark svg {
		transform: translateY(0);
	}

	svg {
		width: 2rem;
		height: 4rem;
		transform: translateY(-1.975rem);
		transition: .4s cubic-bezier(.7,-0.01,0,1.01);

		path,
		circle {
			stroke: var(--darkGray) !important	;
		}
	}
}
</style>
