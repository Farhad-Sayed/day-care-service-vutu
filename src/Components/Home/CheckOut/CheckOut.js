import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import EnrolledItem from "../EnrolledItem/EnrolledItem";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const CheckOut = () => {
  const { id } = useParams();
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`https://peaceful-brook-34340.herokuapp.com/service/${id}`)
      .then((response) => response.json())
      .then((data) => setService(data));
    // console.log(service);
  }, [id]);
  return (
    <div>
      <Navbar></Navbar>
      <div style={{ height: "100vh" }} className="container my-5">
        <div>
          {service.map((item) => (
            <EnrolledItem item={item}></EnrolledItem>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CheckOut;
