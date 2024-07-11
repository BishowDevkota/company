import React from "react";
import Contact from "../../../Data/Conatact/Contact.json";
import "../Style/SideBar.css";
const SideBar = () => {
  return (
    <>
      {console.log(Contact)}
      <div className="cards">
        {Contact.sidebar.lists.map((item, key) => {
          return (
            <>
              <div className="card bg-[var(--secondary-color)]" key={key}>
                <img src={item.image} alt="" />
                <div className="sub-card">
                  <div className="card-heading">{item.heading}</div>
                  <div className="content">{item.content}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SideBar;
