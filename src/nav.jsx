import tubeLogo from './assets/youtubeLogo.png';
import rlogo from './assets/Rlogo.jpg';
import { FiMenu } from "react-icons/Fi";
import { BsSearch } from "react-icons/Bs";
import { BiVideoPlus } from "react-icons/Bi";
import { MdOutlineNotifications } from "react-icons/Md";



const Nav = () => {
  return (
    <nav className='fixed top-0 left-16 w-full pr-20  m-auto bg-black flex justify-between items-center h-16 z-10'>

      <div className='text-white flex items-center justify-center'>
        {/* <div className='flex items-center text-2xl bg-orange border-white-2 rounded-full hover:cursor-pointer hover:bg-gray-800 h-10 w-10 m-auto justify-center'><FiMenu /></div> */}
        <img className=" px-4 h-6 w-auto" src={tubeLogo} alt="logo" />
      </div>

      <div className='flex items-center'>
        <input className="h-10 md:w-[540px] text-white border border-slate-400 px-4 bg-transparent rounded-l-full " type="text" placeholder='Search' />
        <button className='h-10 border border-slate-400 border-l-0 rounded-r-full text-white flex justify-center items-center w-14 bg-slate-900'>
          <BsSearch />
        </button>
      </div>

      <div className='flex items-center gap-x-4 justify-between text-white '>
        <div className='flex items-center text-2xl bg-orange border-white-2 rounded-full hover:cursor-pointer hover:bg-gray-800 h-10 w-10 m-auto justify-center'>
          <BiVideoPlus />
        </div>
        <div className='flex items-center text-2xl bg-orange border-white-2 rounded-full hover:cursor-pointer hover:bg-gray-800 h-10 w-10 m-auto justify-center'>
          <MdOutlineNotifications />
        </div>
        <div>
          <img
            className='h-10 w-10 border-0 rounded-full bg-cover'
            src={rlogo} alt="account" />
        </div>
      </div>

    </nav>

  )
}

export default Nav;
