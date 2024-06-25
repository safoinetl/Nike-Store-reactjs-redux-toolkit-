import React from "react";
import Title from "./utils/Title";
import Items from "./utils/Items";

const Sales = ({ ifExists, endpoint: { title, items } }) => {
  return (
    <>
      <div className="nike-container">
        <Title title={title} />
        <div
          className={`grid justify-center justify-items-center  gap-7 lg:gap-5 mt-7 ${
            ifExists
              ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"
              : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
          } `}
        >
          {items?.map((item, i) => (
            <Items {...item} key={i} ifExists={ifExists} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
