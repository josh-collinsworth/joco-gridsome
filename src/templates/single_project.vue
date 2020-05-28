<template>
	<Layout>
		<p class="fancy pre-heading">{{ formattedCategory }} project:</p>
		<h1>{{project.title}}</h1>
		<g-image id="project-image" :src="require(`!!assets-loader!@images/${$page.project.featuredMedia}`)" width="200" height="200" fit="contain"/>
		<div class="content" v-html="project.content"></div>
		<div v-if="project.link">
			<hr>
			<p>
				<strong>View this project at: </strong>
				<br />
				<a :href="project.link">
					{{ project.link }}
				</a>
			</p>
			<iframe class="wider" :src="project.link" frameborder="0"></iframe>
		</div>
		<p><g-link to="/projects">&lsaquo; Back to projects</g-link></p>
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
	background: var(--white);
	min-height: 90vh;
	max-height: 100vh;
	border: .1rem solid var(--ink);
}
</style>
