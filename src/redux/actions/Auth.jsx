
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

export const setCodeReset = (data) => {
    return {
        type: "CODE_RESET_TRUE"
    }
}

export const setCodeResetFalse = (data) => {
    return {
        type: "CODE_RESET_FALSE"
    }
}

export const setResetPass = (data) => {
    return {
        type: "RESET_PASS_TRUE"
    }
}

export const setResetPassFalse = (data) => {
    return {
        type: "RESET_PASS_FALSE"
    }
}