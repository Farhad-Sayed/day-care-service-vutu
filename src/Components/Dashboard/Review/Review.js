import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = (data) => {
        // console.log(data);
        const reviewData = {
          name: data.name,
          location: data.location,
          quote: data.quote,
          imageURL: imageURL,
        };
        const url = 'https://peaceful-brook-34340.herokuapp.com/addreviews';
        console.log(reviewData);
        fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(reviewData),
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
              <input
              {...register("name")}
                className="form-input"
                placeholder="Add your name..."
              />
              <br /> <br />
              <input
              {...register("location")}
                className="form-input"
                placeholder="Add location"
              />
              <br /> <br />
              <input style={{height: '100px'}}
              {...register("quote")}
                className="form-input"
                placeholder="Reviews here..."
              />
              <br /> <br />
              <input
                className="btn btn-secondary"
                type="file"
                onChange={handleImageUpload}
              />
              <br /> <br />
              <input className="btn btn-success btn btn-primary" type="submit" />
            </form>
          </div>
        </div>
      </section>
    );
};

export default Review;