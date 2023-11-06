import { makeAutoObservable } from 'mobx';



class SendToCart {
    show = false
    constructor() {
        makeAutoObservable(this)
    }

    toggleShow(show = !this.show) {
        this.show = show
    }
}

export default new SendToCart()

