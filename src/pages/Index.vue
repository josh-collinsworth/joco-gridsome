<template>
  <Layout>
    <div class="intro">
      <p class="fancy">Hi, I’m Josh Collinsworth.</p>
      <h1>I’m a front-end developer, designer, and code instructor.</h1>

      <!-- Note to self: this did not work in production for some reason -->
      <!-- I have no idea why and I'm infuriated by it. But somehow the fact just didn't render. All were display:none -->

      <!-- <p id="random-fact-heading"><strong>A random fact about me:</strong></p>
      <transition-group name="fancy-fade" mode="out-in" class="transition-box">
        <p v-for="(fact, index) in fancyFacts" class="fancy fact" :key="fact" v-show="fancyNumber == index + 1">
          <span v-html="fact"></span>
          <button v-if="fancyNumber" id="random-fact-btn" @click="getRandomFancyNumber" :disabled="fancyNumber === 0">Get another</button>
        </p>
        <p v-if="!fancyNumber" class="fancy fact" key="x">
          Sorry, that’s all the facts! Maybe try the <g-link to="/about">about page</g-link>?
        </p>
      </transition-group> -->
      <p class="fancy">
        I’m currently searching for a new opportunity to contribute professionally to a great team.
      </p>

      <TagList>
        <li>
          <Tag to="/about"><span aria-hidden="true">👀&ensp;</span>Learn more about me</Tag>
        </li>
        <li>
          <Tag to="/contact"><span aria-hidden="true">✉️&ensp;</span>Get in touch</Tag>
        </li>
        <li>
          <Tag to="/projects"><span aria-hidden="true">💼&ensp;</span>See some of my projects</Tag>
        </li>
        <li>
          <Tag to="/blog"><span aria-hidden="true">📝&ensp;</span>Read my mostly-neglected blog</Tag>
        </li>
      </TagList>
    </div>
  </Layout>
</template>

<page-query>
query {
  allWordPressPost (perPage: 1) {
    edges {
      node {
        id
        title
        path
        excerpt
        slug
      }
    }
  }
}
</page-query>

<script>
import Tag from '~/components/Tag'
import TagList from '~/components/TagList'

export default {
  components: { Tag, TagList },

  metaInfo: {
    title: "Josh Collinsworth, Developer/Designer"
  },

  data: () => ({
    latestPost: [],
    fancyNumber: Math.ceil(Math.random() * 28),
    fancyFacts: [
      `I work on the support experience team&nbsp;at&nbsp;<a href="http://getflywheel.com" target="_blank" rel="noopener noreferrer">Flywheel</a>.`,
      `Vue is my go-to framework, but I'm a fan of Svelte,&nbsp;too.`,
      `I built a word game app called <a href="https://quina.app" target="_blank">Quina</a>.`,
      `I was once a code school instructor, teaching WordPress&nbsp;development.`,
      `I was a full-time graphic designer before gravitating toward&nbsp;development.`,
      `I built this headless WP site from scratch using&nbsp;<a href="https://gridsome.org" target="_blank">Gridsome</a>.`,
      `I was known for my dad jokes (even before I became&nbsp;a&nbsp;dad).`,
      `I used to be a bartender. I served Bill Murray a drink&nbsp;once.`,
      `One of these facts is&nbsp;made-up.`,
      `My favorite TV show is&nbsp;30&nbsp;Rock.`,
      `I have experience with Ruby on Rails, WordPress, and several JavaScript&nbsp;frameworks.`,
      `Languages I know include HTML, CSS, JavaScript, PHP, and&nbsp;Ruby.`,
      `I firmly believe that a hot dog is <strong>not</strong>&nbsp;a&nbsp;sandwich.`,
      `I’ve been building websites since&nbsp;2015.`,
      `I rebrand this site about once a year.&nbsp;(I write a new blog post almost as rarely.)`,
      `My ideal career goal would be to use my skills to impact positive social&nbsp;change.`,
      `I live in Omaha,&nbsp;Nebraska.`,
      `I'm a lifelong Nintendo fan. Super Metroid is my&nbsp;favorite&nbsp;game.`,
      `I was mainly homeschooled growing&nbsp;up.`,
      `I'm a guitarist, bassist and&nbsp;pianist.`,
      `I play music mostly by ear; I can play most songs on one&nbsp;listen.`,
      `I love dogs. I have a yorkie named&nbsp;Griff.`,
      `My favorite kind of food&nbsp;is&nbsp;Mexican.`,
      `I've built WordPress plugins, a Chrome Extension, and an Android&nbsp;app.`,
      `I worked for America Online once. (Really.)`,
      `I worked in technical support for four years before transitioning to full-time&nbsp;development.`,
      `I love making CodePens. I've had several featured on the <a href="https://codepen.io" target="_blank">CodePen</a> homepage and Instagram&nbsp;feed.`,
      `My wife and I have watched around 200 <strong>seasons</strong> of TV shows&nbsp;together.`,
    ],
    usedNumbers: []
  }),

  created() {
    this.latestPost = this.$page.allWordPressPost.edges[0].node
  },

  methods: {
    getRandomFancyNumber() {
      const randomNumber = Math.ceil(Math.random() * this.fancyFacts.length)

      console.log(randomNumber)
      console.log(this.usedNumbers.length, this.fancyFacts.length)

      if (this.usedNumbers.length >= this.fancyFacts.length) {
        console.log('used up all the guesses')
        this.fancyNumber = 0
        return
      }

      if (this.usedNumbers.includes(randomNumber)) {
        console.log('oops! getting new fancy number')
        this.getRandomFancyNumber()
      } else {
        console.log('setting fancy number to ' + randomNumber)
        this.fancyNumber = randomNumber
        this.usedNumbers += randomNumber
      }
    }
  }
};
</script>

<style lang="scss">

:root {
  --max-width: 36rem;
}

#random-fact-heading {
  font-size: 0.7em;
  text-transform: uppercase;
  margin-top: 1.5rem;
  line-height: 1;
}

#random-fact-btn {
  padding: 0;
  border: none;
  text-decoration: underline;
  text-decoration-color: var(--yellow);
  justify-self: flex-start;
  font-size: 0.8rem;
  line-height: 1.8rem;
  margin: 0 0 2rem;
  font-style: italic;
  display: block;
}

.intro {
  display: grid;
  grid-gap: .5rem;
  grid-template-columns: 1fr;

  p, h1 {
    margin: 0;
  }

  p.fancy.fact {
    min-height: 5em;
  }

  h1 {
    font-size: calc(2rem + 2vw);

    & + p {
      margin-top: .75rem;
    }
  }
}

.transition-box {
  position: relative;
}

.fancy-fade {

  &-enter-active,
  &-leave-active {
    transition: all .4s cubic-bezier(0.77, 0, 0.175, 1);
    opacity: 1;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateY(-1em);
    position: absolute;
    top: 0;
    left: 0;
  }

  &-enter {
    transform: translateY(1em);
  }

  &-move {
    transition: transform all .4s;
  }
}
</style>
