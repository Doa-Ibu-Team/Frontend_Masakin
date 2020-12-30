const initialState = { }

const authReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "LOGIN_TRUE":
            return {
                ...prevState,
                isLogin: true
            };
        case "LOGIN_FALSE":
            return {
                ...prevState,
                isLogin: false
            };
        case "REGISTER_TRUE":
            return {
                ...prevState,
                isRegis: true
            };
        case "REGISTER_FALSE":
            return {
                ...prevState,
                isRegis: false
            };
        case "FORGOT_PASS_TRUE":
            return {
                ...prevState,
                isForgot: true
            };
        case "FORGOT_PASS_FALSE":
            return {
                ...prevState,
                isForgot: false
            };
        case "CODE_RESET_TRUE":
            return {
                ...prevState,
                isCodeReset: true
            };
        case "CODE_RESET_FALSE":
            return {
                ...prevState,
                isCodeReset: false
            };
        case "RESET_PASS_TRUE":
            return {
                ...prevState,
                isReset: true
            };
        case "RESET_PASS_FALSE":
            return {
                ...prevState,
                isReset: false
            };
        case "LOGOUT_TRUE":
            return {
                ...prevState,
                isLogout: true
            };
        case "LOGOUT_FALSE":
            return {
                ...prevState,
                isLogout: false
            };
        default:
            return {
                ...prevState
            };
    }
}

export default authReducer;