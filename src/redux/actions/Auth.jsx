
export const setLogin = (data) => {
    return {
        type: "LOGIN_TRUE"
    }
}

export const setLoginFalse = () => {
    return {
        type: "LOGIN_FALSE"
    }
}
export const passToken = (token) => {
    return {
        type: "GET_TOKEN",
        token
    }
}
export const setRegis = (data) => {
    return {
        type: "REGISTER_TRUE"
    }
}

export const setRegisFalse = () => {
    return {
        type: "REGISTER_FALSE"
    }
}

export const setForgotPass = (data) => {
    return {
        type: "FORGOT_PASS_TRUE"
    }
}

export const setForgotPassFalse = (data) => {
    return {
        type: "FORGOT_PASS_FALSE"
    }
}