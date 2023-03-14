import React from "react";
import axios from "axios";

export default function TestDummy() {
    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });

    return (
        <div>
            <h1>My Data</h1>
            <ul>Hello World for Axios Api Call</ul>
        </div>
    );
}
