<template>
  <div id="app" :class="{
    'reduce-motion': reduceMotion,
    'prefers-dark': prefersDark,
    'prefers-light': prefersLight,
    'mounted': ready }"
  >
    <div class="layout">
      <main id="main" tabindex="-1"
        <slot/>
      </main>
    </div>
    <Settings
      :reduce-motion="reduceMotion"
      @toggleReduceMotion="toggleReduceMotion"
      @prefersDarkMode="setDarkMode"
      @prefersLightMode="setLightMode"
    />
  </div>
</template>


<script>
import Settings from '../components/settings/Settings'

export default {
	components: { Settings },

  // TODO: this is all just copied from Default.vue. Should find a way to more cleanly reuse it between Default and here.
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
@import '../assets/css/global';

body {
  padding: 0 !important;
}
</style>
