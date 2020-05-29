<template>
  <div :class="{ 'reduce-motion': reduceMotion }">
    <Header />
    <div class="layout">
      <transition name="pageslide" appear>
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
  --margin: 1rem;
  margin: 0 var(--margin) 4rem var(--margin);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  main {
    width: 100%;
    max-width: var(--max-width);
  }

	@media (min-width: 768px){
    --margin: 2rem;
  }

	@media (min-width: 1024px){
    --margin: 4rem;
  }

	@media (min-width: 1200px){
    --margin: 6rem;
	}
}

.pageslide {

	&-enter-active {
		transition: opacity .35s cubic-bezier(.22,.61,.36,1), transform .35s cubic-bezier(.22,.61,.36,1);
	}

	&-leave-active {
		transition: opacity .25s cubic-bezier(.55,.06,.68,.19), transform .25s cubic-bezier(.55,.06,.68,.19);
	}

	&-enter, &-leave-to {
    opacity: 0;
    transform: translateY(.5rem);
	}
}
</style>
