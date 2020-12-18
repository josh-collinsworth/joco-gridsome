<template>
  <div :class="{ 'reduce-motion': reduceMotion, 'prefers-dark': prefersDark, 'prefers-light': prefersLight, 'mounted': ready }">
    <Header />
    <div class="layout">
      <main id="main">
        <slot />
      </main>
    </div>
    <Footer />
    <Settings :reduce-motion="reduceMotion" @toggleReduceMotion="toggleReduceMotion" @prefersDarkMode="setDarkMode" @prefersLightMode="setLightMode" />
  </div>
</template>

<script>
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Settings from '~/components/settings/Settings';

export default {
  components: { Header, Footer, Settings },
  data: () => ({
    reduceMotion: false,
    prefersDark: false,
    prefersLight: false,
    ready: false
  }),

  created() {
    if(typeof window == 'undefined') return

    const userMotionPreference = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const storedMotionPreference = window.localStorage.getItem('collinsworth-reduce-motion')

		if((userMotionPreference && storedMotionPreference != 'false') || storedMotionPreference == 'true') {
			this.reduceMotion = true
    }

    this.ready = true
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
    },
    setDarkMode() {
      this.prefersLight = false;
      this.prefersDark = true;
    },
    setLightMode() {
      this.prefersDark = false;
      this.prefersLight = true;
    },
  },
}
</script>



<style lang="scss">
#app.mounted {
  transition: inherit;
}

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
  margin-left: calc(var(--margin) * -1);
}

.wider {
  width: calc(100vw - 1rem);
  margin-left: -.5rem;

  @media (min-width: 768px) {
    width: calc(100vw - 4rem);
    margin-left: calc(var(--margin) / -2);
  }

  @media (min-width: 1024px) {
    width: calc(100vw - 8rem);
  }

  @media (min-width: 1200px) {
    width: calc(100vw - 12rem);
  }

  @media (min-width: 1680px) {
    width: calc(200%);
    margin-left: -25%;
  }
}

.layout {
  margin: 0 var(--margin) 4rem var(--margin);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: calc(100% - (var(--margin) * 2));

  main {
    width: 100%;
    max-width: var(--max-width);
  }
}
</style>
