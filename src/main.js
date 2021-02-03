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
}
