import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'


const TabsProducts = ({ product }) => {
    const {user} = useContext(AuthContext)
    const { pictureURL, productName, price, rating, _id } = product;

    useEffect(() =>{
        Aos.init({duration: 1500})
    } ,[])

    const handleLoginNotify = () =>{
        Swal.fire({
            title: 'You are not logged user',
            text: "You have to log in first to view details!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login'
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = `/toy/${_id}`;
            }
          })
    }
    return (
        <div data-aos="zoom-out-down" className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={pictureURL} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{productName}</h2>
                <p><span className="font-bold">Price:</span> $ {price}</p>
                {/* <p className="flex gap-2 items-center">Rating:
                    </p> */}
                    <ReactStars 
                        count={5}
                        value={rating}
                        size={30}
                        edit={false}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                <div className="card-actions">
                    {
                      user?.email?  <Link className="btn w-full bg-[#f379a7] text-white" to={`/toy/${_id}`}>View Details</Link>
                       : <Link  onClick={handleLoginNotify} className="btn w-full bg-[#f379a7] text-white">View Details</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default TabsProducts;