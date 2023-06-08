
import { useContext, useEffect, useState } from "react";
import MyToysRow from "./MyToysRow";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [loginUserByProduct, setSubCategoryProduct] = useState([]);

    useEffect(() => {
        fetch(`https://toy-marketplace-server-side-chi.vercel.app/sellerEmail?sellerEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setSubCategoryProduct(data)
                console.log(data)
            })
    }, [])

    // handle Delete
    const handleToyDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-marketplace-server-side-chi.vercel.app/allToyCars/${id}`,
                    {
                        method: 'DELETE'
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        const remaining = loginUserByProduct.filter(toys => toys._id !== id);
                        setSubCategoryProduct(remaining)
                        Swal.fire(
                            'Deleted!',
                            'Your Toy has been deleted.',
                            'success'
                        )
                    })
            }
        })
    }

    return (
        <div className="container mx-auto mt-20 md:p-10 p-0">
            <div>
                <h3 className="text-center mb-10 font-bold text-4xl text-[#f379a7]">My added toys: {loginUserByProduct.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <button className="btn btn-square">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <th>Seller Name & Email</th>
                                <th>Toy Name</th>
                                <th>Sub-category</th>
                                <th>Available Quantity</th>
                                <th>Toy Price</th>
                                <th className="pl-14">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                loginUserByProduct.map(toys => <MyToysRow
                                    key={toys._id}
                                    toys={toys}
                                    handleToyDelete={handleToyDelete}
                                ></MyToysRow>)
                            }

                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;