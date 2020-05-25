<template>
  <Layout>
    <h1>Blog</h1>
    <BlogSearch @foundPosts="updatePosts" />
    <p v-if="!searched" class="fancy">Page {{ $page.allWordPressPost.pageInfo.currentPage }} of {{ $page.allWordPressPost.pageInfo.totalPages  }}</p>
    <p v-else>{{ resultsText }}</p>

    <div v-if="posts.length">
      <article v-for="post in posts" :key="post.node.id">
        <g-link href="#" :to="'/' + post.node.slug">
          <img :src="post.node.featuredMedia.sourceUrl" alt="">
          <span class="sr">{{ post.node.title }}</span>
        </g-link>
        <h2>
          <g-link href="#" :to="'/' + post.node.slug">
            <span  v-html="post.node.title"></span>
          </g-link>
        </h2>
        <div v-html="post.node.excerpt"></div>
      </article>
    </div>

    <h2 v-if="!posts.length">Sorry, no posts found.</h2>

    <div v-if="posts.length && !searched" class="pagination">
      <p>Page:</p>
      <Pager :info="$page.allWordPressPost.pageInfo" class="xyz" />
    </div>
  </Layout>
</template>


<page-query>
query ($page: Int) {
	allWordPressPost(perPage: 5, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title
        id
        excerpt
        slug
        featuredMedia {
          sourceUrl
        }
        categories {
          title
          slug
        }
        date
      }
    }
  }
}
</page-query>


<script>
import { Pager } from 'gridsome'
import BlogSearch from '../components/BlogSearch'

export default {
  data: () => ({
    searched: false,
    posts: []
  }),
  components: {
    Pager, BlogSearch
  },
  metaInfo: {
    title: "Blog"
  },
  created() {
    this.posts = this.$page.allWordPressPost.edges
  },
  methods: {
    updatePosts(found) {
      console.log('got here')
      this.posts = []
      this.searched = true
      this.$nextTick(() => {
        this.posts = found
      })
    }
  },
  computed: {
    resultsText() {
      return `${this.posts.length} result${this.posts.length > 1 ? 's' : ''}`
    }
  }
};
</script>

<style scoped>
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
</style>
