import React, { useEffect } from "react";
import "./Header.scss";

const Header = ({ showModal, filter }) => {
  useEffect(() => {
    const location = document.querySelector("span.location");
    const guests = document.querySelector("span.guests");
    if (filter.location.length > 0) {
      location.classList.remove("label");
    } else {
      location.classList.add("label");
    }
    if (guests > 0) {
      guests.classList.remove("label");
    } else {
      guests.classList.add("label");
    }
  }, [filter]);
  return (
    <header>
      <img src="/images/logo.svg" alt="Windbnb" />
      <div className="input-container" onClick={showModal}>
        <span className="location">
          {filter.location ? filter.location : "Select Location"}
        </span>
        <span className="guests">
          {filter.guests ? filter.guests + " guests" : "Add guests"}
        </span>
        <button className="search-icon">
          <span class="material-icons">search</span>
        </button>
      </div>
    </header>
  );
};
export default Header;
