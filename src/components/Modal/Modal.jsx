import React, { useEffect, useState } from "react";
import "./Modal.scss";

const Modal = ({ setFilteredData, setFilter, json }) => {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState(0);
  const [children, setChildren] = useState(0);
  const [adults, setAdults] = useState(0);

  useEffect(() => {
    selectLocation();
  }, []);

  useEffect(() => {
    setGuests(children + adults);
  }, [children, adults]);

  useEffect(() => {
    setFilter({
      location: location,
      guests: guests,
    });
  }, [guests, location]);

  const hideModal = () => {
    document.body.style.maxHeight = "initial";
    document.body.style.overflow = "initial";
    document.querySelector("nav").style.display = "none";
  };
  const selectLocation = () => {
    document.querySelector(".guests-border").style.display = "none";
    document.querySelector(".guests-options").style.visibility = "hidden";
    document.querySelector(".location-border").style.display = "block";
    document.querySelector(".location-options").style.visibility = "visible";
  };
  const selectGuests = () => {
    document.querySelector(".guests-border").style.display = "block";
    document.querySelector(".guests-options").style.visibility = "visible";
    document.querySelector(".location-border").style.display = "none";
    document.querySelector(".location-options").style.visibility = "hidden";
  };

  const handleSearch = () => {
    hideModal();
    const results = json.filter((data) => {
      return (
        location.toLowerCase().includes(data.city.toLowerCase()) &&
        guests <= data.maxGuests
      );
    });
    setFilteredData(results);
  };
  return (
    <nav>
      <div className="wrapper">
        <section className="search-container">
          <div
            onClick={() => selectLocation()}
            className="input-container location"
          >
            <div className="border location-border"></div>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              placeholder="Choose location"
              name="location"
              id="location"
              disabled
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div
            onClick={() => selectGuests()}
            className="input-container guests"
          >
            <div className="border guests-border"></div>
            <label htmlFor="guests">Guests</label>
            <input
              type="Number"
              disabled
              onChange={(e) => setGuests(e.target.value)}
              placeholder="Add guests"
              name="guests"
              id="guests"
              value={guests}
              onClick={() => selectGuests()}
            />
          </div>
          <div className="input-container btn-container">
            <button onClick={() => handleSearch()}>
              <span class="material-icons">search</span>
              Search
            </button>
          </div>
        </section>
        <section className="options">
          <div className="location-options">
            <ul>
              <li>
                <button onClick={(e) => setLocation(e.target.innerHTML)}>
                  <span className="material-icons">place</span>
                  <span>Helsinki, Finland</span>
                </button>
              </li>
              <li>
                <button onClick={(e) => setLocation(e.target.innerHTML)}>
                  <span className="material-icons">place</span>
                  <span>Turku, Finland</span>
                </button>
              </li>
              <li>
                <button onClick={(e) => setLocation(e.target.innerHTML)}>
                  <span className="material-icons">place</span>
                  <span>Oulu, Finland</span>
                </button>
              </li>
              <li>
                <button onClick={(e) => setLocation(e.target.innerHTML)}>
                  <span className="material-icons">place</span>
                  <span>Vaasa, Finland</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="guests-options">
            <div className="adults-container">
              <div className="label">
                <span className="head">Adults</span>
                <span>Ages 13 or above</span>
              </div>
              <div className="counter">
                <button onClick={() => setAdults(adults - 1)}>
                  <span class="material-icons subtract">remove</span>
                </button>

                <span className="count">{adults}</span>
                <button onClick={() => setAdults(adults + 1)}>
                  <span class="material-icons add">add</span>
                </button>
              </div>
            </div>
            <div className="children-container">
              <div className="label">
                <span className="head">Children</span>
                <span>Ages 2-12</span>
              </div>
              <div className="counter">
                <button onClick={() => setChildren(children - 1)}>
                  <span class="material-icons subtract">remove</span>
                </button>

                <span className="count">{children}</span>
                <button onClick={() => setChildren(children + 1)}>
                  <span class="material-icons add">add</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="background" onClick={hideModal}></div>
    </nav>
  );
};

export default Modal;
