import { makeAutoObservable } from 'mobx';



class SendFeedback {
    show = false
    constructor() {
        makeAutoObservable(this)
    }

    toggleShow(show = !this.show) {
        this.show = show
    }
}

export default new SendFeedback()