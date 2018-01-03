export default function() {
  let selector = '.product-variants [data-custom-product-attribute]'

  $('body').on('change', selector, () => {
    $("input[name$='refresh']").click()
  })
}
