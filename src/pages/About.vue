<template>
  <Layout>
    <div class="about">

      <h1>About me</h1>

      <h2>Professionally: </h2>

      <p>I'm a front-end engineer, specializing in JavaScript generally and Vue specifically. I'm passionate about modern CSS and semantic, accessible HTML.</p>

      <g-image id="avatar" src="/images/self-portrait-summer-2018.svg" alt="" />

      <p>I enjoy working at the intersection of design and code, collaborating on inclusive, performant, user-focused UIs and designs seasoned with animation.</p>


      <h3>I might be your guy if you need someone&nbsp;who:</h3>

      <ul>
        <li>Is an exceptional collaborator and communicator;</li>
        <li>Really knows Vue, including Vue Router, Vuex, Nuxt and Gridsome;</li>
        <li>Is a CSS whiz, including Sass, layout, responsive design, and fun(ctional) animation;</li>
        <li>Writes accessible, semantic HTML (or HAML) and knows SVG;</li>
        <li>Is deeply familiar with WordPress and can write you a custom theme from scratch;</li>
        <li>Knows his way around web performance, optimization, DNS and troubleshooting;</li>
        <li>Could use a helpful person who enjoys teaching and mentoring;</li>
        <li>Can author clear and useful documentation;</li>
        <li>Possesses prolific mastery of puns and dad jokes; and/or</li>
        <li>Tries to consider users and impact above all else.</li>
      </ul>


      <h3>I'm also pretty dangerous with:</h3>

      <ul>
        <li>React</li>
        <li>Svelte</li>
        <li>Ruby on Rails</li>
        <li>PHP and MySQL</li>
      </ul>


      <h3>I'm capable and comfortable with:</h3>

      <ul>
        <li>Regular tools of the trade like git/GitHub, NPM, CLIs and such</li>
        <li>Agile/Scrum methodology</li>
        <li>Collaborating on designs and communicating with stakeholders and end users, and presenting work</li>
      </ul>


      <h3>I know some and would like to learn more about:</h3>

      <ul>
        <li>TypeScript</li>
        <li>GraphQL</li>
        <li>JavaScript testing</li>
        <li>Node/serverless</li>
      </ul>


      <h3>I'm probably <em style="text-decoration: underline">not</em> your guy if:</h3>

      <ul>
        <li>Remote work is currently out of the question (potentially willing to reconsider after the pandemic is over);</li>
        <li>High quality and inclusive design isn't a priority;</li>
        <li>Your company isn't outspokenly serious about DEI and anti-racism;</li>
        <li>Your culture doesn't allow people to bring their whole selves to work every day;</li>
        <li>Hours in seats are tracked over contribution;</li>
        <li>You need somebody who's good at cleaning or closing doors (I asked my wife what I was bad at and that's what she said);</li>
        <li>You can't stand dad humor; and/or</li>
        <li>You can't tolerate cursing. (All good debugging requires a little friendly cursing. That's the first thing they teach you in computer science, I bet.)</li>
      </ul>


      <h2>Previously: </h2>
      <p>
        Front-end developer on the Support Experience team at <xa to="https://wpengine.com">WP Engine;</xa> Tier 2 support team tech lead at <xa to="https://getflywheel.com">Flywheel</xa>; WordPress instructor for <xa to="interfaceschool.com">Aim Code School</xa>; graphic designer; seasoned bartender who makes a mean old fashioned; old enough to have worked at an AOL call center once.
      </p>


      <h2>Personally:</h2>
      <p>
        Omaha, Nebraska resident; <g-link to="/code/">hobby coder</g-link>;
        author of a frequently neglected <g-link to="/blog/">blog</g-link>;
        font hoarder; husband; dad (with the jokes to match); fairly ordinary white dude in tech striving to be an ally and advocate for LGBTQIA+ folx and BIPOC; cold brew addict; author of ten thousand <xa to="twitter.com/jjcollinsworth">tweets</xa> of <em>widely</em> varying substance and quality; occasional conference speaker; pun enthusiast; accessibility and inclusion advocate; dog owner and lover; massive Nintendo fan; musician/guitarist/hack pianist/aggressively mediocre singer; liberal abuser of semicolons.
      </p>


      <!-- <h2>Pointlessly:</h2>

		  <p>I coded this chart from unquantifiable, subjective, and highly fluid data, which may or may not be partially arranged just to make it fit nicely (and which, if anything, probably only really proves that I like things more when I'm better at them).</p>

      <PointlessChart /> -->

    </div>
  </Layout>
</template>

<script>
import PointlessChart from '~/components/PointlessChart'

export default {
  components: { PointlessChart },
  metaInfo: {
    title: "About me"
  }
}
</script>

<style lang="scss" scoped>
.about {
  h2 {
    font-size: 1.8rem;
    padding: 0;
    margin-bottom: 0em;
  }

  h3 {
    font-family: 'Averta STD';
    font-weight: bold;
    margin-top: 2.5em;
    font-size: 1.2rem;
    line-height: 1.2;
  }

  #avatar {
    width: 8rem;
    height: 8rem;
    float: right;
    display: block;
    padding: 1rem;
    background: var(--lightBlue);
    border-radius: 4rem;
    margin: 1rem;
    shape-outside: circle(80%);
  }
}
</style>
