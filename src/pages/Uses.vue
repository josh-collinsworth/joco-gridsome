<template>
  <Layout>
    <h1>{{ $page.wordPressPage.title }}</h1>

    <div v-html="$page.wordPressPage.content">
    </div>

  </Layout>
</template>


<page-query>
query page {
	wordPressPage(id:4412) {
    title
    content
  }
}
</page-query>


<script>
export default {
  data() {
    return {
      loading: true,
      posts: []
    };
  },
  metaInfo: {
    title: "Code"
  },
}
</script>

<style>
  .loadfade {
      transition: all .3s ease;
  }
  .loadfade-enter-active, .loadfade-leave-active {
    opacity: 1;
  }
  .loadfade-enter, .loadfade-leave-to {
    opacity: 0;
  }
</style>
