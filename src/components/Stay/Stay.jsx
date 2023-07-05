import React from "react";
import "./Stay.scss";

const Stay = ({ data }) => {
  return (
    <article className="stay">
      <img src={data.photo} alt={data.title} />
      <div className="stay-info-container">
        <div className="stay-info">
          {data.superHost && <span className="superhost">Super host</span>}
          {data.type && <span className="stay-type">{data.type}</span>}
          {data.beds && <span className="beds"> . {data.beds} beds</span>}
        </div>
        <div className="rating">
          <span class="material-icons">star_rate</span>
          <span className="value">{data.rating}</span>
        </div>
      </div>
      <span className="title">{data.title}</span>
    </article>
  );
};

export default Stay;
