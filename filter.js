function filterFunction(array){
    let filters = '';
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element>1    ){
            filters+=element+', '

        }
    }
    return alert(filters)
}

let numbers = [45,14,52,3,61,9,19]
filterFunction(numbers);
