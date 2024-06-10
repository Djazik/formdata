import axios from 'axios';
import React from 'react';

const API_URL = "http://localhost:4000/users";

const Create = () => {
    const handleSubmit = e => {
        e.preventDefault();
        let formData = new FormData(e.target);

        let user = Object.fromEntries(formData.entries());

        let { fname, lname, username, gender, comment } = user;
        let newUser = {
            username,
            gender,
            comment,
            name: {
                fname,
                lname
            }
        };

        axios
            .post(API_URL, newUser)
            .then(res => {
                console.log("User created successfully", res.data);
                e.target.reset();
            })
            .catch(err => {
                console.error("Error creating user", err);
            });

        console.log(user);
    };

    return (
        <div>
            <h2>Create</h2>
            <form onSubmit={handleSubmit} action="">
                <input type="text" name="fname" placeholder="First Name" required />
                <input type="text" name="lname" placeholder="Last Name" required />
                <input type="text" name="username" placeholder="Username" required />
                
                <div>
                    <label>
                        <input type="radio" name="gender" value="Male" required />
                        Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="Female" required />
                        Female
                    </label>
                    <label>
                        <input type="radio" name="gender" value="Other" required />
                        Other
                    </label>
                </div>

                <textarea name="comment" placeholder="Comment" required></textarea>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default Create;
