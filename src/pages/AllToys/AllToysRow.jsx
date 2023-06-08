import { Link } from "react-router-dom";

const AllToysRow = ({ toys }) => {
    const { sellerEmail, sellerName, productName, price, availableQuantity, SubCategory, pictureURL, _id } = toys;
    return (
        <tr className="hover:bg-[#57c3e42f]">
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={pictureURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{sellerName}</div>
                        <div className="text-sm opacity-50">{sellerEmail}</div>
                    </div>
                </div>
            </td>
            <td>
                <p className="text-black font-semibold"> {productName}</p>
            </td>
            <td>{SubCategory}</td>
            <td>{price}</td>
            <td><p className="bg-[#f379a7] px-4 text-center text-white font-bold rounded-xl">$ {availableQuantity}</p></td>
            <th>
                <Link to={`/toy-details/${_id}`}><button className="btn btn-ghost bg-[#57c4e4] font-semibold text-white hover:text-black btn-xs">details</button></Link>
            </th>
        </tr>
    );
};

export default AllToysRow;