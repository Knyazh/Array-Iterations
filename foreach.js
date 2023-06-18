function displayElements(array) {
    let elementShow = '';
  
    for (let index = 0; index < array.length; index++) {
      let element = array[index];
      elementShow += element + ', ';
    }
  
    alert(elementShow);
  }
  
  let numbers = [12, 45, 7, 53, 26, 2];
  displayElements(numbers);
  
