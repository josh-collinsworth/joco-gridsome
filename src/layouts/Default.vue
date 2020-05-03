<template>
  <div ref="layout" class="layout">
    <div class="layout-container">
      <main>
        <div class="content">
          <slot/>
        </div>
      </main>
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
  computed: {
    allPagesNoHome() {
      return this.$static.allWordPressPage.edges.filter(page => page.node.title != 'Home');
    }
  }
};
</script>



<style lang="scss" scoped>
.post-list {
  list-style: none;
  padding-left: 0;

  li {
    padding: 1em 0;
  }
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
