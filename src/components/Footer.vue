<template>
  <div>
    <Grid :density="50" />
  	<footer class="footer">
      <p>
        This is a headless <ExternalLink to="gridsome.org">Gridsome</ExternalLink> site
        backed by <ExternalLink to="wordpress.org">WordPress</ExternalLink>,
        hosted on <ExternalLink to="netlify.com">Netlify</ExternalLink>
        and <ExternalLink to="getflywheel.com">Flywheel</ExternalLink> (respectively). <br />
        ©2020 Josh Collinsworth.
      </p>
    </footer>
  </div>
</template>

<script>
import Grid from '~/components/Grid'

export default {
  components: { Grid }
}
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  background: var(--darkBlue);
  color: var(--white);
  font-size: .75rem;

  a {
    color: inherit;
  }
}

.cell-grid {
  transform: rotateX(180deg);
  top: 1rem;
}
</style>
