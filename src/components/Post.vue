<template>
  <div>
      <H2>
        <g-link :to="post.slug || post.path">
          <span v-html=post.title> </span>
        </g-link>
      </H2>
    <div v-html="post.excerpt" />
    <g-link :to="post.path">
      Read More
    </g-link>
  </div>
</template>

<script>
import H2 from '~/components/H2';

export default {
  components: {
    H2
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
