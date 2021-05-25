<template>
  <Layout>
    <div class="intro">
      <!-- <p class="fancy"><span aria-hidden="true" style="font-style: normal">👋🏻 </span>Hi, I’m Josh Collinsworth.</p> -->
      <h1>Hi, I’m Josh.</h1>

      <p class="fancy">
        <span aria-hidden="true" style="font-style: normal;">👋🏼</span>
        I’m a front-end developer, designer, and instructor specializing in Vue, CSS, and&nbsp;WordPress.
      </p>

      <div class="previously">
        <p>
          <b>Currently:</b> senior JavaScript developer at <xa to="aware3.com">Aware3</xa>;
          maker and designer&nbsp;of&nbsp;<xa to="quina.app">Quina</xa>;
          occasional author on <g-link to="/blog">my own blog</g-link>
          and <xa to="https://css-tricks.com/author/joshcollinsworth/">CSS&nbsp;Tricks</xa>.
        </p>

        <p>
          <b>Previously:</b> front-end engineer at <xa to="wpengine.com">WP Engine</xa>;
          senior support lead at <xa to="getflywheel.com">Flywheel</xa>;
          course instructor for <xa to="interfaceschool.com">AIM Code School</xa>;
          graphic designer at <xa to="https://dday.com/">David Day | Associates</xa>.
        </p>
      </div>
    </div>
  </Layout>
</template>


<script>
export default {
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
    font-size: calc(2.2rem + 2vw);

    @media (min-width: $widest) {
      font-size: 4rem;
    }
  }

  p.fancy {
    margin-top: .75rem;
    font-size: 1.2rem;

    @media (min-width: $narrow) {
      font-size: calc(1rem + 0.5vw);
    }

    @media (min-width: $widest) {
      font-size: 1.5rem;
    }
  }

  .previously {
    margin: 1.5rem 0 0.5rem;
    font-size: 1rem;
    max-width: 49ch;

    p {
      margin-bottom: 1.5em;
    }
  }
}
</style>
