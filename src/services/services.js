import axios from 'axios';
import { toJS } from "mobx";

import addProductChecking from '../store/addProductChecking';

import masterCard from './../assets/images/bankIcons/mastercard.svg';
import discover from './../assets/images/bankIcons/discover.svg';
import amex from './../assets/images/bankIcons/amex.svg';
import jcb from './../assets/images/bankIcons/jcb.svg';
import visa from './../assets/images/bankIcons/visa.svg';
import question from './../assets/images/bankIcons/question.svg';




export function addSpaceToNChARS(inputString, groupSize = 4, separator = ' ') {
    const cleanedString = inputString.replace(/ /g, '');

    const groups = [];
    for (let i = 0; i < cleanedString.length; i += groupSize) {
      groups.push(cleanedString.slice(i, i + groupSize));
    }

    const formattedString = groups.join(separator);

    return formattedString;
}


export function onlyNumbers(inputString) {
    return inputString.replace(/[^0-9]/g, '')
}


export function detectCardType(cardNumber) {
  var cardNumberCleaned = cardNumber.trim().replace(/[\s-]/g, '');

    if (/^5[1-5]/.test(cardNumberCleaned)) {
        return masterCard

    } 
    
    else if (/^4/.test(cardNumberCleaned)) {
        return visa

    } 
    
    else if (/^3[47]/.test(cardNumberCleaned)) {
        return amex

    } 
    
    else if (/^6(?:011|5)/.test(cardNumberCleaned)) {
        return discover

    }
    
    else if (/^(?:2131|1800|35\d{3})/.test(cardNumberCleaned)) {
      return jcb
    }
    
    return question
}


export function hiddenNumberCard(numberCard) {
    return String(numberCard).replace(/^(\d{4})\d{8}(\d{4})$/, '$1********$2');
}


export function getFileObject(filePath, fileName) {
    return axios.get(filePath, { responseType: 'arraybuffer' })
        .then((response) => {
            if (response.status === 200) {
                const file = new File([response.data], fileName);
                return file;
            } else {
                throw new Error('Failed to fetch file');
            }
        })
        .catch((error) => {
            throw error;
        });
}


export const containsNumber = (value) => {
    const regex = /^\d*$/;
    return regex.test(value)
}


function hasNoEmptyValues(obj) {
  for (const key in obj) {
    if (key !== "photos" && obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (value === "") {
        return false; 
      } else if (typeof value === "object") {
        if (!hasNoEmptyValues(value)) {
          return false; 
        }
      } else if (Array.isArray(value)) {
        for (const item of value) {
          if (typeof item === "object" && !hasNoEmptyValues(item)) {
            return false; 
          }
        }
      }
    }
  }
  return true;
}


// Checking on eror on the page "AddProduct"
export const checkinOnError = (values) => {
    const conditionalExpression = hasNoEmptyValues(values) && 
                                values.description.length > 300 

    if (addProductChecking.countPhotos > 0) {
        if (conditionalExpression) {
            return true
        }

        else {
            return false
        }
    }
    
    return 'photos'
}


// Define class for field on the "addProduct" page
export const defineErrorClass = (fieldName) => {
    if (addProductChecking.btnClicked) {
        const value = addProductChecking?.inputRefs[fieldName]?.value;
      
        if (value === '' || (fieldName === 'description' && (value && value.length < 300))) {
            return 'general_characteristics__input error';
        }
    }
      
    return 'general_characteristics__input';
}


// Calculate total count
const calculateCount = (data) => {
  let count = 0;

  if (data.color) {
    data.color.forEach((item) => {
      if (item.countColor) {
        count += parseInt(item.countColor, 10);
      }
    });
  }

  if (data.size) {
    data.size.forEach((item) => {
      if (item.countSize) {
        count += parseInt(item.countSize, 10);
      }
    });
  }

  if (data.color) {
    return count
  }
  
  if (data.size) {
    return count
  }

  return false;
};


// Group fields for make correct object for send to server
function groupFields(original) {
    const grouped = { ...original };
    const colorGroup = {};
    const sizeGroup = {};
  
    Object.keys(original).forEach(key => {
      const matchColor = key.match(/^choiceColor_(\d+)$/);
      const matchSize = key.match(/^choiceSize_(\d+)$/);
  
      if (matchColor) {
        const index = matchColor[1];
        if (!colorGroup[index]) {
          colorGroup[index] = { selectColor: original[key] };
        } else {
          colorGroup[index].selectColor = original[key];
        }
        delete grouped[key];
      } else if (matchSize) {
        const index = matchSize[1];
        if (!sizeGroup[index]) {
          sizeGroup[index] = { selectSize: original[key] };
        } else {
          sizeGroup[index].selectSize = original[key];
        }
        delete grouped[key];
      } else {
        const colorCountMatch = key.match(/^countColor_(\d+)$/);
        const sizeCountMatch = key.match(/^countSize_(\d+)$/);
  
        if (colorCountMatch) {
          const index = colorCountMatch[1];
          if (!colorGroup[index]) {
            colorGroup[index] = { countColor: original[key] };
          } else {
            colorGroup[index].countColor = original[key];
          }
          delete grouped[key];
        } else if (sizeCountMatch) {
          const index = sizeCountMatch[1];
          if (!sizeGroup[index]) {
            sizeGroup[index] = { countSize: original[key] };
          } else {
            sizeGroup[index].countSize = original[key];
          }
          delete grouped[key];
        }
      }
    });
  
    grouped.color = Object.values(colorGroup);
    grouped.size = Object.values(sizeGroup);

    return grouped;
}


// Preparing object for send to server
function transformObject(inputObj) {
  const fixedFields = {
      "name": inputObj.name,
      "price": inputObj.price,
      "subcategory": inputObj.subcategory,
      "count": inputObj.count,
      "photos": inputObj.photos,
      "description": inputObj.description,
  };

  const characteristics = {};
  for (const key in inputObj) {
      if (!(key in fixedFields)) {
          characteristics[key] = inputObj[key];
      }
  }

  return {
      ...fixedFields,
      "characteristics": characteristics,
  };
}


// Product data
export const product_data = (productData) => {
    const colorVisible = productData.colorVisible
    const sizeVisible = productData.sizeVisible
    const categoryId = productData.categoryId
    const subcategoryId = productData.subcategoryId

    const fieldValues = {}
    const inputRefs = toJS(addProductChecking.inputRefs);
    const photos = toJS(addProductChecking.photos);

    // Input refs
    Object.keys(inputRefs).map((fieldName) => {
        if (inputRefs[fieldName]?.value) {
            fieldValues[fieldName] = inputRefs[fieldName].value
        }

        else {
            fieldValues[fieldName] = ''
        }
    })  

    if (colorVisible) {
        delete fieldValues['count']
    }

    if (sizeVisible) {
        delete fieldValues['size']
    }

    // Photos
    fieldValues['photos'] = []
    Object.keys(photos).map((photoKey) => {
        fieldValues['photos'].push(photos[photoKey]);
    })


    // Add "color" and "size" fields
    const groupedFields = groupFields(fieldValues)

    if (!colorVisible) {
      delete groupedFields['color'];
      }
      
    if (!sizeVisible) {
      delete groupedFields['size'];
    }

    groupedFields['category'] = categoryId
    groupedFields['subcategory'] = subcategoryId


    // Add "count" field
    const count = calculateCount(groupedFields)
    if (count !== false) {
      groupedFields['count'] = count
    }

    // Preparing
    const sendData = transformObject(groupedFields)

    return sendData
}


// Date formatting
export const dateFormatting = (date, curSep='-', newSep='/') => ( date.replace(new RegExp(curSep, 'g'), newSep) )



// Declension of the word
export function getNoun(number, one, two, five) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}