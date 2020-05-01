<template>
  <Layout>
    <h1>Projects</h1>

		<ul class="fullwidth">
			<li v-for="project in $static.allProject.edges" :key="project.id">
				<g-link :to="project.node.link">
					<div class="details">
						<span class="title">
							{{ project.node.title }}
						</span>
					</div>
					<g-image :src="`images/projects/${project.node.featuredMedia}`"/>
				</g-link>
			</li>
		</ul>

  </Layout>
</template>

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
      }
    }
  }
}
</static-query>

<style lang="scss">
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
</style>
