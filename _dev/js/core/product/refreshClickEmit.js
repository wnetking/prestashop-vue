export default function(){
    let selector = '.product-variants [data-product-attribute]'

    $('body').on('change', selector, function () {
        $("input[name$='refresh']").click();
    });
}