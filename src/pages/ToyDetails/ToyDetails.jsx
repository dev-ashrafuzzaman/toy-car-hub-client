import ReactStars from "react-rating-stars-component";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";



const ToyDetails = () => {
    useTitle('Toy Details')
    const toyDetails = useLoaderData();
    const { sellerEmail, sellerName, productName, price, availableQuantity, SubCategory, rating, pictureURL, productDetails,
    } = toyDetails;

    return (
        <div className="container mx-auto md:p-10 p-10">
            <div className="card lg:card-side bg-base-100 p-10 shadow-xl">
                <img className="w-[40%]" src={pictureURL} alt="Album" />
                <div className="card-body">
                    <h2 className="text-4xl font-bold">{productName}</h2>
                    <div className="w-1/2 border">
                    </div>
                    <div className="text-slate-500 text-xl space-y-4 ">
                        <p><span className="font-bold">Price:</span> $ {price}</p>
                        <p> <span className="font-bold">Quantity:</span> {availableQuantity} Pics</p>
                        <p><span className="font-bold">Sub Category:</span> {SubCategory}</p>
                        <p className="flex gap-2"><span className="font-bold">Rating:</span>
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
                        </p>
                        <p> <span className="font-bold">Product Details:</span>   {productDetails}</p>
                        <div className="w-1/2 my-2 border">
                        </div>
                        <p> <span className="font-bold">Seller Name:</span>   {sellerName}</p>
                        <p><span className="font-bold">Seller Email:</span>  {sellerEmail}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ToyDetails;