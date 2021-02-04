import DefaultLayout from '~/layouts/Default.vue'
import xa from '~/components/ExternalLink'
import '~/assets/css/global.scss'


export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout);
  Vue.component('xa', xa);

  head.link.push({
    rel: 'preload',
    href: '/fonts/avertastd-regular-webfont.woff2',
    as: 'font',
    type: 'font/woff2',
    crossorigin: true
  }, {
    rel: 'preload',
    href: '/fonts/avertastd-regularitalic-webfont.woff2',
    as: 'font',
    type: 'font/woff2',
    crossorigin: true
  }, {
    rel: 'preload',
    href: '/fonts/avertastd-bold-webfont.woff2',
    as: 'font',
    type: 'font/woff2',
    crossorigin: true
  }, {
    rel: 'preload',
    href: '/fonts/pensumdisplaybasic-bold-webfont.woff2',
    as: 'font',
    type: 'font/woff2',
    crossorigin: true
  })

  head.style.push({
    type: 'text/css',
    cssText: `.header{display:flex;justify-content:space-between;align-items:center;width:100%;position:relative;z-index:3;min-height:calc(90px + 2rem)}.skip-to-content-link{position:absolute;top:0;left:-100vw;padding:.5em;opacity:0;display:flex;justify-content:center;align-items:center;height:3rem;background:var(--darkBlue);color:var(--white)}@font-face{font-family:Pensum Display;src:url(/fonts/pensumdisplaybasic-bold-webfont.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:Averta Std;src:url(/fonts/avertastd-regular-webfont.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:Averta Std;src:url(/fonts/avertastd-regularitalic-webfont.woff2) format("woff2");font-weight:400;font-style:italic;font-display:swap}@font-face{font-family:Averta Std;src:url(/fonts/avertastd-bold-webfont.woff2) format("woff2");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:Averta Std;src:url(/fonts/avertastd-bolditalic-webfont.woff2) format("woff2");font-weight:700;font-style:italic;font-display:swap}html{line-height:1.5em}a{color:inherit;text-decoration:none}a{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}div{width:100%}.header{padding:2rem var(--margin);width:100%}*,:after,:before{box-sizing:border-box;font-family:inherit}body{font-family:var(--body-font);margin:0;padding:0}#app,body{color:var(--ink)}#app{width:100%;max-width:100vw;min-height:100vh;display:flex;flex-wrap:wrap;align-content:space-between;background:var(--paper)}:root{--white:#fff;--black:#101820;--body-font:"Averta Std",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;--heading-font:"Pensum Display",Georgia,serif;--yellow:#ffd100;--orange:#ff6a13;--red:#e4002b;--lightGray:#a7a8aa;--midGray:#888b8d;--darkGray:#53565a;--darkerGray:#341f23;--lightBlue:#7ba7bc;--darkBlue:#34657f;--darkBlueRGB:52,101,127;--ink:var(--darkGray);--paper:var(--white);--header-color:var(--darkGray);--accent-color:var(--darkBlue);--link-color:var(--darkBlue);--highlight-color:var(--darkGray)}`
  })
}
