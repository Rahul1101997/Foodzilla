import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function Header(props) {
  //states of component
  const [search, setsearch] = useState("");
  const [location, setlocation] = useState("");

  //sending data using event to app component
  async function send() {
    await props.getLatlang(search, location);
  }

  return (
    //Header implementation start here
    <nav data-testid="navid" className="nav navbar navbar-expand-lg bg-header">
      <div className="container-fluid">
        <Link to="/" id="headbrand" className="navbar-brand text-dark fw-bold"> <img className="px-2" src="images/newlogo.png" alt="" height="50px" />Foodzilla</Link>
        <button data-testid="navbar-toggler" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="fas fa-bars text-dark"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item  fw-bold">
              <Link to="/" data-cy="header-link-home" className="nav-link hoverLink active mx-1">Home</Link>
            </li>
            <li className="nav-item  fw-bold">
              <Link data-cy="header-link-fav" to="/favrouite" className="nav-link hoverLink mx-1" >Favrouite</Link>
            </li>
          </ul>
          <ul className="navbar-nav  mb-2 mb-lg-0 float-lg-end">
            <li className="nav-item">
              <form className="d-flex">
                <input className="form-control my-1 ml-1 border-1 border-end border-dark rounded-0 text-center rounded-start search" onChange={(e) => setlocation(e.target.value)} type="search" placeholder="Search with Location" />
                <select className="form-control form-select my-1 ml-1 border-1 border-start border-dark rounded-0 text-center rounded-end search" onChange={(e) => setsearch(e.target.value)} value={search}>
                  <option value="">Select Cuisines</option>
                  <option value="1035">Afgan</option>
                  <option value="1">American</option>
                  <option value="152">African</option>
                  <option value="3">Asian</option>
                  <option value="5">Bakery</option>
                  <option value="132">Belgian</option>
                  <option value="270">Beverages</option>
                  <option value="7">Biryani</option>
                  <option value="168">Burger</option>
                  <option value="30">Cafe</option>
                  <option value="25">Chinese</option>
                  <option value="161">Coffee and Tea</option>
                  <option value="100">Desserts</option>
                  <option value="40">Fast Food</option>
                  <option value="148">Indian</option>
                </select>
                <abbr title="Search"><i className="fas fa-search text-dark fa-lg py-3 px-2" onClick={send}></i></abbr>
              </form>
            </li>
          </ul>
          {
            props.loginStatus ?
              <div className="px-lg-4">
                <img src="images/user.png" className="rounded-circle" alt="..." width="50px" height="50px"></img>
                <div className="btn-group">
                  <button type="button" id="btnLogout" className="userdropdown border border-0 dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                    {localStorage.getItem('username')}
                  </button>
                  <ul className="dropdown-menu ">
                    <li> < Link to="/logout" id="linklogout" className="nav-link text-danger fw-bold fs-6">Logout</Link></li>
                  </ul>
                </div>
              </div> :
              <ul className="navbar-nav  mb-2 mb-lg-0 float-lg-end">
                <li className="nav-item fw-bold">
                  <Link to="/register" data-cy="header-link-register" className="nav-link hoverLink mx-1 ">Register</Link>
                </li>
                <li className="nav-item fw-bold">
                  < Link to="/login" data-cy="header-link-login" className="nav-link hoverLink  mx-1">Login</Link>
                </li>
              </ul>
          }
        </div>
      </div>
    </nav>
  );
}
