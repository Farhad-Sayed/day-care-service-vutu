import React from "react";
import { useHistory } from "react-router";
import "./ServiceDetail.css";

const ServiceDetail = ({ service }) => {
  const history = useHistory();
  const handleEnrollNow = (id) => {
    history.push(`/checkout/${id}`);
    fetch(`http://localhost:5000/service/${id}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
      <div className="col-md-4">
        <div class="card service-card" style={{ width: "23rem" }}>
          <img
            style={{ height: "300px" }}
            src={service.imageURL}
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 style={{ color: "hotpink" }} class="card-title fw-bold">
              {service.title}
            </h5>
            <p class="card-text">{service.description}</p>
            <p class="card-text">Upto: {service.age} years</p>
            <div className="d-flex justify-content-between">
              <h6
                style={{ color: "hotpink", fontSize: "1.2rem" }}
                class="card-text fw-bold"
              >
                Full Day: {service.price}${" "}
              </h6>
              <button
                onClick={() => handleEnrollNow(service._id)}
                class="btn btn-primary"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ServiceDetail;
