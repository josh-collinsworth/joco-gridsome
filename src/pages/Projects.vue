<template>
  <Layout>

		<WorkLinks />

		<h1>Showcase</h1>

		<form @submit.prevent="" id="projects-filter">
			<header>
				<strong>Filter projects:</strong>
			</header>

			<div class="checkboxes">
				<div class="checkbox-wrap" v-for="category in allCategories" :key="category">
					<input type="checkbox" :value="category" v-model="shownCategories" :id="category">
					<label :for="category">{{ category }}</label>
				</div>
			</div>
		</form>

		<ul id="project-list">
			<li v-for="(project, i) in filteredProjects" :key="project.id">
				<transition-group name="fade" tag="div" appear>
					<div class="project-preview" :key="project.node.id">
						<g-link :to="project.node.path" :style="{transitionDelay: (i * .1) + 's' }">
							<g-image :src="require(`!!assets-loader?width=480&height=480!@images/${project.node.featuredMedia}`)" width="80" quality="20" fit="contain" alt="" />
						</g-link>
						<div class="details">
							<h2 class="title">
								{{ project.node.title }}
							</h2>
							<div class="subtitle">
								{{ project.node.category }}
								<div class="tags">
									<span>{{ project.node.tags.join(', ') }}</span>
								</div>
							</div>
							<div class="summary" v-html="project.node.summary"></div>
							<g-link :to="project.node.path" :style="{transitionDelay: (i * .1) + 's' }">
								Preview project
							</g-link>
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
		display: inline-block;
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

	.project-preview {
		display: grid;
		grid-template-columns:	1fr;
		grid-gap: 1.5rem;
		text-decoration: none;
		margin-bottom: 6rem;

		@media (min-width: 440px) {
			grid-template-columns: 6rem 1fr;
		}

		@media (min-width: 560px) {
			grid-template-columns: 12rem 1fr;
			margin-bottom: 3rem;
		}

		img {
			margin: 0;
			border: 1px solid;
		}

		.title {
			font-family: 'Pensum Display Basic', serif;
			display: block;
			border-bottom: unset;
			font-style: normal;
			font-size: 1.4rem;
			margin: 0;
		}

		.subtitle {
			font-weight: bold;
			text-transform: uppercase;
			font-style: normal;
			font-size: .6rem;
			border-bottom: 1px solid;
			display: flex;
			align-items: baseline;
			line-height: 1em;
			padding: .25rem 0 .5rem;

			.tags {
				font-style: italic;
				font-weight: normal;
				text-transform: none;
				margin-left: .5rem;
			}
		}

		.summary {
			margin-top: 1rem;
		}
	}
}

/* ul.fullwidth {
	list-style-type: none;
	display: grid;
	padding: 0;
	width: 100vw;
	grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));

	li {
		margin: 0;
		display: block;
		padding: 0;
		position: relative;
		overflow: hidden;
		font-size: .875rem;
		line-height: 1.4em;
		transition: all .2s cubic-bezier(0.215, 0.610, 0.355, 1);

		.details {
			opacity: 0;
			transition: all .4s cubic-bezier(1, 0, 0, 1);
			background: linear-gradient(to top, var(--darkBlue) 33%, transparent);
			background: var(--darkBlue);
			padding: 1rem;
			position: absolute;
			bottom: 0;
			left: 0;
			height: auto;
			width: 100%;
			color: var(--white);
			display: flex;
			align-items: flex-end;
			transform: translateY(100%);
			opacity: 0;

			.title,
			.subtitle,
			hr {
				transform: translateY(.25em);
				opacity: 0;
				transition: all .25s cubic-bezier(0.5, 0, 0.5, 1);
				transition-delay: .2s;
			}

			hr {
				width: 2rem;
				border: none;
				height: 1px;
				background: var(--white);
				transition-delay: .275s;
				margin: .5em 0;
			}

			.subtitle {
				transition-delay: .35s;
			}
		}

		&:hover {
			box-shadow: .0 0 0 .2rem var(--yellow);
			z-index: 2;
			transform: translateY(-.1rem);

			.details {
				opacity: 1;
				transform: translateY(0);

				.title,
				.subtitle,
				hr {
					transform: translateY(0);
					opacity: 1;
				}
			}
		}

		.empty {
			background: var(--paper);
			margin: 0;
			padding: 1em;
		}
	}

	a {
		display: block;
		text-decoration: none;
	}

	.title {
		font-style: italic;

		.subtitle {
			font-size: .675em;
			text-transform: uppercase;
			font-weight: bold;
			margin-top: .5em;
			font-style: normal;
		}
	}

	img {
		display: block;
		transition: all .15s cubic-bezier(0.5, 0, 0.5, 1);
		transform: scale(1);
		margin: 0;
	}
} */

.fade {
	&-enter-active {
		transition: all .35s cubic-bezier(.22,.61,.36,1);
	}

	&-leave-active {
		transition: all .25s cubic-bezier(.55,.06,.68,.19);
	}

	&-move {
		transition: .25s cubic-bezier(.55,.06,.68,.19);
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
