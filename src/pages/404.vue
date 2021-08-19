<template>
  <Layout :sidebar="true">
    <h1>Ope! 404 
      <div aria-hidden="true" class="ascii">¯\_(ツ)_/¯</div>
    </h1>
    
    <div class="container">
      <p>Sorry, looks like that's a bad link. Maybe you were looking for one of these things?</p>

      <ul>
        <li>
          <g-link to="/">
            <span aria-hidden="true">👀&ensp;</span>
            Home (about me)
          </g-link>
        </li>
        <li>
          <g-link to="/contact">
            <span aria-hidden="true">✉️&ensp;</span>
            Contact
          </g-link>
        </li>
        <li>
          <g-link to="/projects">
            <span aria-hidden="true">💼&ensp;</span>
            Projects
          </g-link>
        </li>
        <li>
          <g-link to="/blog">
            <span aria-hidden="true">📝&ensp;</span>
            Blog
          </g-link>
        </li>
      </ul>
    </div>
  </Layout>
</template>


<script>
import Tag from '~/components/Tag'
import TagList from '~/components/TagList'

export default {
  components: { Tag, TagList },
}
</script>

<style scoped>
h1 {
  line-height: 1.3;
  margin-bottom: 2rem;
}

.ascii {
  font-family: var(--body-font);
}
</style>
