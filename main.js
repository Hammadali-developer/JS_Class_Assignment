// Write some functions that will add and remove some items from a list.
// The list should be stored as an array and add('apples') should add the
// string 'apples' to the array and remove('apples') should remove 'apples'
// from the array.


function main() {
    const fruits = [];
    for (let i = 0; i < 5; i++) {
        fruitsName = prompt('Enter the name of the fruit');
      fruits.push(fruitsName);
    }
    delete fruits[2];

    console.log(fruits.join(" & "));
}
main();

// Write a function called lastChar that accepts a string as an argument
// and returns the last letter of the string. For example,
// lastChar('JavaScript') should return 't' . 

function lastChar(string){
    return string[string.length - 1];
    
}
console.log(lastChar("Hello World")); 

console.log(lastChar("JavaScript")); 


// Write a function called reverse that accepts a string and returns the
// string written backwards. For example, reverse('JavaScript') should
// return 'tpircSavaJ' . Applying the function twice should return the original
// value, so reverse(reverse('JavaScript')) should return 'JavaScript' .
    
    
function reverseString(str) {
    return str.split("").reverse().reverse().join("");



}
console.log(reverseString("hello"));
function reverseString1(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString1("hello"));





  









