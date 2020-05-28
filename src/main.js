import DefaultLayout from '~/layouts/Default.vue'
import xa from '~/components/ExternalLink'
import '~/assets/css/global.scss'


export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout);
  Vue.component('xa', xa);
}
