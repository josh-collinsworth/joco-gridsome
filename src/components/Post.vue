<template>
  <div>
    <h2>
      <g-link :to="post.slug || post.path">
        <span v-html=post.title> </span>
      </g-link>
    </h2>
    <div v-html="post.excerpt" />
    <g-link :to="post.path">
      Read More
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
