import React, { useEffect, useState } from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-brook-34340.herokuapp.com/services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <section className="mt-5">
      <div className="text-center">
        <h2 style={{ color: "hotpink", fontWeight: "800" }}>OUR SERVICES</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="container row mt-5 pt-5">
          {services.map((service) => (
            <ServiceDetail service={service} key={service._id}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
