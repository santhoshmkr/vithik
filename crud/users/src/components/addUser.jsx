import React, { useContext, useState } from "react";
import { UserContext } from "../App";

function AddUser() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const user=useContext(UserContext)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        localStorage.setItem("user", JSON.stringify(formData));
    };

    return (
        <div>
           {/* <h1 className="text-2xl text-center font-bold"> {user.user}</h1> */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"  onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"  onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">password </label>
                    <input type="password" name="password"  onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddUser;
