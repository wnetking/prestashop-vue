export default function () {
  this.$root.$emit('bv::hide::modal', 'quickviewModal', '#quickviewModal')
  this.$root.$emit('bv::show::modal', 'blokcartModal', '#blokcartModal')
}
