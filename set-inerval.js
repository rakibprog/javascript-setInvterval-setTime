//setInterval 
console.log('i am one');
console.log('i am three');
setInterval(function() { console.log('i am two') });
console.log('i am four');

// clearInterval 
let seconds = 0;
const clearVal = setInterval(function() {
    console.log(seconds++);
    if (seconds > 15) {
        clearInterval(clearVal);
    }
});