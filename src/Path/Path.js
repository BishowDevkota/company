import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/components/Home";
import About from "../Pages/components/About";
import Trekking from "../Pages/components/Trekking";
import Error from "../Components/Error/components/Error";
import OtherTempelate from "../Components/OtherActivities/components/OtherTempelate";
import SubotherTempelate from "../Components/OtherActivities/components/SubotherTempelate";

import SubTourTempelate from "../Components/Tours/components/SubTourTempelate"
import SubSubTour from "../Components/Tours/components/SubSubTour";
import Blogs from "../Pages/components/Blogs";
import BlogDetail from "../Components/Blogs/component/BlogDetail";
import Contact from "../Pages/components/Contact";
import Scroll from "../Components/ScrollToTop/Scroll";

// import Template from "../Components/Trekking/components/Template";
const Path = () => {
  return (
    <>
      <Scroll/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Navigate to="/" />} />
        <Route path="/about" element={<About />} />
        <Route path="/trekking/:id" element={<Trekking/>}/>
        <Route path="/other-activities/:other" element={<OtherTempelate/>}/>
        <Route path="/other-activities/:other/:subother" element={<SubotherTempelate/>}/>
        <Route path="/tours/:subTour" element={<SubTourTempelate/>}/>
        <Route path="/tours/:tour/:subtour" element={<SubSubTour/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs/:blog" element={<BlogDetail/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={ <Error/> }/>
      </Routes>
    </>
  );
};

export default Path;
