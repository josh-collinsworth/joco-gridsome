<template>
  <Layout>
    <article>
      <g-image
        :src="require(`!!assets-loader!@images/post_images/${$page.post.coverImage}`)"
        alt=""
      />
      <h1 v-html="$page.post.title"></h1>
      <p class="details">
        <b>Originally published</b>: {{ date }}
        <br>
        <b>Last updated</b>: {{ updated }}
      </p>

      <VueRemarkContent class="content" />

      <hr />

      <p class="post-post">
        <strong>Thanks for reading.</strong> If you have any questions, comments, etc., feel free to
        <g-link to="/contact">get in contact with me here</g-link>.
      </p>


      <template v-if="$page.post.categories.length">
        <h4>Posted in:</h4>
        <TagList>
          <Tag
            :to="`/category/${category}/`"
            v-for="category in $page.post.categories"
            :key="category.id"
          >
            {{ category }}
          </Tag>
        </TagList>
      </template>
      <!-- TODO: figure out handling of categories and tags now that WordPress is out of the picture -->
      <!-- <template v-if="$page.post.tags && $page.post.tags.length">
        <h4>Tags</h4>
        <TagList>
          <li v-for="tag in $page.post.tags" :key="tag.id" >
            <Tag :to="tag.path">{{ tag.title }}</Tag>
          </li>
        </TagList>
      </template> -->
      <p>
        <g-link to="/blog">&lsaquo; Back to blog</g-link>
      </p>
    </article>
  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
  post(id: $id) {
    title
    content
    date
    updated
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

    updated() {
      return new Date(this.$page.post.updated).toDateString()
    },

    modified() {
      if (!this.$page.post.modified) return null
      return new Date(this.$page.post.modified).toDateString()
    }
  }
}
</script>

<style lang="scss">
:root {
  --max-width: 36rem;
}

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
  margin: 0 0 4rem;
}

.content {
  img {
    margin: 2em 0;
  }

  table {
    font-size: 0.9em;
    border-collapse: collapse;
    max-width: 200%;
    margin: 2rem 0;

    tr td,
    tr th {
      border-bottom: 1px solid var(--lightGray);
      padding: .5em;
      text-align: left;

      &:first-of-type {
        padding-left: 0;
      }

      &:last-of-type {
        padding-right: 0;
      }
    }
  }
}

.post-post {
  font-size: 1.1rem;
  font-style: italic;
  line-height: 1.4;
  margin-bottom: 3rem;
}
</style>
