<template>
  <Layout>
    <div class="intro">
      <p class="fancy">Hi, I’m Josh Collinsworth.</p>
      <h1>I’m a front-end developer and designer.</h1>

      <p class="fancy">
        I work with lots of excellent people at
        <a href="http://getflywheel.com" target="_blank" rel="noopener noreferrer">Flywheel</a>.
      </p>
      <p>
        <ul>
          <li><g-link to="/about">Learn more about me</g-link>;</li>
          <li><g-link to="/projects">See some of my work</g-link>; or</li>
          <li><g-link to="/contact">Get in contact</g-link>.</li>
        </ul>
      </p>
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
import { Pager } from 'gridsome';

import Post from '~/components/Post';

export default {
  components: {
    Pager,
    Post
  },
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

  ul {
    margin-top: 2rem;

    li {
      margin-bottom: .5rem;
    }
  }
}
</style>
