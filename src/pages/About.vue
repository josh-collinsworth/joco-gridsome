<template>
  <Layout>
    <div class="about">

      <h1>About me</h1>

      <h2>Professionally: </h2>

      <p>I'm a front-end engineer on the Support Experience team at <xa to="getflywheel.com">Flywheel</xa>; I help build and improve tools and workflows for Flywheel's users and the good folks supporting them.

      <g-image id="avatar" src="/images/self-portrait-summer-2018.svg" alt="" />

      <p>I enjoy working at the intersection of design and code, creating accessible, performant, user-focused UIs and designs. While I work with <xa to="vuejs.org">Vue</xa> and Ruby on Rails on the job, JAMstack is my jam. I love working with Vue (so I'm a big fan of <xa to="nuxtjs.org">Nuxt</xa> and <xa to="gridsome.org">Gridsome</xa>), but I also really dig Svelte and have worked with React on some projects, too.</p>


      <h2>Previously: </h2>
      <p>
        Graphic designer; WordPress instructor for <xa to="interfaceschool.com">Interface Web School</xa>; support team lead at <xa to="getflywheel.com">Flywheel</xa>; seasoned bartender who makes a mean margarita from scratch.
      </p>


      <h2>Personally:</h2>
      <p>
        Omaha, Nebraska resident; <g-link to="/code/">hobby coder</g-link>;
        author of a frequently neglected <g-link to="/blog/">blog</g-link>;
        font hoarder; husband; dad (with the jokes to match); fairly ordinary white dude in tech trying to be an ally and advocate; author of thousands of <xa to="twitter.com/jjcollinsworth">tweets</xa>, some decent; occasional conference speaker; pun enthusiast; accessibility and inclusion advocate; dog owner and lover; massive Nintendo fan; musician; liberal abuser of semicolons.
      </p>


      <h2>Pointlessly:</h2>

		  <p>I coded this chart from unquantifiable, subjective, and highly fluid data, which may or may not be partially arranged just to make it fit nicely.</p>

      <PointlessChart />

    </div>
  </Layout>
</template>

<script>
import PointlessChart from '~/components/PointlessChart'

export default {
  components: { PointlessChart },
  metaInfo: {
    title: "About me"
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

  #avatar {
    width: 8rem;
    height: 8rem;
    float: right;
    display: block;
    padding: 1rem;
    background: var(--lightBlue);
    border-radius: 4rem;
    margin: 1rem;
    shape-outside: circle(80%);
  }
}
</style>
