import React from "react";
import about from '../../assets/AboutC.png'
import about1 from '../../assets/About6.jpeg'

import { motion } from "framer-motion";

//varriants
import { fadeIn } from "../../variants"

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.7}} className="md:w-1/2">
          <div className="zoom-in-image">
            <img src={about} alt="" />
          </div>
        </motion.div>

        {/* About content */}
        <motion.div variants={fadeIn("left", 0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.7}} className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">We have been improving our product <span className="text-secondary">for many years.</span></h2>
          <p className="text-tertiary text-lg mb-7">A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live in China.</p>
          <button className="btnPrimary">Getting Started</button>
        </motion.div>
      </div>

      {/* 2nd Part */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
      <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.7}} className="md:w-2/5 m-48">
          <div className="zoom-in-image">
            <img src={about1} alt="" />
          </div>
        </motion.div>

        {/* About content */}
       <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.7}} className="md:w-1/2">
          <h2 className="md:text-5xl text-3xl font-bold text-primary leading-normal mb-5">You can Practice at any <span className="text-secondary">time convenient for you.</span></h2>
          <p className="text-tertiary text-lg mb-7">A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live in China.</p>
          <button className="btnPrimary">Getting Started</button>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
