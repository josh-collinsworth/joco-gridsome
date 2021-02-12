<template>
	<Layout>
		<p class="fancy pre-heading">{{ formattedCategory }} project:</p>
		<h1>{{ project.title }}</h1>
		<g-image id="project-image" class="callout" :src="projectImage"/>
		<div class="content" v-html="project.content"></div>
		<div v-if="project.liked">
			<h2>What I like about this project:</h2>
			<p>{{ project.liked }}</p>
		</div>
		<div v-if="project.disliked">
			<h2>What I'd change about this project:</h2>
			<p>{{ project.disliked }}</p>
		</div>
		<div v-if="project.link">
			<hr>
			<p>
				Preview this project below, or
				<xa :to="project.link">
					open this project in a new tab
				</xa>.
			</p>
			<iframe class="wider" :src="project.link" frameborder="0"></iframe>
		</div>
		<br />
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
		liked
		disliked
	}
}
</page-query>

<script>
export default {
	data: () => ({
		project: {}
	}),

	mounted() {
		this.project = this.$page.project
	},

	computed: {
		formattedCategory() {
			let letters = [...this.$page.project.category]
			letters[0] = letters[0].toUpperCase()
			return letters.join('')
		},
		
		projectImage() {
			return require(`~/assets/images/${this.$page.project.featuredMedia}`)
		}
	}
}
</script>


<style lang="scss" scoped>
h1 {
	margin-bottom: 2rem;
}

h2 {
	font-size: 1.2rem;
	border: none;
	font-family: var(--body-font);
	margin: 1.5em 0 0;
}

iframe {
	background: var(--white);
	min-height: 90vh;
	max-height: 100vh;
	border: .1rem solid var(--ink);
	margin-top: 2rem;
}

hr {
	max-width: 3rem;
	border-bottom: 1px solid;
}

.callout {
	margin-top: 0;
	margin-left: 0;

	@media(min-width: 1024px) {
		margin-left: 2rem;
	}
}

p {
	margin-top: 0;
}
</style>
