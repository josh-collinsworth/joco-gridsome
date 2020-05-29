<template>
  <Layout>
    <div class="about">

      <img id="avatar" src="images/self-portrait-summer-2018.svg" alt="">

      <h1>About me</h1>

      <h2>Professionally: </h2>
      <p>I'm a front-end engineer on the Support Experience team at <xa to="getflywheel.com">Flywheel</xa>, where I put my skills to use building and improving tools and workflows for Flywheel's support team and users.
      <p>I write semantic, user-focused HTML. I enjoy putting my design skills to use writing CSS from scratch to create beautiful UIs. At work, I use <xa to="vuejs.org">Vue</xa> and Ruby on Rails, but JAMstack is my jam. Fortunately, I love working with Vue (so I'm a big fan of <xa to="nuxtjs.org">Nuxt</xa> and <xa to="gridsome.org">Gridsome</xa>), but I also really dig Svelte and have worked with React on several projects, too.</p>

      <h2>Previously: </h2>
      <p>
        Graphic designer; WordPress instructor for <xa to="interfaceschool.com">Interface Web School</xa>; support team lead at <xa to="getflywheel.com">Flywheel</xa>; seasoned bartender.
      </p>

      <h2>Personally: </h2>
      <p>
        <g-link to="/code/">Hobby coder</g-link>;
        infrequent <g-link to="/blog/">blogger</g-link>;
        font hoarder; hit-and-miss <a href="https://twitter.com/jjcollinsworth" target="_blank" rel="noopener">Tweeter</a>;
        official dad (both in family status and sense of humor); occasional conference speaker; pun enthusiast; accessibility and inclusion advocate; fan of dogs; musician; liberal abuser of semicolons.
      </p>

      <h2>Pointlessly:</h2>

		  <p>I coded this chart from unquantifiable, subjective and not-at-all static data, which may or may not be partially arranged just to make it fit nicely.</p>

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
    display: block;
    padding: 1rem;
    background: var(--lightBlue);
    border-radius: 4rem;
    margin-bottom: 1rem;
  }
}
</style>
