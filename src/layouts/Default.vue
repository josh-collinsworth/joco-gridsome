<template>
  <div class="layout">
    <div class="layout-container">

      <header class="header">
        <g-link id="logo" to="/">
          <img id="jc-logo" src="https://joshcollinsworth.com/wp-content/uploads/2017/12/JC-Mark-2018.svg" />
        </g-link>
        <nav class="nav" role="navigation">
          <g-link v-for="page in allPagesNoHome" :key="page.node.id" class="nav__link" :to="'/' + page.node.slug">
            {{page.node.title}}
          </g-link>
          <g-link class="nav__link" to="/about">About</g-link>
          <!-- <g-link class="nav__link" to="/code">Code</g-link>
          <g-link class="nav__link" to="/design">Design</g-link> -->
        </nav>
      </header>
      <transition name="fade" appear>
        <main>
          <div class="content">
            <slot/>
          </div>
        </main>
      </transition>
      <footer>This is the footer</footer>
    </div>
  </div>
</template>

<static-query>
query {
  allWordPressPage {
    edges {
      node { 
        id
        title
        slug
      }
    }
  }
}
</static-query>

<script>
export default {
  mounted() {

    console.log(`-----------------`)
    this.$static.allWordPressPage.edges.forEach(post => {
      console.log(post.node)
    })
    // console.log(this.$static.allWordPressPage.edges)
    console.log(`-----------------`)
  },
  computed: {
    allPagesNoHome() {
      return this.$static.allWordPressPage.edges.filter(page => page.node.title != 'Home');
    }
  }
};
</script>



<style lang="scss">
:root {
  --yellow: #ffd100;
  --orange: #ff6a13;
  --lightGray: #a7a8aa;
  --midGray: #888b8d;
  --darkGray: #53565a;
  --black: #101820;
  --lightBlue: #7ba7bc;
  --darkBlue: #34657f;

  --column-width: 12vw;
  --max-width: 36em;

  --breakpoint1: 760px;
  --breakpoint2: 840px;
  --breakpoint3: 960px;
  --breakpoint4: 1400px;
}

*, *:before, *:after {
  box-sizing: border-box;
}

body {
  font-family: "Source Serif Variable", "AmsiPro", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: var(--darkGray);
  font-size: 1.1875em;
  line-height: 1.5em;
  margin: 0;
}

#logo  {
  width: 4em;
}

#jc-logo {
  max-width: 4em;
}

.fade-enter-active {
  transition: all .6s cubic-bezier(0, 0.2, 0.25, 1);
}

.fade-enter {
  opacity: 0;
  transform: translateY(2rem);
}

main {
  margin: 2rem auto;
}

img {
  max-width: 100%;
  height: auto;

  & + h1, 
  & + h2, 
  & + h3, 
  & + h4, 
  & + h5, 
  & + h6  {
    margin-top: 0;
  }
}

b, strong {
  font-weight: 700;
  font-family: "Source Serif VariableIt";
}

i, em {
  font-family: "Source Serif VariableIt";
}

nav[role="navigation"] {
  text-align: center;
  
  a {
    display: inline-block;
    transition: font-weight .3s ease-in-out;
    font-weight: 400;

    &:hover {
      font-weight: 800;
      border-bottom: 3px solid var(--yellow);
    }
  }
}

.layout {
  width: 100%;
  margin: 0 auto;
  padding: 0;
  position: relative;
}

.layout-container {
  max-width: var(--max-width);
  padding: 0 2rem;
  width: 100%;
  margin: auto;
  min-height: 100vh;
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

.post-list {
  list-style: none;
  padding-left: 0;

  li {
    padding: 1em 0;
  }
}

li {
  margin-bottom: 0.5em;
}

a {
  color: inherit;
  text-decoration: none;

  & + h1,
  & + h2 {
    margin-top: .25em;
  }
}

p {
  a {
    color: var(--darkBlue);
    text-decoration-color: var(--yellow);
  }
  img {
    margin: 2em 0;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 800;
  line-height: 1.1em;
  position: relative;
  margin: 1.5em 0 1rem;
  padding: 1rem 0;
}

h1 {
  font-size: 4rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid var(--darkGray);
  border-top: 1px solid var(--darkGray);
}

h2 {
  font-size: 3rem;
  border-bottom: 1px solid var(--darkGray);
}

h3 {
  font-size: 2.4rem;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
input,
textarea,
a,
button,
ul,
li,
figcaption {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

blockquote,
figcaption,
.fancy {
  font-family: "Source Serif VariableIt";
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: normal;
}

figure  {
  margin: 2em;
}

figcaption {
  font-size: 1rem;
}

footer {
  width: 100%;
  min-height: 100px;
  background: #ddffff;
}

pre, code {
  font-family: 'Fira Mono', 'Courier', monospace;
}

pre {
  background: var(--darkBlue);
  padding: 1.5em;
  margin: 2em auto;
  color: #fff;
  border-radius: 0.5em;
  font-size: .8em;
  
  code {
    background: transparent;
  }
}

code {
  font-size: .9em;
  background: rgba(123, 167, 188, 0.2);
  padding: 0.2em 0.4em;
}


.categories li a {
  background: var(--darkGray);
  padding: 0.5em;
  border-radius: 8px;
  text-align: center;
  color: #fff;
  font-weight: bold;
}
</style>
