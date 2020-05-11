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
          <li><g-link to="/about">About me</g-link></li>
          <li><g-link to="/projects">My work</g-link></li>
          <li><g-link to="/contact">Get in contact</g-link></li>
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
export default {
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
    display: flex;
    list-style-type: none;
    padding: 0;
    font-size: .9rem;

    li {
      margin-bottom: .5rem;
      padding: .25em .5em;
      background: var(--darkBlue);
      color: var(--paper);
      margin-right: .5em;

      a {
        color: inherit;
      }
    }
  }
}
</style>
