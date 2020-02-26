<template>
  <Layout>
    <H1 v-html="$page.markdownPost.title"/>
    <div v-html="$page.markdownPost.content"/>


  </Layout>
</template>

<page-query>
query markdownPost ($id: ID!) {
  markdownPost(id: $id) {
    title
		date
    content
		coverImage
		path
  }
}
</page-query>

<script>
import H2 from '../components/H2'

export default {
  metaInfo () {
    return {
      title: this.$page.markdownPost.title
    }
  }
}
</script>

<style>
  ul.list {
    list-style: none;
    padding: 0;
  }
  ul.list li {
    display: inline-block;
    margin-right: 0.25em;
  }
  ul.list.tags li a {
    padding: 0.25em 0.5em;
    background-color: lightgray;
  }
  ul.list li:last-child:after {
    content: '';
  }
</style>
