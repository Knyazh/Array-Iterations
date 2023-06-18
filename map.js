function customMap(array) {
    let mappedArray = [];
  
    for (let index = 0; index < array.length; index++) {
      let element = array[index];
      let transformedValue = element * 2;
      mappedArray[index] = transformedValue;
    }
  
    return mappedArray;
  }
  
  let numbers = [12, 45, 7, 53, 26, 2];
  let elementShow = customMap(numbers);
  
  let newNumbers = elementShow.join(', ');
  alert(newNumbers);
