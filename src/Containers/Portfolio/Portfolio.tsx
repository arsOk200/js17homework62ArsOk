import React from 'react';
import {NavLink} from "react-router-dom";

const Portfolio = () => {
  return (
    <div className='container text-center d-flex justify-content-around p-5'>
      <NavLink to='/homework57'>homework57</NavLink>
      <NavLink to='/homework53'>homework53</NavLink>
      <NavLink to='/homework60'>homework60</NavLink>
    </div>
  );
};

export default Portfolio;