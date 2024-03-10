import React from "react";

import { useState  } from "react";

const New = () => {
    const [a , setA] = useState("this is a");
    return (
        <>
        <h1>
        {a}
        </h1>
        <button onClick={() => setA("this is not a a")}>
            the greatest of all button
        </button>
        </>
    )
}

export default New;