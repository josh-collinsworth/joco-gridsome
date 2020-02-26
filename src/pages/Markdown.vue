<template>
	<Layout>
    <h1>Blog</h1>
		<article v-for="post in $static.allMarkdownPost.edges" :key="post.node.id">
      <g-link href="#" :to="'/' + post.node.path">
        <g-image :src="post.node.path" alt="" />
        <!-- <g-image :src="`/${post.node.fileInfo.directory.substr(4)}/images/${post.node.coverImage}`" alt="" /> -->
      </g-link>
    	<h2>
        <g-link href="#" :to="post.node.path">
          <span  v-html="post.node.title"></span>
        </g-link>
      </h2>
      <div v-html="post.node.excerpt"></div>

		</article>
  </Layout>
</template>

<static-query>
query {
  allMarkdownPost {
    totalCount
    edges {
      node {
        title
        date
				excerpt
				coverImage
				path
        fileInfo {
          directory
        }
      }
    }
  }
}
</static-query>


<script>
export default {
    name: '',
    props: {
    },
    components: {
    }
}
</script>


<style scoped>

</style>
