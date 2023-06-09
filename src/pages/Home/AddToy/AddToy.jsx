import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";


const AddToy = () => {
    useTitle('Add Toy')
    const { user } = useContext(AuthContext)

    const handleAddAToyDatabase = (event) => {
        event.preventDefault()
        const form = event.target;
        const sellerEmail = user?.email;
        const sellerName = form.sellerName.value;
        const productName = form.productName.value;
        const price = form.price.value;
        const availableQuantity = form.availableQuantity.value;
        const SubCategory = form.SubCategory.value;
        const rating = form.rating.value;
        const pictureURL = form.pictureURL.value;
        const productDetails = form.productDetails.value;

        const addProductInfo = {
            sellerEmail,
            sellerName,
            productName,
            price,
            availableQuantity,
            SubCategory,
            rating,
            pictureURL,
            productDetails
        }
        console.log(addProductInfo)
        fetch('https://toy-marketplace-server-side-chi.vercel.app/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProductInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Toy has been saved to Database',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                }
                console.log(data)
            })
    }

    return (
        <div className="">
            <h2 className="text-center md:mt-20 mt-10 font-bold text-4xl text-[#f379a7]">Add A New Toy</h2>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <div className="card-body ">
                            <form onSubmit={handleAddAToyDatabase} >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input type="text" placeholder="Seller Name" defaultValue={user?.displayName} name="sellerName" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Email</span>
                                        </label>
                                        <input type="email" required placeholder="Seller Email" defaultValue={user?.email} name="sellerEmail" className="input input-bordered" />
                                    </div>
                                    <hr />
                                    <hr />
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Name</span>
                                        </label>
                                        <input type="text" required placeholder="Product Name" name="productName" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Price</span>
                                        </label>
                                        <input type="number" required placeholder="Price" name="price" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available quantity</span>
                                        </label>
                                        <input type="number" required placeholder="Available quantity" name="availableQuantity" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Sub-category</span>
                                        </label>
                                        <input type="text" placeholder="Sub-category" required name="SubCategory" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="text" placeholder="Rating" name="rating" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Picture URL</span>
                                        </label>
                                        <input type="url" placeholder="Picture URL" name="pictureURL" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Detail description</span>
                                    </label>
                                    <input type='text' placeholder="Detail description" name="productDetails" className="input input-bordered h-[80px]" />
                                </div>
                                <div className="form-control w-full mt-6">
                                    <input type="submit" className="btn text-white font-bold bg-[#f379a7]" value="Added a Product" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToy;