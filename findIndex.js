function findIndexFunction(array) {
    let find = -1;
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (element > 25) {
        find = index; 
        break;
      }
    }
    return alert(find);
  }
  
  let numbers = [45, 14, 52, 3, 61, 9, 19];
  findIndexFunction(numbers);
  