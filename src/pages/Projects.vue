<template>
	<div>
		<h1 style="margin-bottom: 0">Projects</h1>

		<p class="fancy">A collection of websites, apps and design projects.</p>

		<form @submit.prevent="filterProjects" id="projects-filter">
			<header>
				<p><strong>Filter projects:</strong></p>
			</header>

			<input type="checkbox" v-model="showCode" id="code">
			<label for="code">Code</label>

			<input type="checkbox" v-model="showDesign" id="design">
			<label for="design">Design</label>
		</form>

		<ul class="fullwidth">
			<li v-for="(project, i) in filteredProjects" :key="project.id">
				<transition-group name="fade" tag="div" appear>
					<article :key="project.node.id" :style="{transitionDelay: (i * .1) + 's' }">
						<g-link :to="project.node.path">
							<g-image :src="require(`!!assets-loader?width=480&height=480!@images/${project.node.featuredMedia}`)" width="80" quality="20" fit="contain" />
						</g-link>
						<div class="details" >
							<div class="title">
								<g-link :to="project.node.path">{{ project.node.title }}</g-link>
								<div class="subtitle">
									{{ project.node.category }}
								</div>
							</div>
						</div>
					</article>
				</transition-group>
			</li>
			<li v-if="!filteredProjects.length" id="projects-empty-state">
				<transition name="fade">
					<div class="layouts">
						<p class="fancy">No projects to show with those filters.</p>
					</div>
				</transition>
			</li>
		</ul>

	</div>
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

<style lang="scss">
#projects-filter {
	margin-top: 2rem;
}

#projects-empty-state {
	grid-column: 1 / -1;

	p {
		text-align: center;
		padding: 2rem;
	}
}

ul.fullwidth {
	padding: 2rem;
	list-style-type: none;
	display: grid;
	row-gap: 4rem;
	column-gap: 2rem;
	grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));

	li {
		margin: 0;
		display: inline-block;
		padding: 0;
		position: relative;
		font-size: .875rem;
		line-height: 1.4em;
		/* font-style: italic; */
	}

	a {
		display: block;
		text-decoration: none;
	}

	.title {
		padding: .5rem 1rem 1rem 0;

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
		}
	}

	img {
		display: block;
		transition: all .2s cubic-bezier(0.215, 0.610, 0.355, 1);

		&:hover {
			box-shadow: 0 0 0 .25rem var(--yellow);
			transform: translateY(-.25rem);
		}
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
