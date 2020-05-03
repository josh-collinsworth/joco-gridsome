<template>
	<div>
		<Header />
		<Layout>
			<transition name="pageturn" mode="out-in">
				<router-view />
			</transition>
		</Layout>
		<footer>This is the footer</footer>
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

export default {
	components: { Header },
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

footer {
  width: 100%;
  min-height: 100px;
  background: var(--lightBlue);
}

.pageturn {

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
