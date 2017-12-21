import striphtml from './striphtml'

export default function() {
  Vue.filter('striphtml', striphtml)
}
