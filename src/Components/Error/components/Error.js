import React from 'react';
import '../style/Error.css';
import Cards from '../../Home/components/Cards';
import ErrorData from '../../../Data/Error/Error.json';
const Error = () => {
  return (
    <div className="error-container">
      <div className="sub-error-container">
      <h1 className='a404'>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <a href="/" className="home-button">Go Home</a>
      </div>
      <div className="sub-main">
        <h1>You Might Also Like This</h1>
        <div className="card-wrapper">
        {
          ErrorData.map((item, index) => {
            return (
            
            <Cards key={index} link={item.link} image={item.image} name={item.name} days={item.days} />
            )
          }
        )}
        </div>
      </div>
    </div>
  );
};

export default Error;
