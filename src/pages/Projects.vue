<template>
	<Layout>
		<h1>Projects</h1>
		<WorkLinks />

		<form @submit.prevent="" id="projects-filter">
			<header>
				Filter projects:
			</header>

			<div class="checkboxes">
				<div class="checkbox-wrap" v-for="category in allCategories" :key="category">
					<input type="checkbox" :value="category" v-model="shownCategories" :id="category">
					<label :for="category">{{ capitalize(category) }}</label>
				</div>
			</div>
		</form>

		<transition-group name="fade" tag="ul" id="project-list" class="wider" mode="out-in" appear>
			<li
				v-for="project in filteredProjects"
				:key="project.node.id"
				class="project"
			>
				<g-link :to="project.node.path" class="project__image">
					<div class="project__details">
						<h2>{{ project.node.title }}</h2>
						<div class="project__subtitle">
							{{ project.node.category }}
						</div>
						<div>
							<div class="project__summary">
								{{ project.node.summary }}
							</div>
						</div>
					</div>
					<g-image :src="projectImageSource(project)" :alt="project.node.title" />
				</g-link>
			</li>
			<li v-if="!filteredProjects.length" id="projects-empty-state" key="empty-error">
				<div class="empty">
					<p class="fancy">No projects to show with those filters.</p>
				</div>
			</li>
		</transition-group>
	</Layout>
</template>

<script>
import WorkLinks from '~/components/WorkLinks'

export default {
	components: { WorkLinks },

	data: () => ({
		shownCategories: [],
		projects: []
	}),

	created() {
		this.projects = this.$static.allProject.edges
		this.shownCategories = Array.from(new Set(this.$static.allProject.edges.map(edge => edge.node.category)))
	},

	methods: {
		projectTags(project) {
			return project.node.tags.map(tag => this.capitalize(tag)).join(', ')
		},

		capitalize(str) {
			return str.replace(/^\w/, c => c.toUpperCase());
		},

		projectImageSource(project) {
			return require(`~/assets/images/${project.node.featuredMedia}?width=480&height=480&position=top`)
		}
	},

	computed: {
		filteredProjects() {
			return this.projects.filter(project => this.shownCategories.includes(project.node.category))
		},

		allCategories() {
			return new Set (this.projects.map(project => project.node.category))
		}
	}
}

</script>

<static-query>
query {
	allProject(sortBy: "order", order: ASC) {
		edges {
			node {
			title
			id
			link
			content
			featuredMedia
			category
					tags
					path
					summary
			}
		}
  }
}
</static-query>

<style lang="scss" scoped>
#projects-filter {
	margin: 0 0 3rem;

	header {
		display: inline-block;
		margin: 2rem 0 1rem;
		border-bottom: 1px solid;
	}

	.checkboxes {
		margin: auto;
	}

	.checkbox-wrap {
		display: block;
		margin-right: 2rem;
	}
}

#projects-empty-state {
	grid-column: 1 / -1;
}

#project-list {
	padding: 0;
	margin: 0;
	list-style-type: none;
	width: calc(100vw - (var(--margin) * 2));

	@media(min-width: 800px) {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
	}

	.project {
		text-decoration: none;
		margin: 0;
		display: flex;
		justify-content: stretch;
		align-items: stretch;
		position: relative;
		flex: 1 1 14rem;

		&__image {
			display: block;

			img {
				margin: 0;
				object-fit: cover;
				width: 100%;
				height: 100%;
			}
		}

		&__details {
			padding: 1.5rem;
			text-decoration: none;
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			display: flex;
			flex-wrap: wrap;
			align-items: flex-end;
			align-content: flex-end;
			transition: all .15s ease-in-out;
			background: linear-gradient(to bottom, rgba(var(--darkBlueRGB), 0.9) 33%, var(--darkBlue) 67%, var(--darkBlue) 100%);
			opacity: 0;
			color: var(--white);

			h2 {
				width: 100%;
				margin: 0;
				font-family: var(--heading-font);
				font-style: normal;
				display: block;
				border: none;
				font-size: 1.5rem;
				color: inherit;
			}
		}

		&:hover .project__details {
			opacity: 1;
		}

		&__subtitle {
			font-weight: bold;
			text-transform: uppercase;
			font-style: normal;
			font-size: .6rem;
			border-top: 1px solid;
			display: flex;
			align-items: baseline;
			width: auto;
			line-height: 1em;
			padding: 1rem 0 ;
			grid-column: 1 / -1;
			grid-row: 2 / 3;
			margin: 0.5rem 0 1rem;
			color: inherit;

			.tags {
				font-style: italic;
				font-weight: normal;
				text-transform: none;
				margin-left: .5rem;
				color: inherit;
			}
		}

		&__summary {
			grid-column: 2 / 3;
			grid-row: 3 / 4;
			font-size: .9rem;
			line-height: 1.4em;
			font-size: .8em;
			font-style: italic;
			padding: 1rem 0 0;
			margin: 0;
		}
	}
}

.fade {
	&-enter-active,
	&-leave-active {
		transition: all .45s cubic-bezier(0,.5,0,1);
	}


	&-enter,
	&-leave-to {
		opacity: 0;
		transform: translateY(2rem) scale(0.9);
		transform-origin: top;
	}

	&-leave-active {
		position: absolute!important;
		width: 100%;
	}

  &-move {
		transition: transform .45s cubic-bezier(0,.5,0,1);
  }
}
</style>
