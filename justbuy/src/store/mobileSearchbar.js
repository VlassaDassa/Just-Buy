import { makeAutoObservable } from 'mobx';



class MobileSearchBar {
    show = false
    constructor() {
        makeAutoObservable(this)
    }

    toggleShow(show = !this.show) {
        this.show = show
    }
}

export default new MobileSearchBar()