<template>
  <Layout>
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
				<transition :duration="2000" name="fade">
					<g-link :to="project.node.path" :style="{transitionDelay: i * 300 }">
						<div class="details">
							<span class="title">
								{{ project.node.title }}
							</span>
						</div>
						<g-image :src="`images/projects/${project.node.featuredMedia}`"/>
					</g-link>
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

ul.fullwidth {
	padding: 0;
	list-style-type: none;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));

	li {
		margin: 0;
		display: inline-block;
		padding: 0;
		position: relative;
	}

	a {
		display: block;
		overflow: hidden;
		margin: 0;
		padding: 0;
		width: 100%;
	}

	img {
		object-fit: cover;
		display: block;
		transition: all .25s cubic-bezier(0.5, 0, 0.5, 1);
		transform: scale(1);
	}

	.details {
		width: 100%;
		height: 100%;
		background: linear-gradient(to top, #53565a, transparent);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
		color: white;
		padding: 0rem 2rem;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		text-align: center;
		opacity: 0;

		transition: all .25s cubic-bezier(0.5, 0, 0.5, 1);

		&:hover {
			opacity: 1;

			.title {
				transform: translateY(0);
			}

			& + img {
				transform: scale(1.1);
			}
		}

		.title {
			font-size: 1.5rem;
			font-weight: bold;
			margin-bottom: 1em;
			transition: inherit;
			transform: translateY(.5rem);
		}
	}
}

.fade {

	&-enter-active {
		transition: all .35s cubic-bezier(.22,.61,.36,1);
		transition-delay: .05s;
	}

	&-leave-active {
		transition: all .25s cubic-bezier(.55,.06,.68,.19);
	}

	&-enter, &-leave-to {
		opacity: 0;
	}

	&-enter {
		transform: translateY(1rem);
		}

	&-leave-to {
		transform: translateY(1rem);
	}
}
</style>
