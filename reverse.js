function reverseText(text){
    for (let i =0; i < text.length; i++){
        const element = text[i];
        console.log(element);
    }
}


const myStrings = "I am a good boy";
const reversee = reverseText(myStrings);




function reverseText(text){
    for (let i = text.length; i >= 0; i--){
        const element = text[i];
        console.log(element);
    }
}


const myStringe = "I am a good boy";
const reverses = reverseText(myStringe);





function reverseText(text){
    let reversed ='';
    for (let i = text.length-1; i >= 0; i--){
        const element = text[i];
        reversed = reversed + element
        console.log(element, reversed);
    }
    return reversed;
}


const myString = "I am a good boy";
const reverse = reverseText(myString);