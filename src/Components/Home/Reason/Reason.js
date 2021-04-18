import React from "react";

const Reason = (props) => {
  const { heading, para, icon } = props.reason;

  return (
    <div className="d-flex col-md-4">
      <div>
        <p className="pe-5" style={{ fontSize: "2rem", color: "hotpink" }}>
          {icon}
        </p>
      </div>
      <div>
        <h4 className="text-secondary">{heading}</h4>
        <p className="text-secondary">{para}</p>
      </div>
    </div>
  );
};

export default Reason;
