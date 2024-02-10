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
      deleteRelate: action,
      deleteColor: action,
      deleteSize: action,

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

  deleteColor() {
    // Define last index for color
    let maxIndex = -1;
    for (const key in this.inputRefs) {
        const match = key.match(/(?:countColor|choiceColor)_([0-9]+)/);
        if (match) {
            const index = parseInt(match[1], 10);
            if (!isNaN(index) && index > maxIndex) {
                maxIndex = index;
            }
        }
    }

    // Deleting
    delete this.inputRefs[`countColor_${maxIndex}`];
    delete this.inputRefs[`choiceColor_${maxIndex}`];

  }


  deleteSize() {
    // Define last index for size
    let maxIndex = -1;
    for (const key in this.inputRefs) {
        const match = key.match(/(?:countSize|choiceSize)_([0-9]+)/);
        if (match) {
            const index = parseInt(match[1], 10);
            if (!isNaN(index) && index > maxIndex) {
                maxIndex = index;
            }
        }
    }

    // Deleting
    delete this.inputRefs[`countSize_${maxIndex}`];
    delete this.inputRefs[`choiceSize_${maxIndex}`];

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

  deleteRelate(index) {
    delete this.inputRefs['relateInput_' + index]
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