import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AllToysRow = ({ toys }) => {
    const { sellerEmail, sellerName, productName, price, availableQuantity, SubCategory, pictureURL, _id } = toys;
    const {user} = useContext(AuthContext);
    

    const handleLoginNotify = () =>{
        Swal.fire({
            title: 'You are not logged user',
            text: "Please login first to continue !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login'
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = `/toy/${_id}`;
            }
          })
    }

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
                {
                    user?.email ? <Link className="btn btn-ghost bg-[#57c4e4] font-semibold text-white hover:text-black btn-xs" to={`/toy/${_id}`}>Details</Link>
                        : <Link onClick={handleLoginNotify} className="btn btn-ghost bg-[#57c4e4] font-semibold text-white hover:text-black btn-xs">Details</Link>
                }

            </th>
        </tr>
    );
};

export default AllToysRow;