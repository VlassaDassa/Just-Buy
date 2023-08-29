import { makeAutoObservable } from 'mobx';



class AuthStore {
    show = false
    regShow = false
    constructor() {
        makeAutoObservable(this)
    }

    toggleShow(show = !this.show) {
        this.show = show
    }

    setRegShow() {
        this.regShow = true
    }

    setRegHidden() {
        this.regShow = false
    }

}

export default new AuthStore()