import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/actions";

const Logout = () => {
    const dispatch = useDispatch();

    return <button onClick={() => dispatch(logout())}>Logout</button>;
};

export default Logout;
