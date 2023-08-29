import { makeAutoObservable } from 'mobx';



class MobileMenu {
    show = true
    constructor() {
        makeAutoObservable(this)
    }

    toggleShow(show = !this.show) {
        this.show = show
    }

}

export default new MobileMenu()