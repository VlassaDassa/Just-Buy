import { useEffect } from 'react';
import addProductChecking from '../store/addProductChecking';





function useRegisterInputRefs(inputRefs) {
  useEffect(() => {
    Object.keys(inputRefs).forEach(fieldName => {
      const inputRef = inputRefs[fieldName];
      addProductChecking.setInputRef(fieldName, inputRef.current);
    });
  }, [inputRefs, addProductChecking]);
}

export default useRegisterInputRefs;
