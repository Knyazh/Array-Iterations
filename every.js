function customEvery(array) {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (!(element >15)) {
        return alert(false);
      }
    }
    return alert(true);
  }
  
  let numbers = [45, 14, 52, 3, 61, 9, 19];
  customEvery(numbers);
  