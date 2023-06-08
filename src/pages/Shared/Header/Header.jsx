
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
const Header = () => {
    const { user, userLogOut } = useContext(AuthContext)
    const userName = user?.displayName;
    const userPhoto = user?.photoURL;


    const handleLogOut = () => {
        userLogOut()
            .then(result => {
                console.log(result, 'successFul Log out')
            })
            .catch(error => console.log(error))
    }


    return (

        <div>
            <div className="navbar bg-base-100 container mx-auto md:px-10 px-2 z-40">
                <div className="flex-1">
                    <Link to='/'><p className="btn bg-[#F379A7] normal-case text-white text-3xl"><span className="text-white">ToyCarHub</span></p></Link>
                </div>

                <div className="flex-none">
                    <div>
                        <ul className="menu menu-horizontal px-1 flex justify-center items-center">
                            <li className='md:contents hidden'><Link to='/'>Home</Link></li>
                            <li className='md:contents hidden'><Link to='/blog'>Blogs</Link></li>
                            <li className='md:contents hidden'><Link to='/all-toys'>All Toys</Link></li>
                            {
                                user?.email ? <>
                                    <li className='md:contents hidden'><Link to='/my-toys'>My Toys</Link></li>
                                    <li className='md:contents hidden'><Link to='/add-a-toy'>Add A Toy</Link></li>
                                    <li className='md:contents hidden'><Link ><button onClick={handleLogOut}>Logout</button ></Link></li>
                                </> : <li className='md:contents hidden'><Link to='/login'>Login</Link></li>
                            }
                            <li data-tip={userName} className='tooltip tooltip-left md:tooltip-bottom tooltip-success'>
                                <div>{userPhoto ? <img className='w-10 rounded-full ' src={userPhoto} alt="" /> : <img className='w-10 rounded-full' src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png" alt="" />}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
