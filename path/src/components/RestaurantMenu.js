import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null)

    const {id} = useParams()

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(`https://www.zomato.com/webroutes/getPage?page_url=shimla/${id}`)

        const d = await data.json()
        setResInfo(d)
    }

    const resMenu = resInfo?.page_data?.order?.menuList?.menus[0]?.menu?.categories[0].category?.items

    if (resInfo === null) return <Shimmer />

    return (
        <div className="menu">
            <h1> {resInfo?.page_data?.sections?.SECTION_BASIC_INFO?.name} </h1>
            <h2> Menu </h2>

            {resMenu && resMenu.map(item => {
                return (
                    <div key={item.item.id} className="menu-card">
                        {item.item.name}
                    </div>
                )
            })}

        </div>
    )
}

export default RestaurantMenu;