import { useEffect, useState } from "react";


export default function useFetchData(
    /*
    * 
    * You can defined something that could be passed down here 
    * 
    */
) {
    const [data, setData] = useState([])

    useEffect(() => {
        /**
         * 
         * write the function to fetch the data 
         * 
         */

        setData(["Apple", "Orange", "Mango"])
    }, [])


    return data
}