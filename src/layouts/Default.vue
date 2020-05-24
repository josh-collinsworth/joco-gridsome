<template>
  <div :class="{ 'reduce-motion': reduceMotion }">
    <Header />
    <div class="layout">
      <transition name="pageslide" appear mode="out-in">
        <main id="main">
          <slot />
        </main>
      </transition>
    </div>
    <Footer />
    <Settings :reduce-motion="reduceMotion" @toggleReduceMotion="toggleReduceMotion" />
  </div>
</template>

<script>
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Settings from '~/components/settings/Settings';

export default {
  components: { Header, Footer, Settings },
  data: () => ({
    reduceMotion: false
  }),
  mounted() {
    if(typeof window == 'undefined') return

    const userMotionPreference = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const storedMotionPreference = window.localStorage.getItem('collinsworth-reduce-motion')

		if((userMotionPreference && storedMotionPreference != 'false') || storedMotionPreference == 'true') {
			this.reduceMotion = true
		}
  },
  methods: {
    toggleReduceMotion() {
      if(typeof window == 'undefined') return

      this.reduceMotion = !this.reduceMotion

      if(this.reduceMotion) {
        window.localStorage.setItem('collinsworth-reduce-motion', 'true')
        } else {
        window.localStorage.setItem('collinsworth-reduce-motion', 'false')
      }
    }
  },
}
</script>



<style lang="scss">
.categories li a {
  background: var(--header-color);
  padding: 0.5em;
  border-radius: 8px;
  text-align: center;
  color: var(--paper);
  font-weight: bold;
  text-decoration: none;
}

.fullwidth {
  width: 100vw;
  grid-column: grid-start / grid-end!important; //Necessary to override specificity of `main > *` selector
}

.wider {
  width: calc(100vw - 1rem);
  margin-left: -.5rem;

  @media (min-width: 768px) {
    width: calc(100vw - 4rem);
    margin-left: 0;
  }

  @media (min-width: 1024px) {
    width: calc(100vw - 8rem);
  }

  @media (min-width: 1200px) {
    width: calc(100vw - 12rem);
  }
}

.layout {
  --left-column: 0;
  display: grid;
  grid-template-columns:
    [grid-start]
      var(--left-column)
    [content-start]
      minmax(18rem, var(--max-width))
    [content-end]
      1fr
    [right-gutter-start]
      var(--left-column)
    [grid-end];
  grid-gap: 1rem;
  margin: 2rem 0 4rem 0;
  position: relative;

  main {
    width: 100%;
    display: inherit;
    grid-template-columns: inherit;
    grid-gap: inherit;
    grid-column: grid-start / grid-end;
    align-items: start;

    & > * {
      grid-column: content-start / content-end;
    }
  }

	@media (min-width: 768px){
    --left-column: 1rem; //grid-gap + 1 = 2
  }

	@media (min-width: 1024px){
    --left-column: 3rem; //grid-gap + 3 = 4
  }

	@media (min-width: 1200px){
    --left-column: 5rem; // grid-gap + 5 = 6
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
    transform: translateY(.5rem);
	}
}
</style>
