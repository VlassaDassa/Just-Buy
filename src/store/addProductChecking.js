import { makeObservable, observable, action } from 'mobx';





class AddProductChecking {
  inputRefs = {};
  countPhotos = {};
  photos = {};
  btnClicked = false;

  constructor() {
    makeObservable(this, {
      inputRefs: observable,
      setInputRef: action,
      resetInputRefs: action,

      countPhotos: observable,
      setCountPhotos: action,

      btnClicked: observable,
      setBtnClicked: action,

      photos: observable,
      addPhoto: action,
      deletePhoto: action,
    });
  }

  setInputRef(fieldName, ref) {
    this.inputRefs[fieldName] = ref;
  }

  resetInputRefs() {
    this.inputRefs = {};
  }

  addPhoto(file, id) {
    this.photos[id] = file;
  }

  deletePhoto(id) {
    delete this.photos[id]
  }

  setCountPhotos(countPhotos) {
    this.countPhotos = countPhotos;
  }


  setBtnClicked(btnClicked) {
    this.btnClicked = btnClicked;
  }

  
}

export default new AddProductChecking()