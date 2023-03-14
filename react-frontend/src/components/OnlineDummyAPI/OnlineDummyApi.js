import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function OnlineDummyApi() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className="OnlineDummyApi">
            <div>OnlineDummyApi</div>
        </div>
    );
}
