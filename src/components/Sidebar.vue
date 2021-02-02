<template>
  <aside id="sidebar">
    <h2>Recent posts</h2>
    <ul>
      <li v-for="post in recentPosts" :key="post.node.id">
        <g-link :to="post.node.path">
          {{post.node.title}}
        </g-link>
      </li>
      <li>
        <g-link to="/blog">
          [ View all posts ]
        </g-link>
      </li>
    </ul>

    <h2>Categories</h2>
    <ul class="display-flex">
      <li v-for="category in $static.allCategory.edges" :key="category.node.id">
        <g-link :to="category.node.path">
          {{ category.node.title }}
        </g-link>
      </li>
    </ul>

    <h2>Links</h2>

    <ul>
      <li>
        <g-link to="/about">
          About
        </g-link>
      </li>
      <li>
        <g-link to="/projects">
          Projects
        </g-link>
      </li>
      <li>
        <g-link to="/contact">
          Contact
        </g-link>
      </li>
      <li>
        <xa to="https://github.com/josh-collinsworth">
          GitHub
        </xa>
      </li>
      <li>
        <xa to="https://codepen.io/joshuajcollinsworth/">
          CodePen
        </xa>
      </li>
    </ul>

  </aside>
</template>

<static-query>
query Categories {
  allCategory: allCategory {
    edges {
      node {
        id
        title
        path
      }
    }
  }
  allPost: allPost {
    edges {
      node {
        title
        path
        id
      }
    }
  }
}
</static-query>


<script>
import TagList from './TagList'
import Tag from './Tag'

export default {
  components: {
    TagList, Tag
  },

  computed: {
    recentPosts() {
      return this.$static.allPost.edges.slice(0, 3)
    }
  }
}
</script>



<style lang="scss" scoped>
#sidebar {
  font-size: .85rem;
  display: none;
  align-self: start;
  position: sticky;
  top: 2rem;
  grid-column: 3 / 4;
  text-align: right;

  h2 {
    font-family: var(--body-font);
    font-size: .8em;
    text-transform: uppercase;
    margin: 3em 0 1.5em;
    padding: 0 0 .1em 0;
    border: none;
    border-bottom: .15em solid;

    &:first-of-type {
      margin-top: 0;
    }
  }

  ul {
    margin: 0;
    list-style-type: none;
    padding: 0;
    justify-content: flex-end;
    line-height: 1.2;

    &.display-flex li {
      margin-left: .5em;
    }

    li {
      font-size: inherit;
      margin-bottom: .75em;

      a {
        font-size: inerit;
        color: inherit;
        text-decoration-color: inherit;
      }
    }
  }
}
</style>
