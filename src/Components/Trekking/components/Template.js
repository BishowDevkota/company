import React, { useEffect, useState } from "react";
import Subhero from "../../About/components/Subhero";
import Trekking from "../../../Data/Trekking/Trekking.json";
import { useParams } from "react-router-dom";
import DetailItenary from "./DetailItenary";
import "../style/Tempelate.css";
import ContactForm from "./ContactForm";
import GeneralInfo from "./GeneralInfo";
import Error from "../../Error/components/Error";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";


const Template = () => {



  const params = useParams();
  const URRL = Trekking[params.id]?.url;
  const [showSidenav, setShowSideNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
if(window.scrollY>=450) {
  setShowSideNav(true);
  setShowMobileMenuIcon(true)
}else{
  setShowSideNav(false);
  setShowMobileMenuIcon(false);
  setShowMobileSideNav(false)


  
}
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

const[showMobileSidenav, setShowMobileSideNav]=useState(false);
const [showMobileMenuIcon, setShowMobileMenuIcon]=useState(false);
const ToggleShowHideSideNav=()=>{
  setShowMobileSideNav(!showMobileSidenav)
  console.log(showMobileSidenav)
}


  if (!URRL) {
    return (
      <div>
        <Error />
      </div>
    );
  }


  return (
    <>
      <Subhero title={Trekking[params.id]?.subhero.title} />
      <div className="main-content">
        <div className="sub-main-content">
          {showSidenav && (
            <div className="trekking-tempelate-side-nav side-nav-desktop">
              <div className="trekking-cards">
                <a href="#GeneralInfo">General Info</a>
                <a href="#Overview">Overview</a>
                <a href="#TrekHighlight">Trek Highlight</a>
                <a href="#OutlineItenary">Outline Itinerary</a>
                <a href="#DetailItenary">Detail Itinerary</a>
                <a href="#IncludeExclude">Include Exclude</a>
                <a href="#RouteMap">Route Map</a>
                <a href="#QuickInquary">Quick Inquiry</a>
              </div>
            </div>
          )}
          {/* {showMobileNav && ( */}

            <div className="trekking-tempelate-side-nav-mobile side-nav-mobile">
              {showMobileMenuIcon && <div className="ham-burger-cross">
                {showMobileSidenav ? (<>
                  <div className="sub-sub-menu"  onClick={ToggleShowHideSideNav} >
                    <RxCross1/>
                  </div>
                  </>
                  
                ):(<>
                <div className="sub-sub-menu"onClick={ToggleShowHideSideNav}><GiHamburgerMenu /></div>
                  </>
                )}
              </div>}
              {showMobileSidenav && (
                              <div className="mobile-cards">
                              <a href="#GeneralInfo" onClick={ToggleShowHideSideNav}>General Info</a>
                              <a href="#Overview" onClick={ToggleShowHideSideNav}>Overview</a>
                              <a href="#TrekHighlight" onClick={ToggleShowHideSideNav}>Trek Highlight</a>
                              <a href="#OutlineItenary" onClick={ToggleShowHideSideNav}>Outline Itinerary</a>
                              <a href="#DetailItenary" onClick={ToggleShowHideSideNav}>Detail Itinerary</a>
                              <a href="#IncludeExclude" onClick={ToggleShowHideSideNav}>Include Exclude</a>
                              <a href="#RouteMap" onClick={ToggleShowHideSideNav}>Route Map</a>
                              <a href="#QuickInquary" onClick={ToggleShowHideSideNav}>Quick Inquiry</a>
                            </div>
              )}
              </div>



          <div className="info">
            <h1 className="heading">
              {Trekking[params.id].GeneralInfo.heading}
            </h1>
            <div className="info-cards" id="GeneralInfo">
              <GeneralInfo Object={Trekking} Param={params} />
            </div>
          </div>
          <div className="overView" id="Overview">
            <h1 className="heading">{Trekking[params.id]?.overview.heading}</h1>
            <div
              className="format"
              dangerouslySetInnerHTML={{
                __html: Trekking[params.id]?.overview.paragraph,
              }}
            ></div>
          </div>
          <div className="trek-highlights" id="TrekHighlight">
            <h1 className="heading">
              {Trekking[params.id]?.trekHighlights.heading}
            </h1>
            <ol>
              {Trekking[params.id]?.trekHighlights.paragraph.map(
                (item, index) => (
                  <li
                    dangerouslySetInnerHTML={{ __html: item }}
                    key={index}
                    style={{ fontSize: "20px", marginTop: "5px" }}
                  ></li>
                )
              )}
            </ol>
          </div>
          <div className="outline-itenary" id="OutlineItenary">
            <h1 className="heading">
              {Trekking[params.id]?.outlineItenary.heading}
            </h1>
            <ol style={{ listStyle: "none" }}>
              {Trekking[params.id]?.outlineItenary.paragraph.map(
                (item, index) => (
                  <li
                    dangerouslySetInnerHTML={{ __html: item }}
                    key={index}
                    style={{ fontSize: "20px", marginTop: "5px" }}
                  />
                )
              )}
            </ol>
          </div>
          <div className="detail-itenary" id="DetailItenary">
            <h1 className="heading">{Trekking[params.id].detailItenary.heading}</h1>
            <DetailItenary Trekking={Trekking} params={params} />
          </div>
          <div className="include-exclude" id="IncludeExclude">
            <h1 className="heading">
              {Trekking[params.id]?.includeExclude.heading}
            </h1>
            <div className="include">
              <h2>{Trekking[params.id]?.includeExclude.include.heading}</h2>
              <ul>
                {Trekking[params.id]?.includeExclude.include.lists &&
                  Trekking[params.id]?.includeExclude.include.lists.map(
                    (item, index) => (
                      <li style={{ fontSize: "20px" }} key={index}>
                        {item}
                      </li>
                    )
                  )}
              </ul>
            </div>
            <div className="exclude">
              <h2>{Trekking[params.id]?.includeExclude.exclude.heading}</h2>
              <ul>
                {Trekking[params.id]?.includeExclude.exclude.lists &&
                  Trekking[params.id]?.includeExclude.exclude.lists.map(
                    (item, index) => (
                      <li style={{ fontSize: "20px" }} key={index}>
                        {item}
                      </li>
                    )
                  )}
              </ul>
            </div>
          </div>
          <div className="route-map" id="RouteMap">
            <h1 className="heading">{Trekking[params.id]?.routeMap.heading}</h1>
            <img src={Trekking[params.id]?.routeMap.image} alt="" />
            <div
              className="format"
              dangerouslySetInnerHTML={{
                __html: Trekking[params.id]?.routeMap.paragraph,
              }}
            ></div>
          </div>
          <div className="quick-inquary-form" id="QuickInquary">
            <h1 className="heading">
              {Trekking[params.id]?.quickInquaryForm.heading}
            </h1>
            <ContactForm />
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Template;
