import { makeAutoObservable } from 'mobx';



class SendToCart {
    show = false
    productId = null
    colors = []
    sizes = []
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

    setSizes(sizes) {
        this.sizes = sizes
    }

    setColors(colors) {
        this.colors = colors
    }
}

export default new SendToCart()

