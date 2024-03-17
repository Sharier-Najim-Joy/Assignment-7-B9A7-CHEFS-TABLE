
import { CiSearch} from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  return (
    // Header
    <header className="container mx-auto px-2 lg:px-6">
      <div className="my-3 lg:my-5">
        {/* navigation */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
            <li><a href="#">Home</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Search</a></li>
            </ul>
          </div>
          <a className="text-[24px] md:text-[32px] font-bold text-[#150B2B]">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#150B2B] text-base font-normal ">
            <li><a href="#">Home</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Search</a></li>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <div className="flex items-center bg-[#150B2B0D] p-3 rounded-full gap-3">
            <span className="text-[24px] text-[#150B2BB3]"><CiSearch></CiSearch></span>
            <input className="bg-transparent outline-none rounded-full w-[100%] text-[#150B2BB3] text-base" type="search" placeholder="Search" />
          </div>
          <button className="p-3 rounded-full bg-[#0BE58A] text-[24px] text-[#150B2B]"><FaRegCircleUser></FaRegCircleUser></button>
        </div>
      </div>
      </div>
        {/* Banner part */}
      <section className="bg-[url(./assets/images/Banner.png)] bg-center bg-no-repeat bg-cover h-screen rounded-3xl flex items-center justify-center">
            <div className="flex justify-center items-center flex-col p-2 w-full lg:w-4/6 text-center mx-auto space-y-5">
                <h2 className="text-white font-bold text-[32px] md:text-[52px]">Discover an exceptional cooking class tailored for you!</h2>
                <p className="text-white font-normal text-[16px] md:text-[18px]">Embark with us on this epicurean adventure as we traverse the diverse landscapes of global cuisine, guided by the wisdom of generations past and the creativity of the present.</p>
                
                <div className="flex items-center justify-center gap-4">
                    <button className="px-5 py-3 bg-[#0BE58A] border-2 border-[#0BE58A] text-[#150B2B] text-xl font-semibold rounded-full hover:text-white hover:bg-transparent hover:border-white duration-300">Explore Now</button>
                    <button className="px-5 py-3  text-white text-xl font-semibold border-2 border-white rounded-full hover:bg-[#0BE58A] hover:border-[#0BE58A] hover:text-[#150B2B] duration-300">Our Feedback</button>
                </div>
            </div>
      </section>
    </header>
  );
};

export default Header;
