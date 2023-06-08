
const TabsProducts = ({product}) => {
    const {pictureURL,productName,price,rating } = product;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={pictureURL} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{productName}</h2>
                <p><span className="font-bold">Price:</span> $ {price}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions">
                    <button className="btn w-full bg-[#f379a7] text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default TabsProducts;