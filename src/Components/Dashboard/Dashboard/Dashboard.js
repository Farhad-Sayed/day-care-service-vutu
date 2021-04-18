import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import dashboard from "../../../images/dashboard.png";

const Dashboard = () => {
  return (
    <section>
      <div className="row w-100">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="text-center col-md-10 col-sm-12 col-12 pt-5 px-5">
          <h1 className="mt-5 text-secondary fw-bold">Welcome To Dashboard</h1>
          <img
            style={{ height: "300px" }}
            className="mt-4"
            src={dashboard}
            alt=""
          />
          <h4 className="mt-5 text-secondary">
            Navigate From The Left Sidebar
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
