
const AllToysRow = ({ toys }) => {
    const { sellerEmail, sellerName, productName, price, availableQuantity, SubCategory, rating, pictureURL, _id } = toys;
    return (
        <tr className="hover:bg-[#57c3e42f]">
            <th>
                <button className="btn btn-square hover:bg-red-600 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
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
                <button className="btn btn-ghost bg-[#57c4e4] font-semibold text-white hover:text-black btn-xs">details</button>
            </th>
        </tr>
    );
};

export default AllToysRow;