import React from "react";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode"; 

const Profile = () => {
    const token = useSelector((state) => state.token);
    const user = token ? jwtDecode(token) : null; 

    return (
        <div>
            {user ? (
                <div>
                    <h2>Welcome, {user.name}</h2>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Please log in.</p>
            )}
        </div>
    );
};

export default Profile;
