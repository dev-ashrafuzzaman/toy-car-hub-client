import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const CollectionAdd = () => {
    useEffect(() =>{
        Aos.init({duration: 1500})
    } ,[]);

    return (
        <div className="container md:p-10 p-2 mx-auto grid md:grid-cols-2 gap-10 text-end">
            <div data-aos="zoom-out-right" className=" flex justify-end items-center  bg-cover w-full h-96 bg-center bg-[url('https://i.ibb.co/KwKZbfJ/5.webp')]">
                <div className="md:p-20 p-6">
                    <p className="md:text-5xl text-2xl font-bold">Sports Car</p>
                    <p className="md:text-2xl my-2 font-bold">Collection</p>
                    <Link to='/add-a-toy'><button className="bg-[#f379a7] hover:bg-[#f379a881] px-10 py-4 text-xl font-bold  rounded-full text-white">Add Now</button></Link>
                </div>
            </div>
            <div data-aos="zoom-out-left" className=" flex justify-end items-center bg-cover w-full h-96 bg-center bg-[url('https://i.ibb.co/YWFWHGh/4.webp')]">
                <div className="md:p-20 p-6">
                    <p className="md:text-5xl text-2xl font-bold text-white">Fire Truck</p>
                    <p className="md:text-2xl my-2 font-bold text-white">Collection</p>
                    <Link to='/add-a-toy'><button className="bg-[#f379a7] hover:bg-[#f379a881] px-10 py-4 text-xl font-bold  rounded-full text-white">Add Now</button></Link>
                </div>
            </div>

        </div>
    );
};

export default CollectionAdd;