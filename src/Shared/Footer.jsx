import React from 'react';
import logo from '../assets/logoN.jpeg';
import fb from '../assets/fb.png';
import insta from '../assets/Insta.png';
import twitter from '../assets/twitter.png';
import linkdin from '../assets/linkdin.jpg'

const Footer = () => {
  return (
    <div className='bg-primary md:px-14 p-4 mx-auto max--screen-2xl text-white'>
      <div className='my-12 flex flex-col md:flex-row gap-10'>
        <div className='md:w-1/2 space-y-8'>
          <a href='/' className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
            <img src={logo} alt="" className='-10 inline-block items-center'/>
            <span className='text-white '>XYZ</span>
          </a>
          <p className='md:w-1/2 '>A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the 'topic sentence.'</p>
          {/* Email input fields placed below the paragraph */}
          {/* Email input fields placed below the paragraph */}
<div className="flex flex-row items-start ">
  <input type="email" name='email' id='email' placeholder='Your email' className='bg-[#9A7af159] py-2 px-4 rounded-md focus:outline-none'/>
  <input type='submit' value="Subscribe" className='py-2 px-4 rounded-md bg-secondary cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all -ml-2'/>
</div>

        </div>
        {/* Other content on the opposite side */}
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className='space-y-4 mt-5'>
            <h4 className='text-xl'>Platform</h4>
            <ul className='space-y-3'>
              <a href='/' className='block hover:text-gray-300'>Overview</a>
              <a href='/' className='block hover:text-gray-300'>Feature</a>
              <a href='/' className='block hover:text-gray-300'>About</a>
              <a href='/' className='block hover:text-gray-300'>Pricing</a>
            </ul>
          </div>
          <div className='space-y-4 mt-5'>
            <h4 className='text-xl'>Help</h4>
            <ul className='space-y-3'>
              <a href='/' className='block hover:text-gray-300'>How does it work?</a>
              <a href='/' className='block hover:text-gray-300'>Where to ask questions?</a>
              <a href='/' className='block hover:text-gray-300'>How to play?</a>
              <a href='/' className='block hover:text-gray-300'>What is needed for this?</a>
            </ul>
          </div>
          <div className='space-y-4 mt-5'>
            <h4 className='text-xl'>Contacts</h4>
            <ul className='space-y-3'>
              <p className='hover:text-gray-300'>(92)3007074063</p>
              <p className='hover:text-gray-300'>123 xyz xyz</p>
              <p className='hover:text-gray-300'>About</p>
              <p className='hover:text-gray-300'>Pricing</p>
            </ul>
          </div>
        </div>
        </div>

       <hr/>

        <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>

          <p>@ XYZ 20XX --- 20XX. All rights reserved.</p>

          <div className='flex items-center space-x-5 '>

    <img src={fb} alt='' className='w-8 cursor-pointer hover:-translate-4 transition-all duration-300' />
    <img src={insta} alt='' className='w-8 cursor-pointer hover:-translate-4 transition-all duration-300' />
    <img src={twitter} alt='' className='w-8 cursor-pointer hover:-translate-4 transition-all duration-300' />
    <img src={linkdin} alt='' className='w-8 cursor-pointer hover:-translate-4 transition-all duration-300 ' />

</div>
        </div>
        </div>

  );
}

export default Footer;