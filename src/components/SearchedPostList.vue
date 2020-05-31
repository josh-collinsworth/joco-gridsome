<template>
	<div>
		<article v-for="post in posts" :key="post.node.id">
			<g-link :to="post.node.slug">
				<img :src="post.node.featuredMedia.sourceUrl" alt="">
				<span class="sr">{{ post.node.title }}</span>
			</g-link>
			<h2>
				<g-link :to="post.node.slug">
					<span  v-html="post.node.title"></span>
				</g-link>
			</h2>
			<div v-html="post.node.excerpt"></div>
		</article>
	</div>
</template>


<script>
export default {
	props: {
		posts: {
			type: Array
		}
	}
}
</script>


<style lang="scss" scoped>
article img {
  margin-top: 6rem;
}
</style>
