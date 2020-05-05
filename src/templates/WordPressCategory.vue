<template>
  <div>
      <p class="fancy">View by category:</p>
      <h1>{{ $page.wordPressCategory.title }} </h1>
    <ul class="post-list">
      <li v-for="{ node } in $page.wordPressCategory.belongsTo.edges" :key="node.id">
        <Post :post="node" />
      </li>
    </ul>
    <Pager :info="$page.wordPressCategory.belongsTo.pageInfo"/>
  </div>
</template>

<page-query>
query WordPressCategory ($id: ID!, $page: Int) {
  wordPressCategory(id: $id) {
    title
    slug
    belongsTo(page: $page, perPage: 10) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on WordPressPost {
            id
            title
            path
            excerpt
        	}
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'

export default {
  components: {
    Pager,
    Post
  },
  metaInfo () {
    return {
      title: this.$page.wordPressCategory.title
    }
  }
}
</script>

<style>
.content > p:first-child {
  margin-bottom: 0;
}

p + h1 {
  margin-top: 0;
}
</style>
