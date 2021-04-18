import React, { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-brook-34340.herokuapp.com/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <section className="my-5 py-5">
      <div className="container">
        <div>
          <h2 style={{ color: "hotpink" }} className="text-center fw-bold pt-5">
            Testimonials
          </h2>
          <h1 className="text-secondary">What Parients Says...</h1>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="container row d-flex mt-5 pt-5">
            {reviews.map((review) => (
              <Testimonial review={review} key={review._id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
