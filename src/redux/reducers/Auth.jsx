const authReducer = (prevState = {isLogin: false}, action) => {
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
        default:
            return {
                ...prevState
            };
    }
}

export default authReducer;