import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Scroll = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useLocation().pathname]);

  return null;
};

export default Scroll;