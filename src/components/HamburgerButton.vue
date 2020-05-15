<template>
	<button id="hamburger" :aria-pressed="menuOpen" :class="{'sticky': menuOpen}" @click="$emit('toggleMenu')">
		<span class="sr">{{ openOrClose }} menu</span>
		<div class="line" aria-hidden="true"></div>
		<div class="line" aria-hidden="true"></div>
		<div class="line" aria-hidden="true"></div>
	</button>
</template>

<script>
export default {
	props: {
		menuOpen: Boolean,
		required: true,
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
	justify-content: space-between;
	flex-direction: column;
	align-items: stretch;
	width: 2.5rem;
	height: 2rem;
	padding: .5rem;
	border: none;
	background: transparent;
	position: relative;
	z-index: 4;

	&.sticky {
		position: fixed;
		top: 1.5rem;
		right: 1rem;

		.line {
			background: var(--white);
		}
	}

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
