<template>
  <div>
    <Grid :density="50" />
  	<footer>This is the footer</footer>
  </div>
</template>

<script>
import Grid from '~/components/Grid'

export default {
  components: { Grid }
}
</script>

<style scoped>
footer {
  width: 100%;
  background: var(--lightBlue);
  padding: 3rem 1.5rem 1.5rem;
}

.cell-grid {
  transform: rotateX(180deg);
  top: 1rem;
}
</style>
