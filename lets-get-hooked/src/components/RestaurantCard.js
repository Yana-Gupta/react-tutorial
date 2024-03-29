

const RestaurantCard = ({ info }) => {
    return (
        <div className="res-card" style={{
            backgroundColor: "#f0f0f0"
        }}>
            <img className="res-logo" alt="res-logo" src={info.imageUrl} />
            <h3>{info.name}</h3>
            <h4>{info.type}</h4>
            <h5>{info.description}</h5>
            <h6>{info.text}</h6>
            <p>  {info.rating.aggregate_rating} </p>
            <h4> 38 minutes</h4>
        </div>
    )
}

export default RestaurantCard