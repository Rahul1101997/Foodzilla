import React, { useState, useEffect } from 'react';
import HomeCard from '../HomeCard/HomeCard';
import '../../App.css';
export default function Home(props) {

    //states of component
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(true);
    const [datastatus, setdatastatus] = useState(false);
    const [locationstatus, setlocationstatus] = useState(false);

    //useeffect for fetch data on the basis of latitude,longitude and other parameters 
    useEffect(() => {
        //getting restaurant of user current location
        if (props.location?.trim() === "" && props.search?.trim() === "") {
            setloading(true);
            getLocation().then((position) => {
                fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${position.coords.latitude}&lon=${position.coords.longitude}`, {
                    "method": "GET",
                    headers: {
                        'user-key': '7749b19667964b87a3efc739e254ada2'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.nearby_restaurants.length === 0) {
                            setdatastatus(true);
                            setloading(false);
                        }
                        else {
                            setData(data.nearby_restaurants);
                            setloading(false);
                        }
                    });
            });
        } 
        //getting restaurants on the basis of cuisines of current location
        else if (props.search?.trim() !== "" && props.location?.trim() === "") {
            setloading(true);
            getLocation().then((position) => {
                fetch(`https://developers.zomato.com/api/v2.1/search?lat=${position.coords.latitude}&lon=${position.coords.longitude}&cuisine=${props.search}`, {
                    "method": "GET",
                    headers: {
                        'user-key': '7749b19667964b87a3efc739e254ada2'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.restaurants.length === 0) {
                            setdatastatus(true);
                            setloading(false);
                        }
                        else {
                            setData(data.restaurants);
                            setloading(false);
                        }
                    });
            });
        }
        //getting restaurant of specific cities
        else if (props.search?.trim() === "" && props.location?.trim() !== "") {
            async function fetchData() {
                const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${props.location}&key=e051e695d2764407bc8763c320cc2e2c`)
                const data = await response.json();
                if (data.results.length === 0) {
                    setloading(false);
                    setlocationstatus(true);
                }
                else {
                    const res = await fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${data.results[0].geometry.lat}&lon=${data.results[0].geometry.lng}`, {
                        "method": "GET",
                        headers: {
                            'user-key': '7749b19667964b87a3efc739e254ada2'
                        }
                    })
                    const data1 = await res.json();
                    if (data1.code === 400) {
                        setdatastatus(true);
                        setloading(false);
                    }
                    else {
                        setData(data1.nearby_restaurants);
                        setloading(false);
                    }
                }
            }

            fetchData();
        }
        //getting restaurants of specific location and cuisines
        else if (props.search?.trim() !== "" && props.location?.trim() !== "") {
            async function fetchData() {
                const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${props.location}&key=e051e695d2764407bc8763c320cc2e2c`)
                const data = await response.json();
                if (data.results.length === 0) {
                    setloading(false);
                    setlocationstatus(true);
                }
                else {
                    const res = await fetch(`https://developers.zomato.com/api/v2.1/search?lat=${data.results[0].geometry.lat}&lon=${data.results[0].geometry.lng}&cuisine=${props.search}`, {
                        "method": "GET",
                        headers: {
                            'user-key': '7749b19667964b87a3efc739e254ada2'
                        }
                    })
                    const data1 = await res.json();
                    if (data1.restaurants.length === 0) {
                        setdatastatus(true);
                        setloading(false);
                    }
                    else {
                        setData(data1.restaurants);
                        setloading(false);
                    }
                }
            }
            fetchData();
        }
    },[props.location, props.search]);

    //function to get latitude and longitude of user location
    function getLocation(options) {
        return new Promise((resolve, reject) =>
            navigator.geolocation.getCurrentPosition(resolve, reject, options)
        );
    }

    return (
        //implementation of carousel
        <div data-testid="containertest" className="container mt-2" style={{ minHeight: "700px" }}>
            <div className="row">
                <div className="col-md-12">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="images/img1.png" height="550px" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="images/img2.png" height="550px" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src="images/img3.png" height="550px" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span data-testid="previoushome" className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span data-testid="nexthome" className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-1"></div>
                <div className="col-md-10 p-2">
                    <h2 data-testid="h2id" className="text-center text-primary" id="h2id">Welcome To Foodzilla</h2>
                </div>
            </div>

            {/* passing data to homecard using props */}
            <div className="row">
                {
                    loading ? <div><img src="images/loading1.gif" alt="not found" width="100%" /></div> :
                        data.map(item =>
                            item.restaurant.featured_image !== "" ?
                                <HomeCard key={item.restaurant.id} id={item.restaurant.id} resName={item.restaurant.name}
                                    image={item.restaurant.featured_image} cuisines={item.restaurant.cuisines}
                                    address={item.restaurant.location.address} average={item.restaurant.average_cost_for_two}
                                    rating={item.restaurant.user_rating.aggregate_rating} /> :

                                <HomeCard key={item.restaurant.id} id={item.restaurant.id} resName={item.restaurant.name}
                                    image="images/noimage.jpg" cuisines={item.restaurant.cuisines}
                                    address={item.restaurant.location.address} average={item.restaurant.average_cost_for_two}
                                    rating={item.restaurant.user_rating.aggregate_rating} />)
                }
                <div className="card mb-5">
                {/* display location not found */}
                    {
                        locationstatus ? <img src="images/searchagain.gif" alt="not found" className="center" width="90%" height="500px" /> : null
                    }
                 {/* display data not found */}
                    {
                        datastatus ? <img src="images/nodata.png" alt="not found" className="center" width="90%" height="500px" /> : null
                    }
                </div>
            </div>
        </div>
    )
}
