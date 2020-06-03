<template>
  <Layout>

		<h1>Projects</h1>
		<WorkLinks />

		<form @submit.prevent="" id="projects-filter">
			<header>
				<strong class="sr">Filter projects:</strong>
			</header>

			<div class="checkboxes">
				<div class="checkbox-wrap" v-for="category in allCategories" :key="category">
					<input type="checkbox" :value="category" v-model="shownCategories" :id="category">
					<label :for="category">{{ capitalize(category) }}</label>
				</div>
			</div>
		</form>



		<transition-group name="fade" tag="ul" id="project-list" class="wider" mode="in-out" appear>
			<li
				v-for="project in filteredProjects"
				:key="project.node.id"
				class="project"
			>
					<h2 class="project__title">
						<g-link :to="project.node.path">
							{{ project.node.title }}
						</g-link>
					</h2>
					<g-link :to="project.node.path" class="project__image">
						<g-image :src="require(`!!assets-loader?width=480&height=480&position=top!@images/${project.node.featuredMedia}`)" fit="contain" position="top" :alt="project.node.title" />
					</g-link>
					<div class="project__subtitle">
						{{ project.node.category }}
					</div>
					<div>
						<div class="project__summary">
							{{ project.node.summary }}
							<a class="project__summary-link" :href="project.node.path">More…</a>
						</div>
					</div>
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
	allProject {
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
		margin: 0 0 1rem;
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
	$projects_breakpoint: 560px;
	padding: 0;
	margin: 0;
	list-style-type: none;

	@media(min-width: 800px) {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
		grid-gap: 2rem;
	}

	.project {
		display: grid;
		grid-template-columns:	10rem 1fr;
		grid-gap: 0;
		text-decoration: none;
		margin-bottom: 4rem;
		align-content: start;
		align-items: start;
		max-width: var(--max-width);

		@media (min-width: $projects_breakpoint) {
			grid-template-columns: 12rem 1fr;
		}

		&__image {
			grid-row: 3 / 5;

			@media (min-width: $projects_breakpoint) {
				grid-row: 1 / 5;
			}

			img {
				margin: 0;
				border-right: 1px solid;
				border-bottom: 1px solid;
			}
		}

		&__title {
			font-family: 'Pensum Display', serif;
			display: block;
			border-bottom: unset;
			font-style: normal;
			font-size: 1.5rem;
			margin: 0;
			padding: 1rem 0 0 0;
			grid-column: 1 / -1;
			grid-row: 1 / 2;
			border-top: 1px solid;

			@media (min-width: $projects_breakpoint) {
				grid-column: 2 / 3;
				grid-row: 1 / 2;
				padding-left: 1rem;
			}

			a {
				color: var(--ink);
			}
		}

		&__subtitle {
			font-weight: bold;
			text-transform: uppercase;
			font-style: normal;
			font-size: .6rem;
			border-bottom: 1px solid;
			display: flex;
			align-items: baseline;
			width: auto;
			line-height: 1em;
			padding: 0 0 1rem;
			grid-column: 1 / -1;
			grid-row: 2 / 3;
			margin-top: .5rem;

			@media(min-width: $projects_breakpoint) {
				padding-left: 1rem;
				grid-column: 2 / 3;
				grid-row: 2 / 3;
			}

			.tags {
				font-style: italic;
				font-weight: normal;
				text-transform: none;
				margin-left: .5rem;
			}
		}

		&__summary {
			grid-column: 2 / 3;
			grid-row: 3 / 4;
			font-size: .9rem;
			line-height: 1.4em;
			font-size: .8em;
			font-style: italic;
			padding: 1rem 0 0 1rem;
			margin: 0;

			@media (min-width: $projects_breakpoint) {
				grid-row: auto;
			}

			&-link {
				display: block;
				margin-top: .5rem;
			}
		}
	}
}

.fade {
	&-enter-active,
	&-leave-active {
		transition: opacity .45s, transform .55s cubic-bezier(1, 0, 0, 1);
	}

	&-leave-active {
		position: absolute;
		width: 28rem;
	}

	&-enter,
	&-leave-to {
		opacity: 0;
		transform: translateY(1rem);
	}

  &-move {
    transition: opacity .3s, transform .55s cubic-bezier(1, 0, 0, 1);
  }
}
</style>
