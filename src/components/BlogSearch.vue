<template>
	<form id="search-form" @submit.prevent="searchPosts">
		<input type="text" id="blog-search-field" v-model="searchTerm">
		<label for="blog-search-field" class="sr">Search blog posts</label>
		<input type="submit" value="Search">
	</form>
</template>


<script>
export default {
	data: () => ({
		searchTerm: ''
	}),
	methods: {
		searchPosts() {
			this.$emit('startSearch')
			fetch('https://joshcollinsworth.com/wp-json/wp/v2/posts?search=' + encodeURIComponent(this.searchTerm))
				.then(res => res.json())
				.then(json => json.map(post => {
					console.log(post)
					return ({
						node: {
							title: post.title.rendered,
							content: post.content.rendered,
							featuredMedia: { sourceUrl: post.jetpack_featured_media_url },
							id: post.id,
							excerpt: post.excerpt.rendered,
							slug: post.slug
						}
					})
				}))
				.then(posts => {
					this.$emit('foundPosts', posts, this.searchTerm)
				}
			)
		}
	}
}
</script>


<style lang="scss" scoped>
#search-form {
	display: flex;
	margin: 0 0 2rem;

	input {
		flex: 2 1 80%;
		margin: 0;
	}

	input[type=submit] {
		margin-left: 1rem;
		flex: 1 1 6rem;
	}
}
</style>
