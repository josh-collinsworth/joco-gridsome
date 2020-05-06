<template>
	<div>
		<Header />
			<div class="layout">
				<main id="main">
					<transition name="pageslide" mode="out-in">
						<router-view />
					</transition>
				</main>
			</div>
		<Footer />
    <DarkModeSwitch />
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import DarkModeSwitch from './components/DarkModeSwitch'

export default {
  components: { Header, Footer, DarkModeSwitch },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  },
}
</script>

<style lang="scss">
.post-list {
  list-style: none;
  padding-left: 0;

  li {
    padding: 1em 0;
  }
}

.categories li a {
  background: var(--darkGray);
  padding: 0.5em;
  border-radius: 8px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
}

main .fullwidth {
  width: 100vw;
  margin-left: calc(50% - 50vw);
}

.layout {
  width: 100%;
  margin: 0 auto;
  max-width: var(--max-width);
  padding: 0 2rem;
	position: relative;
	min-height: 100vh;

	@media (min-width: var(--max-width)){
		padding: 0;
	}
}

.pageslide {

	&-enter-active {
		transition: all .35s cubic-bezier(.22,.61,.36,1);
		transition-delay: .05s;
	}

	&-leave-active {
		transition: all .25s cubic-bezier(.55,.06,.68,.19);
	}

	&-enter, &-leave-to {
		opacity: 0;
	}

	&-enter {
		transform: translateY(1rem);
		}

	&-leave-to {
		transform: translateY(1rem);
	}
}
</style>
