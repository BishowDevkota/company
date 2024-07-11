import React from "react";
import Subhero from "../../Components/About/components/Subhero";
import OtherActivity from "../../Data/OtherActivities/Otheractivities.json";
import Cards from "../../Components/Home/components/Cards";
import ContactForm from "../../Components/Trekking/components/ContactForm";
const OtherActivities = () => {
  return (
    <div>
      <Subhero
        title={OtherActivity.subhero.heading}
        image={OtherActivity.subhero.image}
      />
      <div className="main-content">
        <div className="sub-main">
          <div className="other-activity-overview">
            <h1 className="heading">{OtherActivity.overview.heading}</h1>
            <p className="format">{OtherActivity.overview.paragraph}</p>
          </div>
          <div className="famous-acitvity-beyond-trekking">
            <h1 className="heading">{OtherActivity.famousActivity.heading}</h1>
            <p className="format">{OtherActivity.famousActivity.paragraph}</p>
            <div className="card-wrapper">
              {OtherActivity.famousActivity.lists.map((other, index) => (
                <Cards
                  key={index}
                  link={other.link}
                  image={other.image}
                  name={other.name}
                  days={other.days}
                />
              ))}
            </div>
          </div>
          <div className="contact-us">
            <h1 className="heading">{OtherActivity.contact.heading}</h1>
            <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherActivities;
