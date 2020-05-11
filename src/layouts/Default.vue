<template>
  <div>
    <Header />
    <div class="layout">
      <transition name="pageslide" appear mode="out-in">
        <main id="main">
          <slot />
        </main>
      </transition>
    </div>
    <Footer />
    <DarkModeSwitch />
  </div>
</template>

<script>
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import DarkModeSwitch from '~/components/DarkModeSwitch'

export default {
  components: { Header, Footer, DarkModeSwitch }
}
</script>



<style lang="scss">
.categories li a {
  background: var(--darkGray);
  padding: 0.5em;
  border-radius: 8px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
}

.fullwidth {
  width: 100vw;
  margin-left: -1rem;

  @media (min-width: 768px) {
    margin-left: -2rem;
  }

  @media (min-width: 1024px) {
    margin-left: -4rem;
  }

  @media (min-width: 1200px) {
    margin-left: -6rem;
  }
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

  @media (min-width: 768px) {
    /* These calculations were tough so I'm just gonna leave them here for now */
    /* width: calc(100% + ((100vw - 32rem) / 2));
    margin-left: calc: ;(((100vw - 32rem) / 4) * -1); */
  }
}

.layout {
  width: 100%;
  margin: 2rem 0 4rem 0;
  padding: 0 1rem;
  max-width: var(--max-width);
	position: relative;

	@media (min-width: 768px){
    padding: 0;
		margin-left: 2rem;
  }

	@media (min-width: 1024px){
		margin-left: 4rem;
  }

	@media (min-width: 1200px){
		margin-left: 6rem;
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
}
</style>
