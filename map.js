let numbers = [12, 45, 7, 53, 26, 2];
let newNumbers;
let elemen = '';

for (let index = 0; index < numbers.length; index++) {
    let element = numbers[index];
    elementShow += element*2 + ', ';
}

alert(elementShow);
