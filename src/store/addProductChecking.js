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
      setMainPhoto: action,
    });
  }

  setInputRef(fieldName, ref) {
    this.inputRefs[fieldName] = ref;
  }

  resetInputRefs() {
    this.inputRefs = {};
  }

  addPhoto(file, id, main=false) {
    this.photos[id] = {
      file: file,
      main: main
    };
  }

  setMainPhoto(id) {
    Object.keys(this.photos).forEach((key) => {
      this.photos[key].main = false
    })

    this.photos[id].main = true
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