import axios from "axios";
export const register = (userData, navigate) => async (dispatch) => {
    try {
        const response = await axios.post(" http://localhost:3000/users", userData);
        if (response.status === 200 || response.status === 201) {
            navigate("/signin")
            dispatch({
                type: "REGISTER",
            })
        } else {
            dispatch({
                type: "REGISTER_ERROR",
            })
        }
    } catch (error) {
        console.log(error);
    }
}

export const login = (userData, navigate) => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:3000/users?username=" + userData.username + "&password=" + userData.password);
        if (response.status === 200 || response.status === 201) {
            if (response.data.length === 0) {
                alert("username or password is incorrect")
            } else {
                navigate("/products")
            }
            console.log(response.data[0]);
            dispatch({
                type: "LOGIN",
                payload: response.data[0]
            })
        }
    } catch (error) {
        console.log(error);
    }
}