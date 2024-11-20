import React from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";

function App() {
    return (
        <div>
            <h1>React Redux JWT App</h1>
            <Login />
            <Logout />
            <Profile />
        </div>
    );
}

export default App;
