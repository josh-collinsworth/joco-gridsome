<template>
	<button id="hamburger" :aria-pressed="menuOpen" :class="{'sticky': menuOpen}" @click="toggleMenu">
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
			return this.menuOpen ? 'Close' : 'Open'
		}
	},

	methods: {
		toggleMenu() {
			this.$emit('toggleMenu')
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
	margin-left: auto;
	border: none;
	background: transparent;
	position: relative;
	z-index: 4;

	&.sticky {
		position: fixed;
		top: 2.5rem;
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
