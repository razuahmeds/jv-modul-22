function mixInArray (numbers){
     console.log('array index', numbers);
}


let heightse =[223,453,763,124,456,345,861];
let tallesta = mixInArray(heightse);
console.log('tallesta',heightse);




function mixInArray (numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        
        const index =i;
        const element = numbers[index];
        console.log(element);
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}


const heights =[223,453,763,124,456,345,861];
const tallest = mixInArray(heights);
// console.log('tallest',heights);