import React from "react";
import { useHistory } from "react-router";

const EnrolledItem = (props) => {
  const { title, age, price, imageURL, _id } = props.item;
  const history = useHistory();
  const handlePurchase = () => {
    history.push(`/enroll/${_id}`);
  };

  return (
    <div>
      <h1 style={{ color: "hotpink" }} className="text-center fw-bold pb-5">
        Service You Choose
      </h1>
      <div className="d-flex justify-content-between">
        <div className="pt-5 text-secondary">
          <h4>Servie: {title}</h4>
          <h4>Age Limit: {age}</h4>
          <h4>Price: {price}</h4>
        </div>
        <div>
          <img
            style={{ height: "400px", width: "500px" }}
            src={imageURL}
            alt=""
          />
        </div>
      </div>
      <button
        onClick={() => handlePurchase()}
        className="btn btn-secondary mt-5 float-end"
      >
        Purchase
      </button>
    </div>
  );
};

export default EnrolledItem;
