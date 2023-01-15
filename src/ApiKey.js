import { useState } from "react"


export const ApiKey = () => {
    const [myKey, setmyKey] = useState("blue");

    return {myKey, setmyKey};
}