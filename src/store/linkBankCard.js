import { makeAutoObservable } from 'mobx';



class LinkBankCardStore {
    show = false
    constructor() {
        makeAutoObservable(this)
    }

    toggleShow(show = !this.show) {
        this.show = show
    }
}

export default new LinkBankCardStore()