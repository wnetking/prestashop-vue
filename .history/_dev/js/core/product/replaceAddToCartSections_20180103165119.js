let replaceAddToCartSections = ((addCartHtml) => {
  let $addToCartSnippet = $(addCartHtml)
  let $addProductToCart = $('.product-add-to-cart')

  function replaceAddToCartSection (replacement) {
    let replace = replacement.$addToCartSnippet.find(replacement.targetSelector)

    if ($(replacement.$targetParent.find(replacement.targetSelector)).length > 0) {
      if (replace.length > 0) {
        $(replacement.$targetParent.find(replacement.targetSelector)).replaceWith(replace[0].outerHTML)
      } else {
        $(replacement.$targetParent.find(replacement.targetSelector)).html('')
      }
    }
  }

  const productAvailabilitySelector = '.add'
  replaceAddToCartSection({
    $addToCartSnippet: $addToCartSnippet,
    $targetParent: $addProductToCart,
    targetSelector: productAvailabilitySelector
  })

  const productAvailabilityMessageSelector = '#product-availability'
  replaceAddToCartSection({
    $addToCartSnippet: $addToCartSnippet,
    $targetParent: $addProductToCart,
    targetSelector: productAvailabilityMessageSelector
  })

  const productMinimalQuantitySelector = '.product-minimal-quantity'
  replaceAddToCartSection({
    $addToCartSnippet: $addToCartSnippet,
    $targetParent: $addProductToCart,
    targetSelector: productMinimalQuantitySelector
  })
})

export default replaceAddToCartSections
