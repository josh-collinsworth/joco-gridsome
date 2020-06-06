<template>
  <Layout>
    <div class="intro">
      <p class="fancy">Hi, I’m Josh Collinsworth.</p>
      <h1>I’m a front-end developer and designer.</h1>

      <p class="fancy">
        I work on the support experience team&nbsp;at&nbsp;<a href="http://getflywheel.com" target="_blank" rel="noopener noreferrer">Flywheel</a>.
      </p>

      <TagList>
        <li><Tag to="/about">About me</Tag></li>
        <li><Tag to="/projects">Projects</Tag></li>
        <li><Tag to="/blog">Blog</Tag></li>
        <li><Tag to="/contact">Contact</Tag></li>
      </TagList>

    </div>
  </Layout>
</template>

<page-query>
query {
  allWordPressPost (perPage: 1) {
    edges {
      node {
        id
        title
        path
        excerpt
        slug
      }
    }
  }
}
</page-query>

<script>
import Tag from '~/components/Tag'
import TagList from '~/components/TagList'

export default {
  components: { Tag, TagList },
  metaInfo: {
    title: "Josh Collinsworth, Developer/Designer"
  },
  data: () => ({
    latestPost: []
  }),
  created() {
    this.latestPost = this.$page.allWordPressPost.edges[0].node
  }
};
</script>

<style lang="scss">
.intro {
  display: grid;
  grid-gap: .5rem;
  grid-template-columns: 1fr;

  p, h1 {
    margin: 0;
  }

  h1 {
    font-size: calc(2rem + 2vw);

    & + p {
      margin-top: .75rem;
    }
  }
}
</style>
