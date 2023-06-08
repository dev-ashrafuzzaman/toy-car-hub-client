import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";


const AllToys = () => {
    const allToys = useLoaderData();

    return (
        <div className="container mx-auto mt-20 md:p-10 p-0">
            <div>
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
                                allToys.map(toys => <AllToysRow
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