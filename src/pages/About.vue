<template>
  <div>
    <h1>About me</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>

    <h2>Recent posts:</h2>
    <transition name="loadfade" mode="out-in">
      <div v-if="loading" class="loader loadfade" :key="loading">
        <h2>...</h2>
      </div>
      <div v-else>
        <ul class="loadfade">
          <li v-for="post in posts" :key="post.title">
            <a :href="'/' + post.link">
                <span v-html="post.title"></span>
            </a>
            <!-- <div v-html="post.content"></div> -->
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import H2 from '../components/H2';

export default {
  data() {
    return {
      loading: true,
      posts: []
    };
  },
  metaInfo: {
    title: "About me"
  },
  components: {
    H2
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts: async function(){
      let response = await fetch(
        "https://joshcollinsworth.com/wp-json/wp/v2/posts"
      );
      let posts = await response.json();
      posts.forEach(post => {
        this.posts.push({
          title: post.title.rendered,
          content: post.excerpt.rendered,
          link: post.slug
        });
      });
      this.loading = false;
    }
  }
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
