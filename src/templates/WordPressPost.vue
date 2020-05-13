<template>
  <Layout>
    <img
      v-if="$page.wordPressPost.featuredMedia"
      :src="$page.wordPressPost.featuredMedia.sourceUrl"
      :width="$page.wordPressPost.featuredMedia.mediaDetails.width"
      :alt="$page.wordPressPost.featuredMedia.altText"
    />
    <H1 v-html="$page.wordPressPost.title"/>
    <div v-html="$page.wordPressPost.content"/>

    <hr />

    <template v-if="$page.wordPressPost.categories.length">
      <h4>Posted in:</h4>
      <TagList>
        <li v-for="category in $page.wordPressPost.categories" :key="category.id" >
          <Tag :to="category.path">{{ category.title }}</Tag>
        </li>
      </TagList>
    </template>
    <template v-if="$page.wordPressPost.tags.length">
      <h4>Tags</h4>
      <TagList>
        <li v-for="tag in $page.wordPressPost.tags" :key="tag.id" >
          <Tag :to="tag.path">{{ tag.title }}</Tag>
        </li>
      </TagList>
    </template>
  </Layout>
</template>

<page-query>
query WordPressPost ($id: ID!) {
  wordPressPost(id: $id) {
    title
    content
    featuredMedia {
      sourceUrl
      altText
      mediaDetails {
        width
      }
    }
    categories {
      id
      title
      path
    }
    tags {
      id
      title
      path
    }
  }
}
</page-query>

<script>
import Tag from '~/components/Tag'
import TagList from '~/components/TagList'
import prism from '~/assets/js/prism.js'

export default {
  components: { Tag, TagList },
  metaInfo() {
    return {
      title: this.$page.wordPressPost.title,
      link: [
        { to: '/assets/js/prism.js'}
      ]
    }
  },
}
</script>

<style>
h4 {
  margin: 2em 0 0;
  padding-bottom: 0;
}
</style>
