import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faHome,
  faGripHorizontal,
  faUserPlus,
  faCommentDots,
  faThList,
  faClipboardList,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://peaceful-brook-34340.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [loggedInUser.email]);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        {isAdmin ? (
          " "
        ) : (
          <div>
            <li>
              <Link to="/" className="text-white">
                <FontAwesomeIcon icon={faHome} /> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/review" className="text-white">
                <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
              </Link>
            </li>
            <li>
              <Link to="/bookList" className="text-white">
                <FontAwesomeIcon icon={faThList} /> <span>Book List</span>
              </Link>
            </li>
          </div>
        )}

        {isAdmin && (
          <div>
            <li>
              <Link to="/addservices" className="text-white">
                <FontAwesomeIcon icon={faGripHorizontal} />{" "}
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/addservices" className="text-white">
                <FontAwesomeIcon icon={faCalendar} /> <span>Add Services</span>
              </Link>
            </li>
            <li>
              <Link to="/orderList" className="text-white">
                <FontAwesomeIcon icon={faClipboardList} />{" "}
                <span>Order List</span>
              </Link>
            </li>
            <li>
              <Link to="/manageservices" className="text-white">
                <FontAwesomeIcon icon={faTasks} /> <span>Manage Services</span>
              </Link>
            </li>
            <li>
              <Link to="/addAdmin" className="text-white">
                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
              </Link>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
