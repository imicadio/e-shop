import { regexEmail, regexPassword } from "./regex/regex";

export const formValid = (type, value) => {
    switch (type) {
        case 'email':
            return !regexEmail.test(value);   
        case 'password':
            return !regexPassword.test(value);            
        default:
            return;
    }
}