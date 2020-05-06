<template>
	<header class="header">
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

<style lang="scss">
#logo {
	width: auto;
	height: 2rem;
	display: block;
	position: relative;
}

nav[role="navigation"] {
  text-align: right;

  a {
    display: inline-block;
    font-weight: normal;
    text-decoration: none;
    border-bottom: .1em solid transparent;

    &:hover {
      border-bottom-color: var(--yellow);
    }
  }
}

.header {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
	align-items: center;
  margin-bottom: 4rem;
	box-shadow: 0 0 1rem rgba(0,0,0,.05);
	width: 100%;

	nav {
		font-size: .875rem;
	}
}

.nav__link {
  margin-left: 1em;
  font-weight: bold;
}

.nav__link.active--exact {
  border-bottom-color: var(--yellow);
}
</style>
