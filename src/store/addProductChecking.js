import { makeObservable, observable, action } from 'mobx';





class AddProductChecking {
  inputRefs = {};
  countPhotos = {};
  btnClicked = false;

  constructor() {
    makeObservable(this, {
      inputRefs: observable,
      setInputRef: action,

      countPhotos: observable,
      setCountPhotos: action,

      btnClicked: observable,
      setBtnClicked: action,
    });
  }

  setInputRef(fieldName, ref) {
    this.inputRefs[fieldName] = ref;
  }

  setCountPhotos(countPhotos) {
    this.countPhotos = countPhotos;
  }

  setBtnClicked(btnClicked) {
    this.btnClicked = btnClicked;
  }
}

export default new AddProductChecking()