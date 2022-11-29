import React from 'react';
import Aboutus from '../../Images/aboutus.jpg'

const AboutUs = () => {
  return (
    <div className='container text-center mt-2'>
     <h1>About <span className='text-success'>us</span></h1>
      <img src={Aboutus} style={{width:"100%"}} alt="pic"/>
      <div className='mt-4 border-bottom' >
        <h2>We are the <span className='text-success'> best</span> of nothing</h2>
        <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium amet aspernatur autem consequatur corporis dolores error et, excepturi explicabo facere ipsa ipsum magnam maiores minima molestiae nulla pariatur placeat porro qui quidem quis quod, reiciendis rem repellat repudiandae sequi sit tempore temporibus tenetur veritatis voluptatem voluptatum! Minus, quibusdam.</p>
      </div>
      <div className='text-start'>
        <h3>We can do <span className='text-success'>nothing</span></h3>
        <strong>Our history</strong>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum id mollitia nesciunt obcaecati pariatur quae repellat? Delectus eaque minus quod.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, asperiores at aut dignissimos dolore facere inventore ipsa ipsam ipsum, libero natus nemo nisi quia quibusdam repellat sapiente sint, tempora unde! Facere, qui totam! A accusamus accusantium aliquid asperiores at distinctio dolore id magni neque odio omnis rerum tenetur unde, voluptatum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, voluptas?</p>
      </div>
    </div>
  );
};

export default AboutUs;