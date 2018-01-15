let promises = []
let abortPreviousRequests = () => {
    var promise;
    while (promises.length > 0) {
        promise = promises.pop();
        promise.abort();
    }
}
let requestData = {
    ajax: '1',
    action: 'update'
}

export default function (event) {
    event.preventDefault()
    this.$nextTick(function () {
        this.themeLoaderShow = true
    })
    abortPreviousRequests();
    $.ajax({
        url: event.target.href,
        method: 'POST',
        data: requestData,
        dataType: 'json',
        beforeSend: function (jqXHR) {
            promises.push(jqXHR);
        }
    }).then( resp => {
        this.$nextTick(function () {
            this.modules.blockcart = resp.cart
            this.themeLoaderShow = false
        })

    }).fail((resp) => {
        prestashop.emit('handleError', {
            eventType: 'updateProductInCart',
            resp: resp,
            // cartAction: cartAction.type
        });
    });
}