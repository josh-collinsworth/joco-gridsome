<template>
	<div id="sidebar">
		<form id="search-form" @submit.prevent="searchPosts">
			<input type="text" v-model="searchTerm">
			<input type="submit" value="Search">
		</form>
	</div>
</template>


<script>
export default {
	data: () => ({
		searchTerm: ''
	}),
	methods: {
		searchPosts() {
			fetch('https://joshcollinsworth.com/wp-json/wp/v2/posts?search=' + encodeURIComponent(this.searchTerm))
				.then(res => res.json())
				.then(json => json.map(post => {
					console.log(post)
					return ({ node: {
						title: post.title.rendered,
						content: post.content.rendered,
						featuredMedia: { sourceUrl: post.jetpack_featured_media_url },
						id: post.id,
						excerpt: post.excerpt.rendered,
						slug: post.slug
						} })
				}))
				.then(posts => {
					console.log(posts)
					// console.log(`${posts.length} posts found.`)
					// console.log(posts)
					this.$emit('foundPosts', posts)
				}
			)
		}
	}
}
</script>


<style lang="scss" scoped>
#search-form {
	display: flex;
	position: sticky;
	top: 1rem;

	input {
		flex: 2 1 99%;
	}

	input[type=submit] {
		margin-left: 1rem;
		flex: 1 1 6rem;
	}
}

#sidebar {
	align-self: stretch;
}
</style>
