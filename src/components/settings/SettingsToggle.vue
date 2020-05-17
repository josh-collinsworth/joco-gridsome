<template>
	<button
		id="settings-toggle"
		:class="{ 'open': settingsOpen }"
		@click="$emit('toggleSettingsOpen')"
	>
		<SettingsIcon />
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
				fill: var(--darkGray);
			}

			&.settings-track {
				stroke: var(--darkGray);
			}
		}

		&:hover svg {

			.settings-slider {
				fill: var(--yellow);
			}
		}
	}
</style>
