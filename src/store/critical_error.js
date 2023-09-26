import { makeAutoObservable } from 'mobx';



class CriticalErrorStore {
    show = false
    constructor() {
        makeAutoObservable(this)
    }

    toggleShow(show = !this.show) {
        this.show = show
    }
}

export default new CriticalErrorStore()