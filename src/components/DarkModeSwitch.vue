<template>
	<button id="dark-mode-toggle" @click="toggleDarkMode" :class="this.darkMode && 'dark'">
		<LightDarkIcon />
	</button>
</template>


<script>
import LightDarkIcon from './LightDarkIcon'

export default {
	components: { LightDarkIcon },
	data: () => ({
		darkMode: false
	}),
	watch: {
		darkMode(to) {
			localStorage.setItem('collinsworth-dark-mode', JSON.stringify(to))
		}
	},
  mounted() {
		const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		this.darkMode = JSON.parse(localStorage.getItem('collinsworth-dark-mode'))

		if(userPrefersDark && this.darkMode === null) {
			this.setDarkModeColors()
			this.darkMode = true
		} else if (this.darkMode) {
			this.setDarkModeColors()
		}
  },
  methods: {
    toggleDarkMode() {

			if(this.darkMode !== true && this.darkMode !== false) {
				localStorage.setItem('collinsworth-dark-mode', JSON.stringify(false))
			}

			this.darkMode = !this.darkMode

			this.darkMode ? this.setDarkModeColors() : this.setLightModeColors()
		},
		setDarkModeColors() {
			this.updateCustomProperty({
				'--paper': '#101820',
				'--ink': '#ffffff',
				'--darkGray': '#ffffff',
				'--heading-color': 'var(--lightBlue)',
				'--link-color': 'var(--lightBlue)',
			})
		},
		setLightModeColors() {
			this.updateCustomProperty({
				'--paper': '#ffffff',
				'--ink': '#101820',
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
	background: var(--paper);
	z-index: 10;

	&:hover svg {
		path, circle {
			stroke: var(--yellow)!important;
		}
	}

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
			transition: .4s cubic-bezier(.7,-0.01,0,1.01);
			stroke: var(--darkGray) !important;
		}
	}
}
</style>
