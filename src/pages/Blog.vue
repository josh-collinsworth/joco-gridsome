<template>
  <Layout>
    <h1>Blog</h1>
    <p class="fancy details">
      Page {{ $page.allPost.pageInfo.currentPage }} of {{ $page.allPost.pageInfo.totalPages  }}
    </p>

    <article v-for="post in $page.allPost.edges" :key="post.node.id">
      <g-link :to="post.node.path">
        <g-image :src="require(`!!assets-loader!@images/post_images/${post.node.coverImage}`)" alt="" />
        <span class="sr">{{ post.node.title }}</span>
      </g-link>

      <h2>
        <g-link :to="post.node.path">
          <span v-html="post.node.title"></span>
        </g-link>
      </h2>
      <div v-html="post.node.excerpt"></div>
    </article>

    <div class="pagination">
      <p>Page:</p>
      <Pager :info="$page.allPost.pageInfo"/>
    </div>
  </Layout>
</template>


<page-query>
query ($page: Int) {
	allPost(perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title
        id
        excerpt
        path
        coverImage
        categories
        date
      }
    }
  }
}
</page-query>


<script>
import { Pager } from 'gridsome'

export default {

  components: {
    Pager, 
  },

  metaInfo: {
    title: "Josh Collinsworth | Blog"
  },
};
</script>

<style lang="scss" scoped>
article img {
  margin-top: 6rem;
}

article:first-of-type img {
  margin-top: 0;
}

.pagination nav a {
  padding: .25em;
  text-align: center;
}

#empty {
  margin-top: 0;
}
</style>
