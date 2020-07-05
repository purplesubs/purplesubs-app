const VALID_EMAIL_PATERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const VALID_NUMBER_PATERN = /^\d+$/;

export function isEmpty (str) {
    return !str || String(str).replace(/ /g,'').length === 0
}

export function isValidEmail(email) {
    return !VALID_EMAIL_PATERN.test(email)
}

export function isValidNumber(number) {
    return number !== "" && !VALID_NUMBER_PATERN.test(number)
}