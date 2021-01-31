<template>
	<div>
		<header class="header">
			<a class="skip-to-content-link" href="#main">
				Skip to main content
			</a>

			<g-link id="logo" to="/" :class="{ 'sticky': menuOpen }">
				<LogoSVG />
				<span class="sr">Home</span>
			</g-link>

			<MainNav :menu-open="menuOpen" @toggleMenu="toggleMenu" />
		</header>
		<Grid />
	</div>
</template>

<script>
import LogoSVG from './LogoSVG'
import Grid from '~/components/Grid'
import MainNav from '~/components/MainNav'

export default {
	components: {
		LogoSVG, Grid, MainNav
	},

	data: () => ({
		menuOpen: false
	}),
	
	methods: {
		toggleMenu() {
			this.menuOpen = !this.menuOpen
		}
	}
}
</script>

<style lang="scss" scoped>
#logo {
	width: auto;
	height: 2rem;
	display: block;
	position: relative;
	z-index: 4;

	&.sticky {
		position: fixed;
		top: 2.5rem;

		--ink: var(--white);
	}

	svg {
		width: auto;
	}
}

.header {
  display: flex;
  justify-content: space-between;
	align-items: center;
	width: 100%;
	position: relative;
	z-index: 3;
	min-height: calc(90px + 2rem);
}

.skip-to-content-link {
	transition: all .15s cubic-bezier(0.86, 0, 0.07, 1);
	position: absolute;
	top: 0;
	left: -100vw;
	padding: .5em;
	opacity: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 3rem;
	background: var(--darkBlue);
	color: var(--white);

	&:focus {
		left: 0;
		opacity: 1;
		z-index: 10;
	}
}
</style>
