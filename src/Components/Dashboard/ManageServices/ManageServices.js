import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [events, setEvents] = useState([]);

  // Load/show data from api
  useEffect(() => {
    fetch("https://peaceful-brook-34340.herokuapp.com/services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  // delete function
  const deleteService = (id) => {
    fetch(`https://peaceful-brook-34340.herokuapp.com/deleteService/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = events.filter((event) => {
          return event._id !== result._id;
        });
        setEvents(newData);
        window.location.reload();
        return false;
      });
  };

  return (
    <section>
      <div className="row w-100">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-12 col-12 pt-5 px-5">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th className="text-secondary text-left" scope="col">
                  Sr No
                </th>
                <th className="text-secondary" scope="col">
                  Title
                </th>
                <th className="text-secondary" scope="col">
                  Description
                </th>
                <th className="text-secondary" scope="col">
                  Age
                </th>
                <th className="text-secondary" scope="col">
                  pricce
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{service.title}</td>
                  <td>{service.description}</td>
                  <td>{service.age}</td>
                  <td>{service.price}</td>
                  <td>
                    <button
                      onClick={() => deleteService(service._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageServices;
