<template>
  <div>
    <Grid :density="50" />
  	<footer class="footer">
      <div>
        <ul class="footer__links">
          <li><g-link to="/feed">RSS</g-link></li>
          <li><xa to="github.com/josh-collinsworth">GitHub</xa></li>
          <li><xa to="codepen.io/joshuajcollinsworth">CodePen</xa></li>
          <li><xa to="twitter.com/jjcollinsworth">Twitter</xa></li>
        </ul>
      </div>
      <div class="fine-print">
        <p>
          This is a headless <xa to="gridsome.org">Gridsome</xa> site
          backed by <xa to="wordpress.org">WordPress</xa>,
          hosted on <xa to="netlify.com">Netlify</xa>
          and <xa to="getflywheel.com">Flywheel</xa> (respectively).
        </p>
        <p>This site does not use cookies or collect personal data; it only uses local browser storage to anonymously remember any preferences you may set (after defaulting to your OS preference).</p>
        <p>©2020 Josh Collinsworth.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Grid from '~/components/Grid'
import xa from '~/components/ExternalLink'

export default {
  components: { Grid }
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background: var(--darkBlue);
  color: var(--white);
  font-size: .75rem;
  line-height: 1.6em;

  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
  }

  a {
    color: inherit;
  }

  &__links {
    list-style-type: square;
    padding-right: 1rem;
    margin-right: 2rem;

    @media(min-width: 768px) {
      border-right: 1px solid;
    }

    li {
      margin: 0 0 .5rem;
    }
  }

  .fine-print {
    font-style: italic;

    p {
      margin: .5rem 0;
      max-width: 44em;
    }
  }
}

.cell-grid {
  transform: rotateX(180deg);
  top: 1rem;
}
</style>
