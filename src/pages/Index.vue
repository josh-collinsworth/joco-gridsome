<template>
  <Layout>
    <div class="intro">
      <h1>Hi, I’m Josh.</h1>

      <p class="fancy">
        <span aria-hidden="true" style="font-style: normal;">👋🏼</span>
        I’m a front-end developer and designer.
      </p>

      <div class="previously">
        <h2 class="h3">Professionally:</h2>
        <p>
          Senior developer at <xa to="shopify.com">Shopify</xa>;
          maker and designer of <i>Quina</i> (<xa to="quina.app">web</xa>/<xa to="https://play.google.com/store/apps/details?id=app.quina.collinsworth">Android</xa>);
          occasional author on <g-link to="/blog">my own blog</g-link>
          and on <xa to="https://css-tricks.com/author/joshcollinsworth/">CSS&nbsp;Tricks</xa>.
        </p>

        <h2 class="h3">Previously:</h2>

        <p>
          Senior JavaScript developer at <xa to="aware3.com">Aware3</xa>;
          front-end engineer at <xa to="wpengine.com">WP Engine</xa>;
          senior support lead at <xa to="getflywheel.com">Flywheel</xa>;
          course instructor for <xa to="interfaceschool.com">AIM Code School</xa>;
          graphic designer and contractor;
          seasoned bartender who makes a pretty good old fashioned. 
        </p>
        
        <h2 class="h3">Personally:</h2>

        <p>
          Hobby coder;
          infrequent blog author;
          font hoarder;
          husband;
          dad (with both the jokes and bod to match);
          accessibility advocate;
          cold brew coffee lover;
          DEI accomplice;
          occasional conference speaker;
          pun enthusiast;
          curious learner;
          dog owner and lover;
          lifelong Nintendo fan;
          musician/guitarist/hack pianist;
          liberal abuser of semicolons.
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

  .h3 {
    font-family: var(--body-font);
    font-weight: bold;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    font-size: 1.2rem;
    line-height: 1.2;
    border: 0;
  }
}
</style>
