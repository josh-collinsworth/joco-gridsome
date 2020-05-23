<template>
  <Layout>
    <img
      v-if="$page.wordPressPost.featuredMedia"
      :src="$page.wordPressPost.featuredMedia.sourceUrl"
      :width="$page.wordPressPost.featuredMedia.mediaDetails.width"
      :alt="$page.wordPressPost.featuredMedia.altText"
    />
    <h1 v-html="$page.wordPressPost.title"></h1>
    <p class="details">
      <b>Originally published</b>: {{ date }}
      <br>
      <b>Last updated</b>: {{ modified }}
    </p>
    <div class="content" v-html="filterPre($page.wordPressPost.content)"/>

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
    date
    modified
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
      title: this.$page.wordPressPost.title
    }
  },
  mounted() {
    prism.init()
  },
  methods: {
    filterPre(content) {
      return content.split('<pre>').join('<pre><code class="language-javascript">').split('</pre>').join('</code></pre>')
    }
  },
  computed: {
    date() {
      return new Date(this.$page.wordPressPost.date).toDateString()
    },
    modified() {
      return new Date(this.$page.wordPressPost.modified).toDateString()
    }
  }
}
</script>

<style lang="scss" scoped>
@font-face {
	font-family: 'MonoLisa';
	src: url('../assets/fonts/monolisa-regular-webfont.woff2') format('woff2');
	font-weight: bold;
	font-style: italic;
}

h4 {
  margin: 2em 0 0;
  padding-bottom: 0;
}

pre, code {
  font-family: MonoLisa, Courier, monospace;
}
</style>
