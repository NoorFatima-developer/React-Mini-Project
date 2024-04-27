import { useState } from 'react';
import logo from '../../assets/logo2.jpg';
//react-icons
import { GrLanguage} from "react-icons/gr";
import { FaXmark, FaBars} from "react-icons/fa6";

//import react scroll bar
import { Link } from 'react-scroll';


const Navbar = () => {


  const[isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {

    setIsMenuOpen(!isMenuOpen);
  }
  
  const NavItems =[
    {link: "Home", path: "home"},
    {link: "Feature", path: "feature"},
    {link: "About", path: "about"},
    {link: "Pricing", path: "pricing"},

  ]
  
    return (
      
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto fixed text-primary top-0 right-0 left-0 border-b ">
      <div>
        <div className='text-xl container mx-auto flex justify-between items-center font-medium'>
            <div className='flex space-x-14 items-center'>
                <a href='/' className='text-2xl font-semibold flex items-center space-x-3 text-primary'><img src={logo} alt="" className='w-20 rounded-lg transition-all bg-primary inline-block items-center'/><span>XYZ</span></a>

                {/* Showing NavItems using map */}

                <ul className='md:flex space-x-12 hidden'>

  {NavItems.map(({ link, path }) => (
   <Link spy={true} smooth={true} offset={-100} activeClass='active' key={link}
    to={path} className='block hover:text-gray-300 cursor-pointer'>{link}
   </Link>
  ))}
                </ul>
            </div>
            
            {/* create language and signup */}

            <div className='space-x-12 hidden md:flex items-center'>
              <a href='/' className='hidden lg:flex items-center hover:text-primary '><GrLanguage className='mr-2'/><span>Language</span></a>
              <button className= "bg-purple-400 py-2 px-3 transition-all duration-300 rounded hover:text-white hover:bg-secondary">Sign Up</button>
            </div>
        </div>

        {/* // menu button only display on mobile */}

 <div className='md:hidden flex items-center '>
 <div className='md:hidden absolute top-0 right-0 m-2'>



 <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>

  {
     isMenuOpen ? <FaXmark className='w-6 h-6  text-primary'/> :
    
     (<FaBars className='w-6 h-6 text-primary'/>)
  }

 </button>
 </div>
 </div>
</div>

  {/* nav items for mobile  App */}

<div className={`space-y-4 pt-24 px-4 bg-secondary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>

{
  NavItems.map(({ link, path }) => (
    
   <Link spy={true} smooth={true} offset={-80} activeClass='active' key={link}
    to={path} className='block hover:text-gray-300 cursor-pointer text-white ' onClick={toggleMenu}>{link}</Link>
   
  ))
}

</div>
</nav>

   )
  }

export default Navbar;