import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const UpdateProduct = () => {
    const toyDetails = useLoaderData();
    const { price, availableQuantity, productDetails, _id, productName } = toyDetails;
    const handleToyUpdateToDatabase = (event) => {
        event.preventDefault()
        const form = event.target;
        const price = form.price.value;
        const availableQuantity = form.availableQuantity.value;
        const productDetails = form.productDetails.value;

        const UpdateProductInfo = {
            price,
            availableQuantity,
            productDetails
        }
        console.log(UpdateProductInfo)

        Swal.fire({
            title: 'Are you sure?',
            text: "Your Toy Details won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toy-marketplace-server-side-chi.vercel.app/updateProduct/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(UpdateProductInfo)
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.modifiedCount > 0) {
                            Swal.fire(
                                'Product Updated!',
                                'Your Toy Details has been Updated.',
                                'success'
                            )
                        }
                        console.log(data)
                    })



            }
        })


    }

    return (
        <div className="">
            <h2 className="text-center md:mt-20 mt-10 font-bold text-4xl text-[#f379a7]">Update My Toy Details: {productName}</h2>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <div className="card-body ">
                            <form onSubmit={handleToyUpdateToDatabase} >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Price</span>
                                        </label>
                                        <input type="number" required defaultValue={price} placeholder="Price" name="price" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available quantity</span>
                                        </label>
                                        <input type="number" defaultValue={availableQuantity} required placeholder="Available quantity" name="availableQuantity" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Detail description</span>
                                    </label>
                                    <input type='text' placeholder="Detail description" defaultValue={productDetails} name="productDetails" className="input input-bordered h-[80px]" />
                                </div>
                                <div className="form-control w-full mt-6">
                                    <input type="submit" className="btn text-white font-bold bg-[#f379a7]" value="Update Product" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;