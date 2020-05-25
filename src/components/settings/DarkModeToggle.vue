<template>
	<button
		id="dark-mode-toggle"
		@click="toggleDarkMode"
		:class="{ 'dark': darkMode, 'shown': settingsOpen }"
		:title="enableOrDisable + ' dark mode'"
		:aria-pressed="darkMode"
		:aria-hidden="!settingsOpen"
		:tabindex="settingsOpen ? 0 : -1"
	>
		<span class="sr">{{ enableOrDisable }} dark mode</span>
		<LightDarkIcon />
	</button>
</template>


<script>
import LightDarkIcon from './LightDarkIcon'

export default {
	props: {
		settingsOpen: {
			type: Boolean,
			required: true
		}
	},
	components: { LightDarkIcon },
	data: () => ({
		darkMode: false
	}),
	watch: {
		darkMode(to) {
			localStorage.setItem('collinsworth-dark-mode', JSON.stringify(to))
		}
	},
  created() {
		if(typeof window == 'undefined') return
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
				'--header-color': 'var(--white)',
				'--accent-color': 'var(--lightBlue)',
				'--link-color': 'var(--lightBlue)',
			})
		},
		setLightModeColors() {
			this.updateCustomProperty({
				'--paper': '#ffffff',
				'--ink': '#53565a',
				'--header-color': 'var(--darkGray)',
				'--accent-color': 'var(--darkBlue)',
				'--link-color': 'var(--darkBlue)',
			})
		},
		updateCustomProperty(props = {}) {
			Object.entries(props).forEach(set => {
				document.documentElement.style.setProperty(set[0], set[1])
			})
		},
	},
	computed: {
		enableOrDisable() {
			return this.darkMode ? 'Disable' : 'Enable'
		}
	}
}
</script>


<style lang="scss">
button#dark-mode-toggle {

	&.shown {
		transform: translateY(calc((var(--button-size) * -2) - 1.5rem));
	}

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
			stroke: var(--ink) !important;
		}
	}
}
</style>
