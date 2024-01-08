import RestaurantCard from "./RestaurantCard"
import { RES_DATA } from "../utils/mockData"
import { useState } from "react";


const Body = () => {

    // let listOfRest = RES_DATA;

    // State Variable 
    // A normal js function 
    // Utility funtion given by react
    const [listOfRest, setListOfRest] = useState(RES_DATA)

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    // Just by updating the listOfRest UI will not change automatically - you have to make state variable 
                    // listOfRest = RES_DATA.filter((rest) => parseInt(rest.rating.aggregate_rating) >= 4)

                    setListOfRest(prevListOfRest => {
                        return prevListOfRest.length > 0 ? prevListOfRest.filter(rest => parseInt(rest.rating.aggregate_rating) >= 4) : prevListOfRest
                    })


                }}> Top Rated restaurants 4 + </button>
            </div>
            <div className="search"> search</div>
            <div className="res-container">
                {/* You need to pass a key  */}
                {listOfRest && listOfRest.map(rest => (
                    <RestaurantCard key={rest.id} info={rest} />
                ))}

            </div>
        </div>
    )
}


export default Body

// using * as export 

export {default as Foot} from "./Footer.js"