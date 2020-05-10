<template>
  <Layout>
    <div class="about">
      <h1>About me</h1>

      <h2>Professionally: </h2>
      <p>I'm a front-end engineer at <ExternalLink to="getflywheel.com">Flywheel</ExternalLink>, where I work with primarily with Vue and Ruby on Rails.</p>
      <p>I write semantic, user-focused HTML. I love CSS. JAMstack is my jam. <ExternalLink to="vuejs.org">Vue</ExternalLink> is my favorite (so I'm a big fan of <ExternalLink to="nuxtjs.org">Nuxt</ExternalLink> and <ExternalLink to="gridsome.org">Gridsome</ExternalLink>), but I also really dig Svelte and have worked with React on several projects.</p>

        <h2>Previously: </h2>
      <p>
        Full-time graphic designer; WordPress instructor and support team lead.
      </p>
        <h2>Personally: </h2>
      <p>
        <g-link to="/code/">Hobby coder</g-link>;
        casual writer and infrequent
        <g-link to="/blog/">blogger</g-link>; font hoarder; hit-and-miss
        <a href="https://twitter.com/jjcollinsworth" target="_blank" rel="noopener">Tweeter</a>;
        co-creator of a human; occasional public speaker; pun enthusiast; accessibility and inclusion advocate; fan of dogs; musician; liberal abuser of semicolons.
      </p>

    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About me"
  }
}
</script>

<style lang="scss">
.about {
  h2 {
    font-size: 1.8rem;
    padding: 0;
    border: none;
  }
}
</style>
