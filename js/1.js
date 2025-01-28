const accountId=12345
let accountName="savingsbank"
var accountHolder="shivam"
accountCity="gonda"
let city;

/*
now we don't use var bcoz 
issue in block of scope and functional scope

jab bhi koi city ko intilise krte hain toh baad me display kraye toh
node uski value ko undefined display krta h eg: let city
*/
// direct variavle ko declare krte nhi h jaise accountcity kra gya h

console.log(accountId);

// console.log ko substitute h multiple chiz ko ek saath display krna
console.table([accountId,accountName,accountCity,city])
