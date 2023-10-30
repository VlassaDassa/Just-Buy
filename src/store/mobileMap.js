import { makeAutoObservable } from 'mobx';



class MobileMap {
    show = false
    constructor() {
        makeAutoObservable(this)
    }

    toggleShow(show = !this.show) {
        this.show = show
    }
}

export default new MobileMap()