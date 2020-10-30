import React from "react";
import Rate from "./Rate";
function Filter({ setsearchText, setsearchRate, rating }) {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", width: "30%" }}
    >
      <input
        placeholder="serached movie"
        onChange={(e) => setsearchText(e.target.value)}
      />
      <Rate setSearchRate={setsearchRate} rating={rating} />
    </div>
  );
}

export default Filter;