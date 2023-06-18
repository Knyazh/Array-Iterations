function someFunction(array){
    let some = '';
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element>25){
           some=true;
           break;
        }
        else{
            some=false;
        }
    }
    return alert(some)
}

let numbers = [45,14,52,3,61,9,19]
someFunction(numbers);