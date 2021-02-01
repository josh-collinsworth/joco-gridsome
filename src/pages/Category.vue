<template>
  <Layout>
    <h1>Posts by category</h1>

    <article v-for="cat in $page.allCategory.edges" :key="cat.node.id">
      <g-link :to="cat.node.path" class="post-image-link">
        <span class="sr">{{ cat.node.title }}</span>
      </g-link>

      <h2 class="category-heading">
        <g-link :to="cat.node.path">
          <span v-html="cat.node.title"></span>
        </g-link>
      </h2>

      <ul>
        <li v-for="post in orderPosts(cat.node.posts)" :key="post.id">
          <g-link :to="post.path">
            {{ post.title }}
          </g-link>
        </li>
      </ul>
    </article>
  </Layout>
</template>


<page-query>
query {
	allCategory {
    edges {
      node {
        title
        id
        path
        posts {
          title
          path
          date
          id
        }
      }
    }
  }
}
</page-query>


<script>
export default {
  metaInfo: {
    title: "Josh Collinsworth | Blog Categories"
  },

  methods: {
    orderPosts(posts) {
      return posts.sort((a, b) => new Date(a.date) < new Date(b.date))
    }
  }
};
</script>


<style lang="scss" scoped>
.category-heading {
  font-size: 1.2rem;
  font-family: var(--body-font);
  margin: 2rem 0 0;
  padding: 0 0 0.25em;
}
</style>
