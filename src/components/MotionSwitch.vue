<template>
	<button
		id="motion-toggle"
		@click="toggleReducedMotion"
		:title="enableOrDisable + ' reduced motion'"
		:aria-pressed="reduceMotion"
	>
		<span class="sr">{{ enableOrDisable }} reduced motion</span>
		Motion
	</button>
</template>

<script>
export default {
	props: {
		reduceMotion: Boolean,
		required: true
	},
	methods: {
		toggleReducedMotion() {
			this.$emit('toggleReduceMotion')
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
	bottom: 4rem;
	font-weight: bold;
	font-size: .5rem;
	color: var(--darkGray);

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
}
</style>
