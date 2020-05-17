<template>
	<form id="settings" @submit.prevent="" :class="{ 'open': settingsOpen }">
		<DarkModeToggle :settings-open="settingsOpen"/>
		<MotionToggle :settings-open="settingsOpen" :reduce-motion="reduceMotion" @toggleReduceMotion="$emit('toggleReduceMotion')"/>
		<SettingsToggle :settings-open="settingsOpen" @toggleSettingsOpen="toggleSettingsOpen" />
	</form>
</template>


<script>
import MotionToggle from './MotionToggle'
import DarkModeToggle from './DarkModeToggle'
import SettingsToggle from './SettingsToggle'

export default {
	props: {
		reduceMotion: Boolean,
		required: true
	},
	data: () => ({
		settingsOpen: false
	}),
	components: {
		MotionToggle, DarkModeToggle, SettingsToggle
	},
	methods: {
		toggleSettingsOpen() {
			this.settingsOpen = !this.settingsOpen
		}
	}
}
</script>


<style lang="scss">
#settings {
	--button-size: 2.2rem;
	position: fixed;
	left: 1rem;
	bottom: 1rem;
	overflow: visible;
	z-index: 10;
}

#settings-toggle,
#dark-mode-toggle,
#motion-toggle {
  position: absolute;
  left: .1rem;
  bottom: .1rem;
  height: var(--button-size);
  width: var(--button-size);
  overflow: hidden;
  padding: 0;
  border-radius: 2rem;
  border: .1rem solid var(--darkGray);
  background: var(--paper);
  transition: all .25s cubic-bezier(1, 0, 0, 1);

  &:hover {
    background: var(--paper);
  }
}

#dark-mode-toggle {
	transition-delay: .075s;
}
</style>
