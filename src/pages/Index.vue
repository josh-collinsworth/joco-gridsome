<template>
  <Layout>
    <div class="intro">
      <!-- <p class="fancy"><span aria-hidden="true" style="font-style: normal">👋🏻 </span>Hi, I’m Josh Collinsworth.</p> -->
      <h1>Hi, I’m Josh.</h1>

      <p class="fancy">I’m a front-end developer, designer, and code instructor.</p>

      <div class="previously">
        <p>
          <b>Currently:</b> senior JavaScript developer at <xa to="aware3.com">Aware3</xa>; maker and designer of <xa to="quina.app">Quina</xa>.
        </p>

        <p>
          <b>Previously:</b> front-end engineer at <xa to="wpengine.com">WP Engine</xa>;
          senior support lead at <xa to="getflywheel.com">Flywheel</xa>;
          WordPress instructor for <xa to="interfaceschool.com">AIM Code School</xa>.
        </p>
      </div>

      <TagList>
        <Tag to="/about">
          <span aria-hidden="true">👀&ensp;</span>
          Learn more <b>About</b> me
        </Tag>
        <Tag to="/contact">
          <span aria-hidden="true">✉️&ensp;</span>
          Get in <b>Contact</b>
        </Tag>
        <Tag to="/projects">
          <span aria-hidden="true">💼&ensp;</span>
          See some of my <b>Projects</b>
        </Tag>
        <Tag to="/blog">
          <span aria-hidden="true">📝&ensp;</span>
          Read my rarely-updated <b>Blog</b>
        </Tag>
      </TagList>
    </div>
  </Layout>
</template>



<script>
import Tag from '~/components/Tag'
import TagList from '~/components/TagList'

export default {
  components: { Tag, TagList },

  metaInfo: {
    title: "Josh Collinsworth, front-end developer/designer"
  },
};
</script>

<style lang="scss">
@import '../assets/css/scss/_vars';

:root {
  --max-width: 36rem;
}

.intro {
  display: grid;
  grid-gap: .5rem;
  grid-template-columns: 1fr;

  p, h1 {
    margin: 0;
  }

  h1 {
    font-size: calc(2rem + 2vw);

    @media (min-width: $widest) {
      font-size: 3.8rem;
    }

    & + p.fancy {
      margin-top: .75rem;
    }
  }

  .previously {
    margin: 1rem 0 0.5rem;
    font-size: 0.9rem;

    p {
      margin-bottom: 1em;
    }
  }
}
</style>
