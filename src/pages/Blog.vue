<template>
  <Layout>
    <h1>Blog</h1>
		<article v-for="post in $static.allWordPressPost.edges" :key="post.node.id">
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
  </Layout>
</template>


<static-query>
query {
	allWordPressPost(perPage: 10) {
    edges {
      node {
        title
        # content
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
</static-query>


<script>
export default {
  metaInfo: {
    title: "Blog"
  },
};
</script>

<style scoped>
  article:not(:first-child) img {
    margin-top: 8rem;
  }
</style>
