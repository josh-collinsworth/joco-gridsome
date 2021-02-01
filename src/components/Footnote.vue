<template>
  <p>
    <strong>{{ identifier }}. </strong>
    <slot />
    <a
      :id="`footnote-${identifier}`"
      :href="`#footnote-link-${identifier}`"
    >
      Back
    </a>
  </p>
</template>

<script>
export default {
  props: {
    identifier: {
      type: [Number, String],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  font-style: normal
}
</style>
