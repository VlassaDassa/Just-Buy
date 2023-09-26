import error from "../store/error";



export const showError = (message) => {
    if (!error.show) {
      error.setErrorMessage(message)
      error.toggleShow()
    }
}