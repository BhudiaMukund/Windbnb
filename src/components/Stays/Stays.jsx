import React from "react";
import Stay from "../Stay/Stay";
import "./Stays.scss";

const Stays = ({ filteredData }) => {
  return (
    <main>
      <div className="head">
        <h1>Stays in Finland</h1>
        <span className="stays">{filteredData.length} stays</span>
      </div>
      <div className="stays-container">
        {filteredData.map((data, index) => {
          return <Stay data={data} key={index} />;
        })}
      </div>
    </main>
  );
};

export default Stays;
