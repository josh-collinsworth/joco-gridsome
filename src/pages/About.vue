<template>
  <Layout>
    <div class="about">

      <h1>About me</h1>

      <h2>Professionally: </h2>

      <p>I'm a front-end engineer specializing in Vue. I love solving user problems using modern JavaScript and elegant CSS paired with semantic, accessible HTML. My professional background also includes graphic design, code instruction, technical support and help documentation.</p>

      <g-image id="avatar" src="/images/self-portrait-summer-2018.svg" alt="" />

      <p>My ideal role involves contributing to a collaborative team that cares deeply about good design, inclusion, mentorship, and how its work impacts the world.</p>
      
      <p>I most recently worked on a product team, building features and enhancements within a design system, but I'm open to to the right fit anywhere that allows me put my skills to use for a positive impact.</p>


      <h3>I might be your guy if you need someone&nbsp;who:</h3>

      <ul>
        <li>Is an exceptional collaborator and communicator;</li>
        <li>Can both code <em>and</em> design;</li>
        <li>Is a CSS whiz, including Sass, modern layout, responsive design, and fun(ctional)&nbsp;animation;</li>
        <li>Writes accessible, semantic HTML and knows the ins and outs of SVG;</li>
        <li>Is strong with JavaScript and/or Vue (including ES6+, Vue Router, Vuex, Nuxt, Gridsome and jQuery);</li>
        <li>Knows their way around web performance, optimization, DNS, and troubleshooting;</li>
        <li>Is deeply familiar with WordPress;</li>
        <li>Enjoys teaching and helping others;</li>
        <li>Can author clear, simple, useful help docs and tutorials; and/or</li>
        <li>Is prolific with puns and dad jokes.</li>
      </ul>


      <h3>I'm <em>also</em> capable with:</h3>

      <ul>
        <li>React</li>
        <li>Svelte</li>
        <li>Ruby on Rails</li>
        <li>PHP and MySQL</li>
        <li>Regular tools of the trade like git/GitHub, NPM, CLIs and such</li>
        <li>Agile/Scrum</li>
        <li>Collaborating on designs, communicating with stakeholders and end users, and presenting work</li>
      </ul>


      <h3>I know some, and would like to learn more, about:</h3>

      <ul>
        <li>TypeScript</li>
        <li>GraphQL</li>
        <li>JavaScript testing</li>
        <li>Node/serverless</li>
      </ul>


      <h3>I'm probably <em style="text-decoration: underline">NOT</em> your guy if:</h3>
      <ul>
        <li>Remote work is out of the question (<i>potentially willing to reconsider after the pandemic is over, but flexibility is still preferred</i>);</li>
        <li>Your company isn't <em>deeply</em> serious about DEI and anti-racism;</li>
        <li>High quality, inclusive design isn't a priority;</li>
        <li>You need somebody who's good at cleaning or closing doors (<i>I asked my wife what I was bad at and that's what she said</i>);</li>
        <li>Your culture doesn't allow people to bring their whole selves to work every&nbsp;day; and/or</li>
        <li>You can't stand dad humor.</li>
      </ul>


      <h2>Previously: </h2>
      <p>
        Front-end developer at <xa to="https://wpengine.com">WP Engine;</xa> Tier 2 support team tech lead at <xa to="https://getflywheel.com">Flywheel</xa>; WordPress instructor for <xa to="interfaceschool.com">Aim Code School</xa>; graphic designer; seasoned bartender who makes a mean old fashioned.
      </p>


      <h2>Personally:</h2>
      <p>
        Omaha, Nebraska resident; <g-link to="/code/">hobby coder</g-link>;
        author of a frequently neglected <g-link to="/blog/">blog</g-link>;
        font hoarder; husband; dad (with both the jokes and bod to match); fairly ordinary white dude in tech striving to be an LGBTQIA+ and BIPOC ally and advocate; cold brew addict; author of over ten thousand <xa to="twitter.com/jjcollinsworth">tweets</xa>, a few of which are decent; occasional conference speaker; pun enthusiast; accessibility and inclusion advocate; dog owner and lover; massive Nintendo fan; musician/guitarist/hack pianist/aggressively mediocre singer; liberal abuser of semicolons.
      </p>


      <!-- <h2>Pointlessly:</h2>

		  <p>I coded this chart from unquantifiable, subjective, and highly fluid data, which may or may not be partially arranged just to make it fit nicely (and which, if anything, probably only really proves that I like things more when I'm better at them).</p>

      <PointlessChart /> -->

    </div>
  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: "Josh Collinsworth | About me"
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
    margin-bottom: 1em;
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
