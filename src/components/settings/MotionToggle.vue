<template>
	<button
		id="motion-toggle"
		@click="$emit('toggleReduceMotion')"
		:class="{ 'shown': settingsOpen }"
		:title="enableOrDisable + ' reduced motion'"
		:aria-pressed="reduceMotion"
		:aria-hidden="!settingsOpen"
		:tabindex="settingsOpen ? 0 : -1"
	>
		<span class="sr">{{ enableOrDisable }} reduced motion</span>
		Motion
	</button>
</template>

<script>
export default {
	props: {
		reduceMotion: {
			type: Boolean,
			required: true
		},
		settingsOpen: {
			type: Boolean,
			required: true
		}
	},
	computed: {
		enableOrDisable() {
			return this.reduceMotion ? 'Disable' : 'Enable'
		}
	}
}
</script>

<style lang="scss">
button#motion-toggle {
	font-weight: bold;
	font-size: .5rem;
	color: var(--darkGray);

	&.shown {
		transform: translateY(calc(-2.2rem - 0.75rem));
	}

	&[aria-pressed="true"]:before {
		content: '';
		width: 100%;
		height: .1rem;
		background: var(--darkGray);
		display: block;
		position: absolute;
		transform-origin: center;
		top: calc(50% - .05rem);
		transform: rotate(-45deg);
	}

	&:hover {
		color: var(--yellow);
	}
}
</style>
