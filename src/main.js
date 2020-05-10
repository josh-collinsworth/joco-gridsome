import DefaultLayout from '~/layouts/Default.vue'
import ExternalLink from '~/components/ExternalLink'
import '~/assets/css/main.scss'


export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout);
  Vue.component('ExternalLink', ExternalLink);

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Fira+Mono:400,700&display=swap'
  });
}
