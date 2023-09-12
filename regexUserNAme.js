let username = "JackOfAllTrades";
let userCheck = /^[A-za-z][A-za-z]+\d*$|^[A-za-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);
