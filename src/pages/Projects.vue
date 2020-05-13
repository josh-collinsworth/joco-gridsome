<template>
  <Layout>
<!--
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
		</form> -->

		<ul class="fullwidth">
			<li v-for="(project, i) in filteredProjects" :key="project.id">
				<transition-group name="fade" tag="div" appear>
					<g-link :to="project.node.path" :key="project.node.id" :style="{transitionDelay: (i * .1) + 's' }">
						<g-image :src="require(`!!assets-loader?width=480&height=480!@images/${project.node.featuredMedia}`)" width="80" quality="20" fit="contain" />
						<div class="details" >
							<div class="title">
								{{ project.node.title }}
								<hr />
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

ul.fullwidth {
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
			z-index: 3;
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
