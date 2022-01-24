var userInput; //any
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { errorMessage: message, errorCode: code };
}
;
generateError('An error occurred', 500);
