import React from 'react';
import Reason from '../Reason/Reason';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBabyCarriage, faUserFriends, faUserGraduate } from '@fortawesome/free-solid-svg-icons'

const Reasons = () => {

    const reasonData = [
        {
          heading: "Qualified teachers",
          para: "We employ only highly skilled teachers with more than 5 years of experience in teaching children.",
          icon: <FontAwesomeIcon icon={faUserFriends} />
        },
        {
            heading: "Hobby groups",
            para: "The groups where your children will be educated are created according to your child’s interests.",
            icon: <FontAwesomeIcon icon={faBabyCarriage} />
        },
        {
            heading: "Various programs",
            para: "We have a variety of programs to offer your children regardless of their age and level of knowledge.",
            icon: <FontAwesomeIcon icon={faUserGraduate} />
        }
      ];

    return (
        <section style={{height: '500px'}} className="continer-fluid bg-light mb-5">
            <div className="text-center">
                <h2 style={{ color: "hotpink", fontWeight: "800", paddingTop: '4rem' }}>Why People Choose Us?</h2>
            </div>
            <div className="d-flex justify-content-center">
        <div className="container row mt-5 pt-5">
          {reasonData.map((reason) => (
            <Reason reason={reason} key={reason.heading}></Reason>
          ))}
        </div>
      </div>
        </section>
    );
};

export default Reasons;