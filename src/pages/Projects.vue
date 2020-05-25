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

		<ul id="project-list">
			<li v-for="(project, i) in filteredProjects" :key="project.id">
				<transition-group name="fade" tag="div" appear>
					<div class="project-preview" :key="project.node.id" :style="{transitionDelay: (i * .1) + 's', transitionProperty: 'opacity, transform'  }">
						<h2 class="title">
							<g-link :to="project.node.path">
								{{ project.node.title }}
							</g-link>
						</h2>
						<g-link :to="project.node.path" class="project-image">
							<g-image :src="require(`!!assets-loader?width=480&height=480&position=top!@images/${project.node.featuredMedia}`)" fit="contain" position="top" :alt="project.node.title" />
						</g-link>
						<div class="subtitle">
							{{ project.node.category }}
							<!-- Removing tags for now; don't think they add anything -->
							<!-- <div class="tags">
								<span>{{ projectTags(project) }}</span>
							</div> -->
						</div>
						<div>
							<div class="summary" v-html="summaryWithLink(project)"></div>
						</div>
					</div>
				</transition-group>
			</li>
			<li v-if="!filteredProjects.length" id="projects-empty-state">
				<transition name="fade" appear>
					<div class="empty">
						<p class="fancy">No projects to show with those filters.</p>
					</div>
				</transition>
			</li>
		</ul>

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
	watch: {
		//These are necessary to reset the array to nothing temporarily before re-rendering
		//This keeps animation delays from getting wonky during filtering
		shownCategories() {
			this.projects = []
			this.$nextTick(() => this.projects = this.$static.allProject.edges)
		},
	},
	methods: {
		summaryWithLink(project) {
			return project.node.summary + `&ensp;<a href="${this.$url(project.node.path)}">More…</a>`
		},
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
	allProject(sort: [{ by: "category", order: ASC }, { by: "title", order: ASC }], ) {
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

	.project-preview {
		display: grid;
		grid-template-columns:	10rem 1fr;
		grid-gap: 0 1rem;
		text-decoration: none;
		margin-bottom: 4rem;
		align-content: start;
		align-items: start;
		border-top: 1px solid;

		@media (min-width: $projects_breakpoint) {
			grid-template-columns: 12rem 1fr;
		}

		.project-image {
			grid-row: 3 / 5;

			@media (min-width: $projects_breakpoint) {
				grid-row: 1 / 5;
			}

			img {
				margin: 0;
				border-right: 1px solid;
			}
		}

		.title {
			font-family: 'Pensum Display Basic', serif;
			display: block;
			border-bottom: unset;
			font-style: normal;
			font-size: 1.5rem;
			margin: 1rem 0 0;
			padding: 0;
			grid-column: 1 / -1;
			grid-row: 1 / 2;

			@media (min-width: $projects_breakpoint) {
				grid-column: 2 / 3;
				grid-row: 1 / 2;
			}

			a {
				color: var(--ink);
			}
		}

		.subtitle {
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
				margin-left: -1rem;
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

		.summary {
			grid-column: 2 / 3;
			grid-row: 3 / 4;
			font-size: .9rem;
			line-height: 1.4em;
			font-size: .8em;
			font-style: italic;
			margin-top: 1rem;

			@media (min-width: $projects_breakpoint) {
				grid-row: auto;
			}

			& + a {
				font-style: italic;
				display: block;
				margin-top: .5rem;
				font-size: .8em;
			}
		}
	}
}

.fade {
	&-enter-active {
		transition: opacity .35s cubic-bezier(.22,.61,.36,1), transform cubic-bezier(.22,.61,.36,1);
	}

	&-leave-active {
		transition: opacity .25s cubic-bezier(.55,.06,.68,.19), transform cubic-bezier(.55,.06,.68,.19);
	}

	&-enter, &-leave-to {
		opacity: 0;
	}

	&-enter {
		transform: translateY(1rem);
	}

	&-leave-to {
		transform: translateY(1rem);
		position: absolute;
		z-index: 0;
	}
}
</style>
