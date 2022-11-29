import React from 'react';
import photo1 from '../../Images/photo-1.jpg'
import logo1 from '../../Images/ic-hand.png';
import logo2 from '../../Images/ic-comment.png';
import logo3 from '../../Images/ic-book.png';


const Home = () => {
  return (
    <div className='container text-center'>
      <h2 className="text-success text-uppercase title mt-4"><span className="text-dark">We give</span> best Services</h2>
      <p className="block-subtitle mb-5">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
        cupiditate non providen</p>
      <div className='d-flex flex-row-reverse align-items-center mb-5 border-bottom pb-4'>
        <img src={photo1} alt="photo-1"/>
        <div>
          <h3>We are</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda debitis deserunt dignissimos distinctio, dolore, dolorum enim fugit ipsum libero minima natus nostrum perspiciatis quia quis, quos repellat sit ut.</p>
        </div>
        </div>
      <div className='d-flex justify-content-around align-items-center'>
        <div>
          <h3>Why <span className='text-success'>we?</span></h3>
          <ul className='text-start'>
            <li>We are the <span className='text-success'>champions, my friend</span></li>
            <li>And we'll keep on fighting till the end</li>
            <li>We are the champions</li>
            <li>We are the champions</li>
            <li>No time for losers</li>
            <li>'Cause we are the champions of the World</li>
          </ul>
        </div>
        <div className='d-flex flex-column'>
          <img src={logo1} className='mb-2' style={{width:'50px', height:'50px'}} alt="logo1"/>
          <img src={logo2} className='mb-2' style={{width:'50px', height:'50px'}} alt="logo2"/>
          <img src={logo3} className='mb-2' style={{width:'50px', height:'50px'}} alt="logo3"/>
        </div>
      </div>
    </div>
  );
};

export default Home;