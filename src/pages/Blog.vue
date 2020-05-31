<template>
  <Layout>
    <h1>Blog</h1>
    <p class="fancy details">
      <span v-if="loading">Retrieving posts…</span>
      <span v-else-if="!searched">Showing all posts, page {{ $page.allWordPressPost.pageInfo.currentPage }} of {{ $page.allWordPressPost.pageInfo.totalPages  }}</span>
      <span v-else><strong>{{ resultsText }}</strong></span>
    </p>
    <BlogSearch @foundPosts="updatePosts" @startSearch="startLoading"/>

    <Loader v-if="loading" />

    <div v-if="!searched || searchTerm === ''">
      <article v-for="post in $page.allWordPressPost.edges" :key="post.node.id">
        <g-link :to="post.node.slug">
          <img :src="post.node.featuredMedia.sourceUrl" alt="">
          <span class="sr">{{ post.node.title }}</span>
        </g-link>
        <h2>
          <g-link :to="post.node.slug">
            <span v-html="post.node.title"></span>
          </g-link>
        </h2>
        <div v-html="post.node.excerpt"></div>
      </article>
    </div>

    <SearchedPostList v-else-if="searched && searchedPosts.length && !loading" :posts="searchedPosts"/>

    <h2 id="empty" v-if="searched && ! loading && !searchedPosts.length">Sorry, no posts found.</h2>

    <div v-if="!searched" class="pagination">
      <p>Page:</p>
      <Pager :info="$page.allWordPressPost.pageInfo"/>
    </div>
  </Layout>
</template>


<page-query>
query ($page: Int) {
	allWordPressPost(perPage: 10, page: $page) @paginate {
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
import SearchedPostList from '../components/SearchedPostList'
import Loader from '../components/Loader'

export default {
  data: () => ({
    searched: false,
    loading: false,
    searchTerm: '',
    searchedPosts: []
  }),
  watch: {
    searchTerm(newTerm) {
      if (newTerm === '') {
        this.loading = false
        this.searched = false
        this.searchedPosts = []
        return
      }
    }
  },
  components: {
    Pager, BlogSearch, SearchedPostList, Loader
  },
  metaInfo: {
    title: "Blog"
  },
  methods: {
    updatePosts(found, searchedTerm) {
      this.searchedPosts = []
      this.loading = false
      this.searchTerm = searchedTerm,
      this.$nextTick(() => {
        this.searchedPosts = found
      })
    },
    startLoading() {
      this.searched = true
      this.loading = true
    }
  },
  computed: {
    resultsText() {
      return `${this.searchedPosts.length} result${this.searchedPosts.length == 1 ? '' : 's'} for "${this.searchTerm}"`
    }
  }
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
