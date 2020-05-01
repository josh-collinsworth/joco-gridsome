<template>
	<header class="header">
		<g-link id="logo" to="/">
			<img id="jc-logo" src="https://joshcollinsworth.com/wp-content/uploads/2017/12/JC-Mark-2018.svg" />
		</g-link>
		<nav class="nav" role="navigation">
			<!-- <g-link v-for="page in allPagesNoHome" :key="page.node.id" class="nav__link" :to="'/' + page.node.slug">
				{{page.node.title}}
			</g-link> -->
			<button @click="toggleDarkMode">☾</button>
			<g-link class="nav__link" to="/projects">Projects</g-link>
			<g-link class="nav__link" to="/about">About</g-link>
			<g-link class="nav__link" to="/design">Design</g-link>
			<g-link class="nav__link" to="/blog">Blog</g-link>
			<g-link class="nav__link" to="/contact">Contact</g-link>
			<g-link class="nav__link" to="/uses">Uses</g-link>
		</nav>
	</header>
</template>

<script>
export default {
	methods: {
		toggleDarkMode() {
			let darkMode = JSON.parse(localStorage.getItem('josh-collinsworth-dark-mode'))

			if(darkMode !== true && darkMode !== false) {
				localStorage.setItem('josh-collinsworth-dark-mode', JSON.stringify(false))
				return
			}

			darkMode = !darkMode
			localStorage.setItem('josh-collinsworth-dark-mode', JSON.stringify(darkMode))

			if (darkMode) {
				document.documentElement.style.setProperty('--white', '#101820')
				document.documentElement.style.setProperty('--black', '#ffffff')
				document.documentElement.style.setProperty('--darkGray', '#ffffff')
				document.documentElement.style.setProperty('--heading-color', 'var(--lightBlue)')
				document.documentElement.style.setProperty('--link-color', 'var(--lightBlue)')
			} else {
				document.documentElement.style.setProperty('--white', '#ffffff')
				document.documentElement.style.setProperty('--black', '#101820')
				document.documentElement.style.setProperty('--darkGray', '#53565a')
				document.documentElement.style.setProperty('--heading-color', 'var(--darkGray)')
				document.documentElement.style.setProperty('--link-color', 'var(--darkBlue)')
			}

			// --yellow: #ffd100;
			// --orange: #ff6a13;
			// --lightGray: #a7a8aa;
			// --midGray: #888b8d;
			// --darkGray: #53565a;
			// --black: #101820;
			// --lightBlue: #7ba7bc;
			// --darkBlue: #34657f;

			// --column-width: 12vw;
			// --max-width: 36em;
		}
	}
}
</script>


<style lang="scss">
#logo  {
  width: 4em;
}

#jc-logo {
  max-width: 4em;
}

nav[role="navigation"] {
  text-align: center;

  a {
    display: inline-block;
    font-weight: normal;
    text-decoration: none;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom-color: var(--yellow);
    }
  }
}

.header {
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
}

.nav__link {
  margin-left: 1em;
  font-weight: bold;
}

.nav__link.active--exact {
  border-bottom: 4px solid var(--yellow);
}
</style>
