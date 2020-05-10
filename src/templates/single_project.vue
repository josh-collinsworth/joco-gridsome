<template>
	<Layout>
		<article>
			<!-- <g-image :src="require(`!!assets-loader!@images/${$page.project.featuredMedia}`)" width="200" height="200" fit="contain"/> -->
			<p class="fancy">{{ formattedCategory }} project:</p>
			<h1>{{project.title}}</h1>
			<div v-html="project.content"></div>
			<hr>
			<iframe class="wider" :src="project.link" frameborder="0"></iframe>
			<p>
				<strong>View this project at: </strong>
				<a v-if="project.link" :href="project.link">
					{{ project.link }}
				</a>
			</p>
		</article>
	</Layout>
</template>


<page-query>
query($id: ID!) {
	project(id: $id) {
		title
		id
		link
		content
		featuredMedia
		category
		path
	}
}
</page-query>

<script>
export default {
	data: () => ({
		project: {}
	}),
  computed: {
		imageURL() {
			return
		}
	},
	mounted() {
		this.project = this.$page.project
	},
	computed: {
		formattedCategory() {
			let letters = [...this.$page.project.category]
			letters[0] = letters[0].toUpperCase()
			return letters.join('')
		}
	}
}
</script>


<style lang="scss" scoped>
iframe {
	min-height: 90vh;
	max-height: 100vh;
	border: .1rem solid var(--darkGray);
}
</style>
