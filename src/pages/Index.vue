<template>
  <Layout>
    <div class="intro">
      <p class="fancy">Hi, I’m Josh Collinsworth.</p>
      <h1>I’m a front-end developer and designer.</h1>

      <p class="fancy">
        I currently work on the support experience team at
        <a href="http://getflywheel.com" target="_blank" rel="noopener noreferrer">Flywheel</a>.
      </p>

      <TagList>
        <li><Tag to="/about">About me</Tag></li>
        <li><Tag to="/projects">My work</Tag></li>
        <li><Tag to="/contact">Get in contact</Tag></li>
      </TagList>

    </div>
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (page: $page, perPage: 5) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
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
  }
};
</script>

<style lang="scss">
.intro {
  h1 {
    font-size: calc(2rem + 2vw);
  }

  h2 {
    font-size: 1rem;
    padding: 0;
  }

  p {
    margin-bottom: .5rem;

    &.fancy {
      margin: 0;

      & + h1 {
        margin-top: .5rem;
      }
    }
  }
}
</style>
