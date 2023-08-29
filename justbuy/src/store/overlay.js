import { makeAutoObservable } from 'mobx';



class OverlayStore {
    show = false
    constructor() {
        makeAutoObservable(this)
    }

    toggleShow(show = !this.show) {
        this.show = show
    }

}

export default new OverlayStore()