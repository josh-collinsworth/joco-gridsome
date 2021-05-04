<template>
  <pre :class="`language-${lang}`"
    ><code :class="`language-${lang}`"
      ><slot 
    /></code
  ></pre>  
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/scss/_vars';
@import '../assets/css/scss/prism';

pre {
  font-family: 'MonoLisa', 'Courier', monospace;
  font-style: normal;
  font-weight: normal;
  background: var(--darkerGray);
  background: #2c292d; //the Monokai background color
  padding: 1.5em;
  margin: 2rem auto;
  color: var(--white);
  border-radius: 0.5em;
	font-size: .8rem;
  overflow: auto;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  code {
    background: transparent;
    font-size: inherit;
    padding: 0;
  }
}
</style>
