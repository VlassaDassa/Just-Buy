import { makeAutoObservable } from 'mobx';



class SendToCart {
    show = false
    productId = null
    constructor() {
        makeAutoObservable(this)
    }

    toggleShow(show = !this.show) {
        this.show = show
    }

    setProductId(productId) {
        this.productId = productId
    }
}

export default new SendToCart()

