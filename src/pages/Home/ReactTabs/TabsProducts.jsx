import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const TabsProducts = ({ product }) => {
    const { pictureURL, productName, price, rating, _id } = product;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={pictureURL} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{productName}</h2>
                <p><span className="font-bold">Price:</span> $ {price}</p>
                <p className="flex gap-2 items-center">Rating:
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
                    /></p>
                <div className="card-actions">
                    <Link className="btn w-full bg-[#f379a7] text-white" to={`/toy-details/${_id}`}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default TabsProducts;