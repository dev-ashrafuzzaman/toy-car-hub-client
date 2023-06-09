// import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import AllToysRow from "./AllToysRow";
import { useEffect, useState } from "react";


const AllToys = () => {
    useTitle('All Toys')
    const [searchProductName, setSearchProductName] = useState('');

    const [searchProduct, setSearchProduct] = useState([]);

    useEffect(() => {
        fetch(`https://toy-marketplace-server-side-chi.vercel.app/searchByProductName?productName=${searchProductName}`)
            .then(res => res.json())
            .then(data => {
                setSearchProduct(data)
                console.log(data)
            })
    }, [searchProductName])

    // const allToys = useLoaderData();

    const handleSearch = (event) => {
        event.preventDefault();
        const searchText = event.target.toyName.value;
        setSearchProductName(searchText);
        event.target.reset();

    }

    return (
        <div className="container mx-auto mt-20 md:p-10 p-0">

            <div>
                <h3 className="text-center mb-10 font-bold text-4xl text-[#f379a7]">All added toys: {searchProduct.length}</h3>

                <div className="mb-2 flex justify-end me-16">

                    <form onSubmit={handleSearch} className="form-control">
                        <div className="input-group">
                            <input type="text" name="toyName" placeholder="Search…" className="input input-bordered" />
                            <input className="btn hover:bg-[#f379a7] hover:text-white" type="submit" value="Search" />

                        </div>
                    </form>

                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Seller Name & Email</th>
                                <th>Toy Name</th>
                                <th>Sub-category</th>
                                <th>Available Quantity</th>
                                <th>Toy Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                searchProduct.map(toys => <AllToysRow
                                    key={toys._id}
                                    toys={toys}
                                ></AllToysRow>)
                            }

                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;