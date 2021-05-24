import React, { useState, useEffect } from 'react'
import RestaurantDetail from '../RestaurantDetail/RestaurantDetail';

export default function Restaurant(props) {
    //states of components
    const [details, setDetails] = useState({});
    const [loading, setloading] = useState(true);

    //useeffect of getting restaurant data on the basis of restaurant id
    useEffect(() => {
        async function fetchData() {
            setloading(true);
            const data = await fetch(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${props.match?.params.id}`, {
                "method": "GET",
                headers: {
                    'user-key': '7749b19667964b87a3efc739e254ada2'
                }
            })
                .then(res => res.json())
                .then((data) => data);
            setDetails({ data: data })
            setloading(false);
        }
        fetchData();
    }, [props.match?.params.id]);

    return (
        <div className="container" style={{ minHeight: "700px" }}>
            {loading ?
                <div><img src="images/loading.gif" alt="" width="100%" /></div>
                :
                <div>
                    {/* passing data to restaurantdetail component using props */}
                    <RestaurantDetail key={details.data.id} id={details.data.id} image={details.data.featured_image} name={details.data.name}
                        has_online_delivery={details.data.has_online_delivery} cuisines={details.data.cuisines} timings={details.data.timings} address={details.data.location.address}
                        is_delivering_now={details.data.is_delivering_now} zipcode={details.data.location.zipcode} city={details.data.location.city}
                        phone_numbers={details.data.phone_numbers} highlights={details.data.highlights} average_cost_for_two={details.data.average_cost_for_two}
                        currency={details.data.currency} price_range={details.data.price_range}/></div>
            }
        </div>
    )
}
