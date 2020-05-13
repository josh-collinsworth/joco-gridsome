<template>
	<button id="hamburger" :aria-pressed="menuOpen" @click="$emit('toggleMenu')">
		<span class="sr">{{ openOrClose }} menu</span>
		<div class="line" aria-hidden="true"></div>
		<div class="line" aria-hidden="true"></div>
		<div class="line" aria-hidden="true"></div>
	</button>
</template>

<script>
export default {
	props: {
		menuOpen: Boolean
	},
	computed: {
		openOrClose() {
			return this.menuOpen ? "Close" : "Open"
		}
	}
}
</script>

<style lang="scss" scoped>
	#hamburger {
		display: flex;
		flex-wrap: wrap;
		align-content: space-between;
		width: 1.5rem;
		height: 1rem;
		padding: 0;
		border: none;
		background: transparent;
		position: relative;
		z-index: 4;

		.line {
			width: 100%;
			height: 2px;
			background: var(--ink);
		}

		@media (min-width: 768px) {
			display: none;
		}
	}
</style>
