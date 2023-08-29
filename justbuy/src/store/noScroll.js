import { makeAutoObservable } from 'mobx';



class NoScroll {
    scroll = true
    constructor() {
        makeAutoObservable(this)
    }

    toggleScroll(scroll = !this.scroll) {
        this.scroll = scroll
    }
}

export default new NoScroll()