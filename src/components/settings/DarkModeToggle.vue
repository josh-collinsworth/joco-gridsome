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
		if (typeof window == 'undefined') return

		const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		this.darkMode = JSON.parse(localStorage.getItem('collinsworth-dark-mode') || false)

		if (this.darkMode || userPrefersDark && this.darkMode !== false) {
			this.setDarkModeColors()
		} else {
			this.setLightModeColors()
		}
	},

  methods: {
    toggleDarkMode() {
			if (typeof this.darkMode !== "boolean" && typeof window !== 'undefined') {
				window.localStorage.setItem('collinsworth-dark-mode', JSON.stringify(false))
			}
			this.darkMode = !this.darkMode
			this.darkMode ? this.setDarkModeColors() : this.setLightModeColors()

			if (typeof window !== 'undefined') {
				window.localStorage.setItem('collinsworth-dark-mode', JSON.stringify(this.darkMode))
			}
		},

		setDarkModeColors() {
			this.$emit('prefersDarkMode')
			this.darkMode = true
		},

		setLightModeColors() {
			this.$emit('prefersLightMode')
			this.darkMode = false
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
