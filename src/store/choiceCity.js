import { makeAutoObservable } from 'mobx';



class ChoiceCity {
    show = false
    cityName = null
    cityCoord = null
    constructor() {
        makeAutoObservable(this)
    }

    toggleShow(show = !this.show) {
        this.show = show
    }

    setCityName(cityName) {
        this.cityName = cityName
    }

    setCityCoord(cityCoord) {
        this.cityCoord = cityCoord
    }
}

export default new ChoiceCity()