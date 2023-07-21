import { AiFillHome } from "react-icons/Ai";
import { MdOutlineSubscriptions } from "react-icons/Md";
import { MdOutlineVideoLibrary } from "react-icons/Md";
import { FiMenu } from "react-icons/Fi";

// import { GoHistory } from "react-icons/Go";

const Left = () => {
  return (  
    <div className="opacity-95 flex flex-col items-center pt-2 px-6 fixed top-0 left-0 text-white text-2xl  bg-black w-16 h-screen ">
        <div className='flex items-center justify-center rounded-full py-6 hover:bg-slate-600 cursor-pointer h-10 w-10'><FiMenu />
        </div>
        <div className='pt-4 flex flex-col  items-center '>
        <div className="flex items-center justify-center rounded-full hover:bg-slate-600 cursor-pointer h-10 w-10 text-xl">  <AiFillHome /> </div>
        <h5 className="text-xs">Home</h5>
        </div>

        <div className='pt-6 flex flex-col  items-center '>
        <div className="flex items-center justify-center rounded-full hover:bg-slate-600 cursor-pointer h-10 w-10 text-xl">  <MdOutlineSubscriptions /> </div>
        <h5 className="text-xs">Subsc</h5>
        </div>

        <div className='pt-6 flex flex-col  items-center '>
        <div className="flex items-center justify-center rounded-full hover:bg-slate-600 cursor-pointer h-10 w-10 text-xl">  <MdOutlineVideoLibrary /> </div>
        <h5 className="text-xs">Library</h5>
        </div>
       
        <div>

        </div>
        {/* <GoHistory /> */}
        
    </div>
  )
}

export default Left;
