import RestaurantCard from "./RestaurantCard"
// import { RES_DATA } from "../utils/mockData"
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus.js";



const Grocery = () => {
    const online = useOnlineStatus()
    const [RES_DATA, setRES_DATA] = useState([])
    const [listOfRest, setListOfRest] = useState(RES_DATA)
    const [searchtext, setSearchtext] = useState("")

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        setListOfRest(RES_DATA)
    }, [RES_DATA])



    if (online === false) return <>You are offline 🐣</>

    const fetchData = async () => {
        try {
            let response = await fetch("https://www.zomato.com/webroutes/getPage?page_url=/shimla/must-visit-restaurants-in-shimla&location=&isMobile=1");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            let data = await response.json();
            // Optional Chaining
            // Good way to handle the data
            setRES_DATA(data?.page_data.sections?.SECTION_ENTITIES_DATA)
        } catch (err) {
            console.error(err);
        }

    }




    // Conditional Rendering
    // if ( listOfRest.length === 0 ) return (
    //     <div className="shimmer">
    //         <Shimmer />
    //     </div>
    // )
    return (listOfRest.length > 0 ) && (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchtext}
                        onChange={(e) => {
                            setSearchtext(e.target.value)
                        }} />
                    <button
                        onClick={() => {
                            setListOfRest(RES_DATA)
                            setListOfRest(prevListOfRest => {
                                return prevListOfRest.length > 0 ? prevListOfRest.filter(rest => rest.name.toLowerCase().includes(searchtext)) : prevListOfRest
                            })

                        }}>Search</button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        // Just by updating the listOfRest UI will not change automatically - you have to make state variable 
                        // listOfRest = RES_DATA.filter((rest) => parseInt(rest.rating.aggregate_rating) >= 4)
                        setListOfRest(prevListOfRest => {
                            return prevListOfRest.length > 0 ? prevListOfRest.filter(rest => parseInt(rest.rating.aggregate_rating) >= 4.0) : prevListOfRest
                        })
                    }}> Top Rated restaurants 4 + </button>
            </div>

            <div className="res-container">
                {/* You need to pass a key  */}
                {listOfRest.length && listOfRest.map(rest => (
                    <RestaurantCard key={rest.id} info={rest} />
                ))}

            </div>
        </div>
    )
}

export default Grocery