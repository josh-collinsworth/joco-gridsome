<template>
  <Layout>
    <div class="about">

      <h1>About me</h1>

      <h2>Professionally: </h2>

      <div>
        <g-image id="avatar" src="/images/self-portrait-summer-2018.svg" alt="" />
        
        <p>I'm a senior JavaScript developer specializing in Vue, elegant CSS, and semantic, accessible HTML. I currently put those skills to use at <xa to="aware3.com">Aware3</xa> building software to help nonprofits engage with their communities.</p>

        <p>There's a bit more about my tech toolbox on my <g-link to="/uses">uses</g-link> page.</p>
      </div>

      <h2>Previously: </h2>
      <p>
        Front-end developer at <xa to="https://wpengine.com">WP Engine;</xa> Tier 2 support team tech lead at <xa to="https://getflywheel.com">Flywheel</xa>; WordPress instructor for <xa to="interfaceschool.com">Aim Code School</xa>; graphic designer; seasoned bartender who makes a pretty good old fashioned; deservedly struggling musician.
      </p>


      <h2>Personally:</h2>
      <p>
        Maker of the game <i>Quina</i> (<xa to="quina.app">web</xa> / <xa to="https://play.google.com/store/apps/details?id=app.quina.collinsworth">Google Play Store</xa>);
        <g-link to="/code/">hobby coder</g-link>;
        author of a frequently neglected <g-link to="/blog/">blog</g-link>;
        font hoarder;
        husband;
        dad (with both the jokes and bod to match);
        fairly ordinary white dude in tech striving to be an LGBTQIA+ and BIPOC ally and advocate;
        cold brew addict;
        author of over ten thousand <xa to="twitter.com/jjcollinsworth">tweets</xa>, a few of which are decent;
        occasional conference speaker;
        pun enthusiast;
        accessibility and inclusion advocate;
        dog owner and lover;
        lifelong Nintendo fan;
        musician/guitarist/hack pianist/aggressively mediocre singer;
        liberal abuser of semicolons.
      </p>

      <p>Currently: Omaha; previously: Kansas City, Manhattan (KS), Oklahoma City, middle of nowhere, Kansas.</p>
    </div>
  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: "Josh Collinsworth | About me"
  }
}
</script>

<style lang="scss" scoped>
.about {
  h2 {
    font-size: 1.8rem;
    padding: 0;
    margin-bottom: 0em;
  }

  h3 {
    font-family: var(--body-font);
    font-weight: bold;
    margin-top: 2.5em;
    margin-bottom: 1em;
    font-size: 1.2rem;
    line-height: 1.2;
  }

  #avatar {
    width: 8rem;
    height: 8rem;
    float: right;
    display: block;
    padding: 1rem;
    background: var(--lightBlue);
    border-radius: 4rem;
    margin: 0 0 1rem 1rem;
    shape-outside: circle(80%);
  }
}
</style>
