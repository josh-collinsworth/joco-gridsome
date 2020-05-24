<template>
  <Layout>
    <h1>Blog</h1>
    <BlogSearch @foundPosts="updatePosts" />
    <p class="fancy">Page {{ $page.allWordPressPost.pageInfo.currentPage }} of {{ $page.allWordPressPost.pageInfo.totalPages  }}</p>

		<article v-for="post in $page.allWordPressPost.edges" :key="post.node.id">
      <g-link href="#" :to="'/' + post.node.slug">
        <img :src="post.node.featuredMedia.sourceUrl" alt="">
      </g-link>
    	<h2>
        <g-link href="#" :to="'/' + post.node.slug">
          <span  v-html="post.node.title"></span>
        </g-link>
      </h2>
      <div v-html="post.node.excerpt"></div>
		</article>

    <p>Page:</p>
    <Pager :info="$page.allWordPressPost.pageInfo" />
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

  }),
  components: {
    Pager, BlogSearch
  },
  metaInfo: {
    title: "Blog"
  },
};
</script>

<style scoped>
  article img {
    margin-top: 6rem;
  }

  article:first-of-type img {
    margin-top: 0;
  }
</style>
