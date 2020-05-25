<template>
	<button
		id="settings-toggle"
		:class="{ 'open': settingsOpen }"
		:aria-pressed="settingsOpen"
		@click="$emit('toggleSettingsOpen')"
	>
		<SettingsIcon />
		<span class="sr">
			{{ settingsOpen ? 'Close' : 'Open' }} settings menu
		</span>
	</button>
</template>


<script>
import SettingsIcon from './SettingsIcon'

export default {
	props: {
		settingsOpen: {
			type: Boolean,
			required: true
		}
	},
	components: {
		SettingsIcon
	}
}
</script>


<style lang="scss">
	#settings-toggle {

		&.open svg {

			.settings-slider {
				transform: translateX(-30%);

				& + .settings-slider {
					transform: translateX(35%);

					& + .settings-slider {
						transform: translateX(-7%);
					}
				}
			}
		}

		svg path {
			transition: transform .25s cubic-bezier(1, 0, 0, 1), fill .15s ease, stroke .15s ease;

			&.settings-slider {
				fill: var(--ink);
			}

			&.settings-track {
				stroke: var(--ink);
			}
		}

		&:hover svg {

			.settings-slider {
				fill: var(--yellow);
			}
		}
	}
</style>
