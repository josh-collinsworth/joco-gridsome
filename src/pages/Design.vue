<template>
  <Layout>
    <h1>{{ $page.wordPressPage.title }}</h1>

    <div v-html="$page.wordPressPage.content">
    </div>

  </Layout>
</template>


<page-query>
query Page {
	wordPressPage(id:1297) {
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
  created() {
    const getPosts = async () => {
      let response = await fetch(
        "https://joshcollinsworth.com/wp-json/wp/v2/posts"
      );
      let posts = await response.json();
      console.log(posts);
      posts.forEach(post => {
        this.posts.push({
          title: post.title.rendered,
          content: post.excerpt.rendered,
          link: post.slug
        });
      });
      this.loading = false;
          console.log(this.posts)

    };
    getPosts();
  }
};
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
