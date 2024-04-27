import React from 'react'
import Banner from '../../Shared/Banner';
import bannerimg from '../../assets/bannernew.png'

  const Newsletter = () =>
  
  {
    return (

      <div className='md:px-14 p-4 max-w-screen-2xl mx-auto my-12 zoom-in-image'>

      {/* use our banner components here and pass props */}
        
      <Banner banner={bannerimg} heading="Each student can share their discount code with friends" subheading={"A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the 'topic sentence.'"} btn1={"I have a code"} btn2/>
        
        </div>
    );
  }
  
  export default Newsletter;