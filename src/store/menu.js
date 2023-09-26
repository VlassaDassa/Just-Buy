import { makeAutoObservable } from 'mobx';



class MenuStore {
    show = false
    subcategoryShow = false
    constructor() {
        makeAutoObservable(this)
    }

    toggleShow(show = !this.show) {
        this.show = show
    }

    toggleSubcategoryShow(subcategoryShow = !this.subcategoryShow) {
        this.subcategoryShow = subcategoryShow
    }

}

export default new MenuStore()