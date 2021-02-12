<template>
  <Layout>
    <p class="pre-heading">Category:</p>
    <h1>{{ $page.category.title }}</h1>

    <article v-for="post in orderedPosts" :key="post.id">
      <g-link :to="post.path" class="post-image-link">
        <g-image :src="require(`~/assets/images/post_images/${post.coverImage}`)" alt="" />
        <span class="sr">{{ post.title }}</span>
      </g-link>

      <h2>
        <g-link :to="post.path">
          <span v-html="post.title"></span>
        </g-link>
      </h2>
      <p class="post-excerpt">
        {{ post.excerpt }}
        <g-link :to="post.path">Read more</g-link>
      </p>
    </article>
  </Layout>
</template>


<page-query>
query Category ($id: ID!) {
  category(id: $id) {
    title
    id
    posts {
      title
      path
      date
      coverImage
      excerpt
    }
  }
}
</page-query>

<script>
export default {
	computed: {
    orderedPosts() {
      return this.$page.category.posts.sort((a, b) => new Date(a.date) < new Date(b.date))
    }
  }
}
</script>



<style scoped lang="scss">
h1 {
  font-family: var(--body-font);
  font-size: 2rem;
  margin-bottom: 2rem;
}

article img {
  margin-top: 6rem;
}

.post-image-link {
  min-height: 6rem;
  display: inline-block;
}

article:first-of-type img {
  margin-top: 0;
}

.pagination nav a {
  padding: .25em;
  text-align: center;
}

.post-excerpt {
  font-style: italic;
}

.pre-heading {
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
