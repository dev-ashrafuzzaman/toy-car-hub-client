import { Link } from "react-router-dom";
import "./Error404Page.css";
import useTitle from "../../hooks/useTitle";

const Error404Page = () => {
  useTitle('Error')
  return (
    <div className="text-center error-404-page">
      <div className="flex justify-center">
        <img
          className=""
          src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/media/507f015a7efd81cec270faf9c4f1aabd.gif"
          alt=""
        />
      </div>
      <Link to="/">
        <button className="bg-[#1A7CC3] text-white font-bold p-4 rounded-lg">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Error404Page;
