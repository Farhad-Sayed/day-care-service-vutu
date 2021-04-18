import React from "react";

const Testimonial = (props) => {
  const { quote, name, location, imageURL } = props.review;

  return (
    <div className="col-md-4 col-sm-12">
      <div style={{ width: "22rem" }} className="card shadow-sm service-card">
        <div className="card-body">
          <p className="card-text text-center">{quote}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <img
            style={{ height: "70px", width: "70px" }}
            className="mx-3 rounded-circle"
            src={imageURL}
            alt=""
          />
          <div>
            <h6 className="text-primary">{name}</h6>
            <p className="m-0">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
