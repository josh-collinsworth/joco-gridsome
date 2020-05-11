<template>
  <Layout>

		<form @submit.prevent="filterProjects" id="projects-filter">
			<header>
				<strong>Filter projects:</strong>
			</header>

			<div class="checkboxes">
				<div class="checkbox-wrap">
					<input type="checkbox" v-model="showCode" id="code">
					<label for="code">Code</label>
				</div>

				<div class="checkbox-wrap">
					<input type="checkbox" v-model="showDesign" id="design">
					<label for="design">Design</label>
				</div>
			</div>
		</form>

		<ul class="fullwidth">
			<li v-for="(project, i) in filteredProjects" :key="project.id">
				<transition-group name="fade" tag="div" appear>
					<g-link :to="project.node.path" :key="project.node.id" :style="{transitionDelay: (i * .1) + 's' }">
						<g-image :src="require(`!!assets-loader?width=480&height=480!@images/${project.node.featuredMedia}`)" width="80" quality="20" fit="contain" />
						<div class="details" >
							<div class="title">
								{{ project.node.title }}
								<div class="subtitle">
									{{ project.node.category }}
								</div>
							</div>
						</div>
					</g-link>
				</transition-group>
			</li>
			<li v-if="!filteredProjects.length" id="projects-empty-state">
				<transition name="fade">
					<div class="empty">
						<p class="fancy">No projects to show with those filters.</p>
					</div>
				</transition>
			</li>
		</ul>

  </Layout>
</template>

<script>
export default {
	data: () => ({
		showCode: true,
		showDesign: true,
		projects: []
	}),
	mounted() {
		this.projects = this.$static.allProject.edges
	},
	watch: {
		//These are necessary to reset the array to nothing temporarily before re-rendering
		//This keeps animation delays from getting wonky during filtering
		showCode() {
			this.projects = []
			this.$nextTick(() => this.projects = this.$static.allProject.edges)
		},
		showDesign() {
			this.projects = []
			this.$nextTick(() => this.projects = this.$static.allProject.edges)
		}
	},
	methods: {
		filterProjects(e) {
			e.preventDefault()
		}
	},
	computed: {
		filteredProjects() {
			const filtered = this.projects.filter(project => {
				return ((project.node.category == 'code' && this.showCode) ||
				(project.node.category == 'design' && this.showDesign))
			})
			return filtered
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
				path
      }
    }
  }
}
</static-query>

<style lang="scss" scoped>
#projects-filter {
	margin-top: 0;

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

.details {
	display: none;
}

ul.fullwidth {
	list-style-type: none;
	display: grid;
	padding: 0;
	width: 100vw;
	grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));

	li {
		margin: 0;
		display: inline-block;
		padding: 0;
		position: relative;
		font-size: .875rem;
		line-height: 1.4em;
		transition: all .2s cubic-bezier(0.215, 0.610, 0.355, 1);

		&:hover {
			box-shadow: .0 0 0 .4rem var(--yellow);
			/* transform: translateY(-.25rem); */
			z-index: 3;
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
		padding: .5rem 1rem 1rem 0;
		font-style: italic;

		&:before, &:after {
			content: '';
			width: 2em;
			height: 1px;
			background: var(--darkGray);
			display: block;
			margin: .5rem 0;
		}

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
}

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
