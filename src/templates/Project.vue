<template>
	<main>
		<g-image :src="require(`!!assets-loader!@images/${$page.project.featuredMedia}`)" width="200" height="200" fit="contain"/>
		<h1>{{$page.project.title}}</h1>
		<div v-html="$page.project.content"></div>
		<hr>
		<p>
			<strong>View this project at: </strong>
			<a v-if="$page.project.link" :href="$page.project.link">
				{{ $page.project.link }}
			</a>
		</p>
	</main>
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
	}
}
</page-query>

<script>
export default {
  computed: {
		imageURL() {
			return
		}
	}
}
</script>


<style scoped>

</style>
