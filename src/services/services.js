import axios from 'axios';

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