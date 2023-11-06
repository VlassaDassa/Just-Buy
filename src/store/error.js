import { makeAutoObservable } from 'mobx';



class ErrorStore {
    show = false
    errorMessage = 'Неизвестная ошибки'
    regShow = false
    constructor() {
        makeAutoObservable(this)
    }

    toggleShow(show = !this.show) {
        this.show = show
    }

    setErrorMessage(errorMessage) {
        this.errorMessage = errorMessage
    }
}

export default new ErrorStore()


