import React, { Component } from 'react'
import Banner from '../../Shared/Banner'
import banner from '../../assets/banner2.png'


  const Home = () => {
    return (
      <div className="md:px-12  p-4 max-w-screen-2xl mx-auto mt-28 zoom-in-image " id="home">

      <Banner banner ={banner} heading ="Develop your skills without diligence" subheading ="A good example of a paragraph contains a topic sentence, details and a conclusion.
       There  are many different kinds of animals that live in China." btn1={"Get Started"} btn2={"Discount"}/>
      </div>
    )
  }
export default Home