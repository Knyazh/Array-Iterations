let numbers = [45,14,52,3,61,9,19]
let filters = '';

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element>18){
        filters+=element+', ';
    };
    
};
alert(filters);