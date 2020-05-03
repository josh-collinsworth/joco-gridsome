<template>
	<div>
		<Header />
		<Layout>
			<transition name="pageslide" mode="out-in">
				<router-view />
			</transition>
		</Layout>
		<Footer />
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

export default {
	components: { Header, Footer },
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
  }
}
</script>

<style lang="scss">
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
