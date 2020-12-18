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

		if (this.darkMode || userPrefersDark && this.darkMode !== false) {
			this.setDarkModeColors()
			this.darkMode = true
		} else {
			this.setLightModeColors()
			this.darkMode = false
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
			this.$emit('prefersDarkMode')
		},

		setLightModeColors() {
			this.$emit('prefersLightMode')
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
