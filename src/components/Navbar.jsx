import {appleImg, bagImg, searchImg} from '../utils'
import {navLists} from '../constants'


const Navbar = ({themeColor,setThemeColor}) => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
        <nav className='flex w-full screen-max-width'>
            <img src={appleImg} alt="apple" className='text-black' width={18}height={18} />
            <div className='flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((nav)=>(
                    <div key={nav} className={`px-5 text-sm cursor-pointer text-gray hover:${themeColor?"text-black":"text-white"} transition-all`}>
                     {nav}
                    </div>
                ))}
                </div>
                <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 '>
                    <button className=' w-1 h-1 text-black'onClick={()=>setThemeColor(!themeColor)}>f</button>
                    <img src={searchImg} className='cursor-pointer text-black' alt="search" width={18}height={18} />
                    <img src={bagImg} className='cursor-pointer' alt="bag" width={18}height={18} />
                    
                </div>
        </nav>
    </header>
  )
}

export default Navbar
