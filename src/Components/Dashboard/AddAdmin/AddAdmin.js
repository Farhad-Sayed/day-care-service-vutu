import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const AddAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const adminData = {
      email: data.email,
    };
    const url = "http://localhost:5000/addAdmin";
    // console.log(adminData);
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adminData),
    }).then((response) => console.log("server side response", response));
  };

  return (
    <section>
      <div className="row w-100">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="input_area col-md-10 col-sm-12 col-12 pt-5 px-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("email")}
              className="form-input"
              placeholder="Add Admin Email..."
            />{" "}
            <br /> <br />
            <input
              className="btn btn-success btn btn-primary py-2 px-4"
              type="Submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddAdmin;
