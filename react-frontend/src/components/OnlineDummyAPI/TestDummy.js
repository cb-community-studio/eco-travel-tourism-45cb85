import React, { useState, useEffect } from "react";
import axios from "axios";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import client from "../../services/restClient";
import { authentication } from "@feathersjs/authentication-client/lib/hooks";

export default function TestDummy() {
    // const [userData, setUserData] = useState("default string");
    const [products, setProducts] = useState([]);
    const columns = [
        // { field: "id", header: "Id" },
        // { field: "name", header: "Name" },
        // { field: "username", header: "Username" },
        // { field: "email", header: "Email" },
        { field: "packageName", header: "Package Name" },
        { field: "packagePrice", header: "Package Price" },
        { field: "location", header: "Location" },
    ];

    useEffect(() => {
        const token = localStorage.getItem("feathers-jwt");
        // const token =
        //     "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2Nzg3ODk4NDQsImV4cCI6MTY3ODg3NjI0NCwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNjQwOTYyODBkNzMyN2ZiMzI0YjEyNmE5IiwianRpIjoiN2IxY2U1MDEtNjI2Ni00MjdlLWJmYjMtZGE3YTU2ZDE2ZDY0In0.FsDzXW1v4XTYTvMuiCB0vh2mbfiogu9Oj8mW_6JHHIQ";

        // const config = {
        //     headers: { Authorization: `Bearer ${token}` },
        // };

        // axios
        //     .get("http://localhost:3030/tourpackages", config)
        //     .then((response) => {
        //         // console.log(`name: ${response.data.name}, username: ${response.data.username}`);
        //         console.log(response.data.data);
        //         setProducts(response.data.data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        client.authenticate({
            strategy: "local",
            email: "example@gmail.com",
            password: "123456",
        });

        client
            .service("tourpackages")
            .find({})
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []); // [] only load in the beginning of the page

    return (
        <div className="card">
            <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
                {columns.map((col, i) => (
                    <Column key={col.field} field={col.field} header={col.header} />
                ))}
            </DataTable>
        </div>
    );
}
