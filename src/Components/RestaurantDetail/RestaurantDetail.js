export default function RestaurantDetail(props) {
  return (
    //restaurantdetails implementation
    <div>
      <div className="row">
        <div className="col-md-12 mt-2 img-hover-zoom--point-zoom card">
          <img src={props.image} alt="not found" width="100%" height="500px" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div>
            <h1 className="fw-bolder">{props.name}</h1>
            {
              props.is_delivering_now ?
                <h6 className="mr-2 textSecondary">Has Online Delivery <span className="dot"></span></h6>
                :
                <h6 className="mr-2 textSecondary">Has Online Delivery<span className="dot1"></span></h6>
            }
            {
              props.has_online_delivery ?
                <h6 className="mr-2 textSecondary">Delivering now <span className="dot"></span></h6> :
                <h6 className="mr-2 textSecondary">Delivering now <span className="dot1"></span></h6>
            }
            <h4 >{props.data?.cuisines}</h4>
            <h5 data-testid="timing">Timings: {props.timings}</h5>
            <h5 data-testid="address" >Address: {props.address}  {props.zipcode}</h5>
            <h5>{props.city}</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card py-5 px-4 my-3 shadow">
            <h5 data-testid="phone">Phone:-{props.phone_numbers}</h5>
            <h5 data-testid="average">Average Cost: <span className="fs-6">{props.currency} {props.average_cost_for_two} for {props.price_range} person(s)</span></h5>
          </div>
        </div>
      </div>
      <div className="card my-3 shadow">
        <h4 data-testid="highlights" className="fw-bold p-2 ">Highlights</h4>
        <ul className="list-group">
          <div className="row">
            {props.highlights?.map(item => <div className="col-md-3"><li className="list-group-item d-flex justify-content-between align-items-center border border-0" style={{ minHeight: "50px" }}>
              <span className="fs-5">{item}</span>
              <span className="badge text-center"><i className="fas fa-check fa-sm border border-success rounded-circle p-1"></i></span>
            </li></div>
            )}
          </div>
        </ul>
      </div>
    </div>
  )
}
