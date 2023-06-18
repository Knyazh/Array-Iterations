function findFunction(array){
    let find = '';
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element>40){
           find=element;
           break;
        }
    }
    return alert(find)
}

let numbers = [45,14,52,3,61,9,19]
findFunction(numbers);