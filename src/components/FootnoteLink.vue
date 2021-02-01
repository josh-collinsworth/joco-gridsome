<template>
  <sup>
    <a
      :id="`footnote-link-${identifier}`"
      :href="`#footnote-${identifier}`"
    >
      {{ identifier }}
    </a>
  </sup>

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
sup {
  line-height: 1;
  font-weight: bold;
}
</style>
