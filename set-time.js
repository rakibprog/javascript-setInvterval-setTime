// setTimeout 
console.log('i am one ');
console.log('i am two');
setTimeout(() => {
    console.log('i am there');
}, 5000);
console.log('i am fourth');
setTimeout(function() {
    console.log('i am five');
}, 5000)
console.log('i am six');