<template>
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
</template>

<script>
import LogoSVG from './LogoSVG'

export default {
	components: {
		LogoSVG
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
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
	align-items: center;
	box-shadow: 0 0 1rem rgba(0,0,0,.05);
	width: 100%;

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
