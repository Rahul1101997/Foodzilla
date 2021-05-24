import React from 'react'

export default function Footer() {
    return (
        //Starting of footer
        <footer className="">
            <div className="container-fluid ">
                <section className="bg-black py-3 bg-card">
                    <div className="row" >
                        {/*List of cities we deliver */}
                        <div className="col-lg-4 col-md-4 col-sm-12  mt-3" >
                            <div className="mx-3">
                                <h4 data-testid="foothead1" className="text-white text-center mt-5">CITIES WE DELIVER TO</h4>

                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12  col-xs-4">
                                        <ul className="list-group list-group-horizontal mt-4 d-flex flex-row justify-content-center">
                                            <li className="list-group-item text-white m-1 bg-dark">New Delhi</li>
                                            <li className="list-group-item text-white m-1 bg-dark">Mumbai</li>
                                            <li className="list-group-item text-white m-1  bg-dark">Hyderabad</li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12  col-xs-12">
                                        <ul className="list-group list-group-horizontal mt-4 d-flex flex-row justify-content-center ">
                                            <li className="list-group-item text-white m-1 bg-dark">Bengaluru</li>
                                            <li className="list-group-item text-white m-1 bg-dark">Indore</li>
                                            <li className="list-group-item text-white m-1  bg-dark">Chennai</li>
                                        </ul>

                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12  col-xs-12">
                                        <ul className="list-group list-group-horizontal mt-4  d-flex flex-row justify-content-center w-100">
                                            <li className="list-group-item text-white m-1 bg-dark">Jabalpur</li>
                                            <li className="list-group-item text-white m-1 bg-dark">Kolkata</li>
                                            <li className="list-group-item text-white m-1  bg-dark">Pune</li>
                                        </ul>

                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <ul className="list-group list-group-horizontal mt-4 d-flex flex-row justify-content-center ">
                                            <li className="list-group-item text-white m-1 bg-dark">Kanpur</li>
                                            <li className="list-group-item text-white m-1 bg-dark">Lucknow</li>
                                            <li className="list-group-item text-white m-1  bg-dark">Surat</li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <ul className="list-group list-group-horizontal mt-4  d-flex flex-row justify-content-center ">
                                            <li className="list-group-item text-white m-1 bg-dark">Bhopal</li>
                                            <li className="list-group-item text-white m-1 bg-dark">Goa</li>
                                            <li className="list-group-item text-white m-1  bg-dark">Varanasi</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* contact information */}
                        <div className="col-lg-4 col-md-4 col-sm-12 my-auto mt-3" >
                            <h4 data-testid="foothead2" className="text-white text-center mt-5"> Contact Details </h4>
                            <div>
                                <p className="text-white text-center my-4">  info@FoodZilla.com </p>
                                <p className="text-white text-center my-4"> +1-11-6541-6369  </p>
                                <p className="text-white text-center my-4" > FoodZillaOnSkype </p>
                                <p data-testid="copyright" className="text-white text-center my-4" > Copyrights © 2021 All Rights Reserved by FoodZilla Inc. </p>
                            </div>
                        </div>

                        {/* social media details */}
                        <div className="col-lg-4 col-md-4 col-sm-6 my-auto mt-3">
                            <h4 data-testid="foothead4" className="text-white text-center mt-5"> Follow Us </h4>
                            <div className="d-flex justify-content-center align-items-center">
                                <ul className="list-group list-group-horizontal my-4">
                                    <li className="list-group-item border border-0 p-2 bg-dark ">
                                        <i className="fab fa-facebook-f fa-lg text-white "></i>
                                    </li>
                                    <li className="list-group-item border border-0 p-2 bg-dark">
                                        <i className="fab fa-twitter text-dark fa-lg text-white"></i>
                                    </li>
                                    <li className="list-group-item border border-0 p-2 bg-dark"><i
                                        className="fab fa-google fa-lg text-white"></i></li>
                                    <li className="list-group-item border border-0 p-2 bg-dark"><i
                                        className="fab fa-instagram fa-lg text-white"></i></li>
                                    <li className="list-group-item border border-0 p-2 bg-dark"><i
                                        className="fab fa-github fa-lg text-white"></i>
                                    </li>
                                    <li className="list-group-item border border-0 p-2 bg-dark"><i
                                        className="fab fa-git fa-lg text-white"></i>
                                    </li>
                                    <li className="list-group-item border border-0 p-2 bg-dark"><i
                                        className="fab fa-yahoo fa-lg text-white"></i>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 data-testid="foothead3" className="text-white text-center my-3 "> Our Apps </h4>
                                <div className="text-center">
                                    <button type="button" className="btn btn-dark btn-lg download-button my-3 mx-2" ><i className="fab fa-apple"></i> Download</button>
                                    <button type="button" className="btn btn-outline-light btn-lg download-button my-3 mx-2"><i className="fab fa-google-play"></i> Download</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    )
}
