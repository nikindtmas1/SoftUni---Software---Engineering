"use strict";
let userInput; //any
let userName;
userInput = 5;
userInput = "Maxim";
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { errorMessage: message, errorCode: code };
}
;
generateError('An error occurred!!!!', 500);
