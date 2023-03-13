
//1
function addNum(a,b) {
    return a + b;
}
console.log(addNum(3,2)); //function

const subtractNum = (a,b) => a - b; 
console.log(subtractNum(3,2)); //arrow function

const multiplyNum = function (a,b) {
    console.log(a*b);   
}
multiplyNum(3,2); //Expression function

const divideNum = (a,b) => a / b; 
console.log(divideNum(3,2)); //arrow function

//2
myInfo('Arlif','Nonthaburi','Football');
function myInfo(fName,location,hobby) {
    console.log(`Hi, my name is ${fName} I live in ${location} and enjoy ${hobby}`);   
}
