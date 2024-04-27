import feature from '../../assets/Feature.jpeg';
//motion

import {motion} from "framer-motion";

//varriants

import {fadeIn} from "../../variants";

const Feature = () => {
  return (
    <div className="md:px-14 px-4 max-w-screen-2xl mx-auto my-24 " id="feature">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <motion.div variants={fadeIn("right", 0.7)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.7}} className="lg:w-1/4">


          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">Why we are better than others</h3>
          <p className="text-base text-tertiary">A simple paragraph is compromised of three major components. The first sentence, which is often a declarative sentence, is called the "topic sentence."</p>
        </motion.div>

        {/* Featured cards */}
        <motion.div variants={fadeIn("right", 0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.7}}
        className="w-full lg:w-3/4">
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>

          <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex flex-col border-t-2 justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
  <img src={feature} alt="" className="mb-5" />
  <h5 className='text-2xl text-primary font-semibold px-5 text-center'>Convenient Study Schedule</h5>
</div>


            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8  flex flex-col border-t-2 justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16'>
              <img src={feature} alt="" className="mb-5" />
              <h5 className='text-2xl text-primary font-semibold px-5 text-center'>Convenient Study Schedule</h5>
            </div>

            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8  flex flex-col justify-center border-t-2 items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
              <img src={feature} alt="" className="mb-5" />
              <h5 className='text-2xl text-primary font-semibold px-5 text-center'>Convenient Study Schedule</h5>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Feature;
