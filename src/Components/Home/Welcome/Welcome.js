import React from "react";
import welcomeImg from "../../../images/welcome-1.jpg";
import { useSpring, animated } from "react-spring";

const Welcome = () => {
  const props = useSpring({ opacity: 1, from: { opacity: -50 } });
  return (
    <div class="container my-5">
      <div class="row">
        <div className="col-md-6">
          <img className="img-fluid service-card" src={welcomeImg} alt="" />
        </div>
        <div style={{ color: "hotpink" }} className="col-md-6">
          <animated.h1 className="pt-2" style={props}>
            Welcome to Vutu
          </animated.h1>
          <p className="text-secondary mt-3 mb-4">
            At Vutu, our mission is to provide excellence in preschool,
            kindergarten, before and after school programs and summer camp for
            families living in the greater local area. Here you’ll find
            exceptional teachers, curriculum and learning environments that
            encourage children to learn, play and explore in a safe and
            nurturing environment.
          </p>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
