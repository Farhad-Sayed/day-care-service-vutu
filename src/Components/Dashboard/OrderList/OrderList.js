import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const OrderList = () => {
  const [enrollmentData, setEnrollmentData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch("https://peaceful-brook-34340.herokuapp.com/orderlist?email=" + loggedInUser.email)
      .then((response) => response.json())
      .then((data) => {
        setEnrollmentData(data);
      });
  }, [loggedInUser.email]);
  return (
    <section>
      <div className="row w-100">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="input_area col-md-10 col-sm-12 col-12 pt-5 px-5">
          <h4 className="py-3">Order List</h4>
          <table className="table table-borderless">
            <thead>
              <tr>
                <th className="text-secondary text-left" scope="col">
                  Sr No
                </th>
                <th className="text-secondary" scope="col">
                  Name
                </th>
                <th className="text-secondary" scope="col">
                  Email
                </th>
                <th className="text-secondary" scope="col">
                  Service
                </th>
                <th className="text-secondary" scope="col">
                  Card
                </th>
              </tr>
            </thead>
            <tbody>
              {enrollmentData.map((enroll, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{enroll.name}</td>
                  <td>{enroll.email}</td>
                  <td>{enroll.service}</td>
                  <td>{enroll.paymentId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default OrderList;
