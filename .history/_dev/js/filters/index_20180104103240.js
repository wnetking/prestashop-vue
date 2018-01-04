import Vue from 'vue'
import striphtml from './striphtml'

export default function() {
  Vue.filter('striphtml', striphtml)
  Vue.filter('json', value => {
    return JSON.stringify(value, null, 2)})
}
