let userInput: unknown;//any
let userName: string;

userInput = 5;
userInput = "Maxim";

if(typeof userInput === 'string'){
    userName = userInput;
}


function generateError(message:string, code: number): never {
    throw {errorMessage: message, errorCode: code}
};

generateError('An error occurred!!!!', 500);