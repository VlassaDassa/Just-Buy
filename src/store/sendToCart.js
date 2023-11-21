import { makeAutoObservable } from 'mobx';



class SendToCart {
    show = false
    productId = null
    relateInputs = []
    constructor() {
        makeAutoObservable(this)
    }

    toggleShow(show = !this.show) {
        this.show = show
    }

    setProductId(productId) {
        this.productId = productId
    }

    setRelateInputs(relateInputs) {
        this.relateInputs = relateInputs
    }

}

export default new SendToCart()

