<template>
	<div>
		<header class="header">
			<a class="skip-to-content-link" href="#main">
				Skip to main content
			</a>
			<g-link id="logo" to="/">
				<LogoSVG />
			</g-link>
			<nav class="nav" role="navigation">
				<g-link class="nav__link" to="/projects">Projects</g-link>
				<g-link class="nav__link" to="/about">About</g-link>
				<g-link class="nav__link" to="/blog">Blog</g-link>
				<g-link class="nav__link" to="/contact">Contact</g-link>
				<g-link class="nav__link" to="/uses">Uses</g-link>
			</nav>
		</header>
		<Grid />
	</div>
</template>

<script>
import LogoSVG from './LogoSVG'
import Grid from '~/components/Grid'

export default {
	components: {
		LogoSVG, Grid
	}
}
</script>

<style lang="scss" scoped>
#logo {
	width: auto;
	height: 2rem;
	display: block;
	position: relative;
}

.header {
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: space-between;
	align-items: center;
	width: 100%;
	position: relative;
	z-index: 3;

	@media (min-width: 768px){
		padding: 1.5rem 2rem;
  }

	@media (min-width: 1024px){
		padding: 1.5rem 4rem;
	}

	@media (min-width: 1200px){
		padding: 1.5rem 6rem;
	}

	nav {
		font-size: .875rem;

		& > a:last-of-type {
			margin-right: 0;
		}
	}
}

.skip-to-content-link {
	transition: all .15s cubic-bezier(0.86, 0, 0.07, 1);
	position: absolute;
	top: 1rem;
	left: -100vw;
	padding: .5em;
	opacity: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 3rem;
	background: var(--yellow);

	&:focus {
		left: 0;
		opacity: 1;
		z-index: 2;
	}
}
</style>
