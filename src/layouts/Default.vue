<template>
  <div class="layout">
    <Header />
    <div class="layout-container">

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
import Header from '../components/Header';

export default {
  components: { Header },
  computed: {
    allPagesNoHome() {
      return this.$static.allWordPressPage.edges.filter(page => page.node.title != 'Home');
    }
  }
};
</script>



<style lang="scss">
.fade-enter-active {
  transition: all .6s cubic-bezier(0, 0.2, 0.25, 1);
  transition-delay: .6s;
}

.fade-enter {
  opacity: 0;
  transform: translateY(2rem);
}

.post-list {
  list-style: none;
  padding-left: 0;

  li {
    padding: 1em 0;
  }
}

footer {
  width: 100%;
  min-height: 100px;
  background: var(--lightBlue);
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
</style>
