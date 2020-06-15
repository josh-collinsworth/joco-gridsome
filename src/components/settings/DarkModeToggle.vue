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
  created() {
		if(typeof window == 'undefined') return
		const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		this.darkMode = JSON.parse(localStorage.getItem('collinsworth-dark-mode'))

		console.log(this.darkMode)
		console.log(userPrefersDark)

		if (this.darkMode) {
			this.setDarkModeColors()
		}

		if (userPrefersDark && !this.darkMode) {
			this.darkMode = true
		}
  },
  methods: {
    toggleDarkMode() {
			if(typeof this.darkMode !== "boolean") {
				localStorage.setItem('collinsworth-dark-mode', JSON.stringify(false))
			}
			this.darkMode = !this.darkMode
			this.darkMode ? this.setDarkModeColors() : this.setLightModeColors()
			localStorage.setItem('collinsworth-dark-mode', JSON.stringify(this.darkMode))
		},
		setDarkModeColors() {
			this.updateCustomProperty({
				'--paper': '#101820',
				'--ink': '#ffffff',
				'--header-color': 'var(--white)',
				'--accent-color': 'var(--lightBlue)',
				'--link-color': 'var(--lightBlue)',
				'--highlight-color': 'var(--darkerGray)',
			})
		},
		setLightModeColors() {
			this.updateCustomProperty({
				'--paper': '#ffffff',
				'--ink': '#53565a',
				'--header-color': 'var(--darkGray)',
				'--accent-color': 'var(--darkBlue)',
				'--link-color': 'var(--darkBlue)',
				'--highlight-color': 'var(--darkGray)',
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
			stroke: var(--yellow);
		}
	}

	&.dark svg {
		transform: translateY(0);
	}

	svg {
		width: 2rem;
		height: 4rem;
		transform: translateY(-1.975rem);
		transition: all .4s cubic-bezier(.7,-0.01,0,1.01);

		path,
		circle {
			transition: all .4s cubic-bezier(.7,-0.01,0,1.01);
			stroke: var(--ink);
		}
	}
}
</style>
