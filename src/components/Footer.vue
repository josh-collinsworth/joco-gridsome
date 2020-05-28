<template>
  <div>
    <Grid :density="50" />
  	<footer class="footer">
      <p>
        This is a headless <xa to="gridsome.org">Gridsome</xa> site
        backed by <xa to="wordpress.org">WordPress</xa>,
        hosted on <xa to="netlify.com">Netlify</xa>
        and <xa to="getflywheel.com">Flywheel</xa> (respectively).
      </p>
      <p>©2020 Josh Collinsworth.</p>
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
  line-height: 1.6em;

  a {
    color: inherit;
  }
}

.cell-grid {
  transform: rotateX(180deg);
  top: 1rem;
}
</style>
