<template>
  <div>
    <div class="intro">
      <p class="fancy">Hi, I'm</p>
      <h1>Josh Collinsworth.</h1>

      <p class="fancy">
        I'm a front-end developer at
        <a href="http://getflywheel.com" target="_blank" rel="noopener noreferrer">Flywheel</a>.
      </p>
      <p>
        <g-link to="/about">Learn more about me</g-link>,
        <g-link to="/projects">see some of my work</g-link>, or
        <g-link to="/contact">get in contact</g-link>.
      </p>
    </div>

    <h2>Recent posts:</h2>
    <ul class="post-list">
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <Post :post="node"/>
      </li>
    </ul>
    <Pager :info="$page.allWordPressPost.pageInfo"/>
  </div>
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
    font-size: 3rem;
  }

  h2 {
    font-size: 1rem;
    padding: 0;
  }

  p {
    margin-bottom: .5rem;

    &.fancy {
      margin: 0;

      /* & + p {
        margin-top: 3rem;
      } */
    }
  }
}
</style>
