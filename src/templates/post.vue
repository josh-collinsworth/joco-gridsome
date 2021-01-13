<template>
  <Layout>
    <img
      v-if="$page.post.coverImage"
      :src="$page.post.coverImage"
      alt=""
    />
    <h1 v-html="$page.post.title"></h1>
    <p class="details">
      <b>Originally published</b>: {{ date }}
      <br>
      <span v-if="modified"><b>Last updated</b>: {{ modified }}</span>
    </p>
    <VueRemarkContent />

    <hr />

    <template v-if="$page.post.categories.length">
      <h4>Posted in:</h4>
      <TagList>
        <li v-for="category in $page.post.categories" :key="category.id" >
          <Tag :to="`/${category}`">{{ category.title }}</Tag>
        </li>
      </TagList>
    </template>
    <template v-if="$page.post.tags && $page.post.tags.length">
      <h4>Tags</h4>
      <TagList>
        <li v-for="tag in $page.post.tags" :key="tag.id" >
          <Tag :to="tag.path">{{ tag.title }}</Tag>
        </li>
      </TagList>
    </template>
    <p>
      <g-link to="/blog">&lsaquo; Back to blog</g-link>
    </p>
  </Layout> 
</template>

<page-query>
query Post ($id: ID!) {
  post(id: $id) {
    title
    content
    date
    coverImage
    categories
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
      title: this.$page.post.title
    }
  },

  mounted() {
    prism.init()
  },

  computed: {
    date() {
      return new Date(this.$page.post.date).toDateString()
    },

    modified() {
      if (!this.$page.post.modified) return null
      return new Date(this.$page.post.modified).toDateString()
    }
  }
}
</script>

<style lang="scss" scoped>
@font-face {
	font-family: 'MonoLisa';
	src: url('../assets/fonts/monolisa-regular-webfont.woff2') format('woff2');
	font-weight: normal;
  font-style: normal;
  font-display: swap;
}

h4 {
  margin: 2em 0 0;
  padding-bottom: 0;
}

pre, code {
  font-family: MonoLisa, Courier, monospace;
}

.details {
  margin: -1rem 0 4rem;
}
</style>
