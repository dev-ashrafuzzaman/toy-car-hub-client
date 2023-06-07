
import { Link } from 'react-router-dom'; 
 const Header = () => { 
     return ( 
         <div> 
             <div className="navbar bg-base-100 container mx-auto md:px-10 px-2 z-40"> 
                 <div className="flex-1"> 
                     <Link to='/'><p className="btn bg-[#95B3E0] normal-case text-white text-3xl"><span className="hover:text-[#F379A7]">ToyCarHub</span></p></Link> 
                 </div> 
  
                 <div className="flex-none"> 
                     <div> 
                         <ul className="menu menu-horizontal px-1"> 
                             <li className='md:contents hidden'><Link to='/'>Home</Link></li> 
                             <li className='md:contents hidden'><Link to='/blog'>Blog</Link></li> 
                             <li className='md:contents hidden'><Link to='/all-toys'>All Toys</Link></li> 
                             <li className='md:contents hidden'><Link to='/my-toys'>My Toys</Link></li> 
                             <li className='md:contents hidden'><Link to='/add-a-toy'>Add a Toy</Link></li> 
                         </ul> 
                     </div> 
                 </div> 
             </div> 
         </div> 
     ); 
 }; 
  
 export default Header;