import { makeAutoObservable } from 'mobx';



class RelateSizeAndColor {
    show = false
    constructor() {
        makeAutoObservable(this)
    }

    toggleShow(show = !this.show) {
        this.show = show
    }
}

export default new RelateSizeAndColor()