import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/actions";

const Login = () => {
    const dispatch = useDispatch();

    const handleLogin = () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJlbWFpbCI6ImRrMjAwM0BnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTczMjExMzE5NiwiZXhwIjoxNzM0NzA1MTk2fQ.c4u1giuUjCVwuiPMz9exF6GnDL3mybSSILzVJ_rmFIc"; 
        const user = { name: "Dhruvish Kanani", email: "dk2003@gmail.com" };
        dispatch(login(user, token));
    };

    return <button onClick={handleLogin}>Login</button>;
};

export default Login;
