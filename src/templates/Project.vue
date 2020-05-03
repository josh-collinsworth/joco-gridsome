<template>
	<main>
		{{$page.project.featuredMedia}}
		<g-image :src="$page.project.featuredMedia" />
		<h1>{{$page.project.title}}</h1>
	</main>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>


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
    name: '',
    props: {
    },
    components: {
    }
}
</script>


<style scoped>

</style>
