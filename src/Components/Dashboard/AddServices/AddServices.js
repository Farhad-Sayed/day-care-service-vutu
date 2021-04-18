import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";
import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit,  errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = (data) => {
        // console.log(data);
        const eventData = {
          title: data.title,
          description: data.description,
          age: data.age,
          price: data.price,
          imageURL: imageURL,
        };
        const url = 'http://localhost:5000/addservices';
        console.log(eventData);
        fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(eventData),
        }).then((response) => console.log("server side response", response));
      };

      // image uploade
  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "b3d84075885f27b7c533005706f44917");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)

      .then(function (response) {
        //   console.log(response.data.data.display_url);
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section>
      <div className="row w-100">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="input_area col-md-10 col-sm-12 col-12 pt-5 px-5">

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <span>Book: </span>{" "} */}
            <input
            {...register("title")}
              className="form-input"
              placeholder="Add title"
            />
            <br /> <br />
            {/* <span>Author: </span>{" "} */}
            <input
            {...register("description")}
              className="form-input"
              placeholder="Add description"
            />
            <br /> <br />
            {/* <span>Price: </span>{" "} */}
            <input
            {...register("age")}
              className="form-input"
              type="number"
              placeholder="Add age"
            />
            <br /> <br />
            {/* <span>Qunatity: </span>{" "} */}
            <input
            {...register("price")}
              className="form-input"
              type="number"
              defaultValue=" "
              placeholder="Add price"
            />
            <br /> <br />
            <input
              className="btn btn-secondary"
              type="file"
              onChange={handleImageUpload}
            />
            {/* {errors.exampleRequired && <span>This field is required</span>} */}
            <br /> <br />
            <input className="btn btn-success btn btn-primary" type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddServices;
