export default function (event, extraParameters) {
    event.preventDefault();

    var $productRefresh = $(event.target);
    let eventType = 'updatedProductCombination';

    if (typeof extraParameters !== 'undefined' && extraParameters.eventType) {
        eventType = extraParameters.eventType;
    }

    var preview = getRequestParameter('preview');
    if (preview !== null) {
        preview = '&preview=' + preview;
    } else {
        preview = '';
    }

    var query = $(event.target.form).serialize() + '&ajax=1&action=productrefresh' + preview;
    var actionURL = $(event.target.form).attr('action');

    $.post(actionURL, query, null, 'json').then(function (resp) {
        prestashop.emit('updateProduct', {
            reason: {
                productUrl: resp.productUrl
            },
            refreshUrl: $productRefresh.data('url-update'),
            eventType: eventType,
            resp: resp
        });
    });
});