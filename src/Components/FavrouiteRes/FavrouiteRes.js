import React, { useState, useEffect } from 'react'
import FavCard from '../FavCard/FavCard';
import '../../App.css';
export default function FavrouiteRes() {

    //states of component
    const [fav, setFav] = useState([]);
    const [loading, setloading] = useState(true);
    const [datastatus, setdatastatus] = useState(false);

    //useeffect form fetching data of favrouites from db.json
    useEffect(() => {
        async function fetchData() {
            setloading(true);
            await fetch(`http://localhost:3001/favrouites?Email=${localStorage.getItem('email')}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.length === 0) {
                        setdatastatus(true);
                        setloading(false);
                    }
                    else {
                        setFav(data);
                        setloading(false);
                    }
                });
            setloading(false);
        }
        fetchData();
    }, []);

    //delete favrouite data from db.json
    async function DeleteContact(id) {
        await fetch(`http://localhost:3001/favrouites/${id}`, {
            method: 'DELETE'
        });
        let data = fav.filter(x => x.id !== id);
        setFav(data);
    }

    return (
        <div className="container">
            <div className="row my-5">
                {/* passing  data to favrouites card using props  */}
                {
                    loading ? <div><img src="images/loading1.gif" alt="not found" width="100%" /></div> :
                        fav.map(item =>
                            item.ResImage !== "" ?
                                (<FavCard key={item.Rid} deleteData={DeleteContact} id={item.Rid} ids={item.id}
                                    resname={item.ResName} image={item.ResImage} cuisines={item.ResCuisines}
                                    address={item.ResAddress} average={item.ResAverage} rating={item.ResRating} />) :

                                <FavCard key={item.Rid} deleteData={DeleteContact} id={item.Rid} ids={item.id}
                                    resname={item.ResName} image="images/noimage.jpg" cuisines={item.ResCuisines}
                                    address={item.ResAddress} average={item.ResAverage} rating={item.ResRating} />
                        )}
                {/* set default image when no image is there */}
                {
                    datastatus || fav.length===0 ? <img src="images/nodata.png" alt="not found" className="center" width="90%" height="500px" /> : null
                }
            </div>
        </div>
    )
}
