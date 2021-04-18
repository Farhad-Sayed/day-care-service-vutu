import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import ProcessPayment from "../../Payment/ProcessPayment/ProcessPayment";
import Sidebar from "../Sidebar/Sidebar";

const Enroll = () => {
  const { register, handleSubmit } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { _id } = useParams();
  const [enrollment, setEnrollment] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    setEnrollment(data);
  };

  // handle payment method
  const handlePaymentProcess = (paymentId) => {
    const enrollData = {
      email: enrollment.email,
      name: enrollment.name,
      service: enrollment.service,
      paymentId,
    };
    const url = "https://peaceful-brook-34340.herokuapp.com/enroll";
    //   console.log(enrollData);
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enrollData),
    }).then((response) => console.log("server side response", response));
  };

  return (
    <section>
      <div className="row w-100">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div
          style={{ display: enrollment ? "none" : "block" }}
          className="input_area col-md-5 col-sm-12 col-12 pt-5 px-5"
        >
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                defaultValue={loggedInUser.email}
                {...register("email")}
                className="form-input"
              />
              <br /> <br />
              <input
                defaultValue={loggedInUser.name}
                {...register("name")}
                className="form-input"
              />
              <br /> <br />
              <input
                {...register("service")}
                className="form-input"
                placeholder="service you choose..."
              />
              <br /> <br />
              <br /> <br />
              <input
                className="btn btn-success btn btn-primary"
                type="submit"
              />
            </form>
          </div>
        </div>
        <div
          style={{ display: enrollment ? "block" : "none" }}
          className="input_area col-md-5 col-sm-12 col-12 pt-5 px-5"
        >
          <h4>Pay To Submit</h4>
          <ProcessPayment handlePayment={handlePaymentProcess}></ProcessPayment>
        </div>
      </div>
    </section>
  );
};

export default Enroll;
