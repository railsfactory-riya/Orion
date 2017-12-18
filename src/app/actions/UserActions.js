export function setEmail(email) {
    return {
        type: "SET_EMAIL",
        payload: email
    };
}

export function setPassword(password) {
    return {
        type: "SET_PASSWORD",
        payload: password
    };
}

export function changeEmail(email) {
    return {
        type: "CHANGE_EMAIL",
        payload: email
    };
}
