import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#585858] mt-10">
      <div className="container mx-auto p-10  w-full font-bold text-white grid md:grid-cols-6 gap-10  md:gap-6">
        <div className="col-span-2">
          <h1 className="text-3xl mb-2 text-[#F379A7]">ToyCarHub</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consecl adipisicing elit, sed do eiusmod
            teml incididunt ut labore et dolore magna aliqua Ut enim
          </p>
          <div className="flex gap-4 text-2xl">
            <a className="hover:text-[#F379A7]" href="https://twitter.com/">
              <FaTwitter />
            </a>
            <a className="hover:text-[#F379A7]" href="https://www.facebook.com/">
              <FaFacebook />
            </a>
            <a className="hover:text-[#F379A7]" href="https://www.instagram.com/">
              <FaInstagram />
            </a>
            <a className="hover:text-[#F379A7]" href="https://www.youtube.com/">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div>
          <h1 className="md:text-3xl text-xl mb-2">Quick Links</h1>
          <ul>
            <li className="hover:text-[#F379A7]">
              <Link>-Support</Link>
            </li>
            <li className="hover:text-[#F379A7]">
              <Link>-Helpline</Link>
            </li>
            <li className="hover:text-[#F379A7]">
              <Link>-Policy</Link>
            </li>
            <li className="hover:text-[#F379A7]">
              <Link>-About</Link>
            </li>
            <li className="hover:text-[#F379A7]">
              <Link>-All Toys</Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="md:text-3xl text-xl mb-2">Other Page</h1>
          <ul>
            <li className="hover:text-[#F379A7]">
              <Link>-Blog</Link>
            </li>
            <li className="hover:text-[#F379A7]">
              <Link>-Login</Link>
            </li>
            <li className="hover:text-[#F379A7]">
              <Link>-Register</Link>
            </li>
            <li className="hover:text-[#F379A7]">
              <Link>-My Toys</Link>
            </li>
            <li className="hover:text-[#F379A7]">
              <Link>-Add a Toy</Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2">
          <h1 className="text-3xl mb-2">Store Information</h1>
          <p className="mb-4">
            R780 /A Navaron Puraton Bazar 896, Jadabpur. <br /> Phone/Fax:
            01888052999 <br /> Email: help@carhub.com
          </p>
          <div>
            <img
              className="md:w-3/5"
              src="https://i.ibb.co/3S25qLj/pngkey-com-hawaiian-lei-png-9280025.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-[#4D4D4D] font-bold text-white text-center p-2">
        <p>
          &copy; 2023 <span className="text-[#F379A7] ">ToyCarHub</span>.
          Develop by Ashrafuzzaman
        </p>
      </div>
    </div>
  );
};

export default Footer;
