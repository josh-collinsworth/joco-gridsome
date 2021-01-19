<template>
  <pre :class="`language-${lang}`"
    ><code :class="`language-${lang}`"
      ><slot 
    /></code
  ></pre>  
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>