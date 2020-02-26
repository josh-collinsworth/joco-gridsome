<template>
  <Layout>
    <h1>Hi! I'm Josh Collinsworth.</h1>
    <p class="fancy">
      I'm a Happiness Engineer at
      <a href="http://getflywheel.com" target="_blank" rel="noopener noreferrer">Flywheel</a>;
      <a href="https://joshcollinsworth.com/code/">web developer</a>;
      <a href="https://joshcollinsworth.com/design/">graphic designer</a>; WordPress instructor; casual writer and infrequent
      <a href="https://joshcollinsworth.com/blog/">blogger</a>; feminist; font hoarder; frequent
      <a href="https://twitter.com/jjcollinsworth" target="_blank" rel="noopener noreferrer">Tweeter</a>; occasional public speaker; pun enthusiast; craft beer enjoyer; CrossFitter; game collector and hobbyist; musician; liberal abuser of semicolons.
    </p>
    <hr>
    <H2>Recent posts:</H2>
    <ul class="post-list">
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <Post :post="node"/>
      </li>
    </ul>
    <Pager :info="$page.allWordPressPost.pageInfo"/>
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
import { Pager } from "gridsome";
import Post from "~/components/Post";
import H2 from "~/components/H2";

export default {
  components: {
    Pager,
    Post,
    H2
  },
  metaInfo: {
    title: "Josh Collinsworth Development and Design"
  }
};
</script>
