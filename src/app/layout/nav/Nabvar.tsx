import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";
import CartifyLogo from "../../../assets/Cartify.png";

export default function Nabvar() {
  return (
    <header className="w-full fixed h-20 top-0 z-50 bg-gray-300">
      <div className="flex items-center justify-between h-full px-10 mx-auto gap-6">
        <Link to="/CartifyDashboard" className="flex items-center gap-3 h-full overflow-hidden">
          <img src={CartifyLogo} alt="logo" className="h-48 max-h-48 w-auto object-contain hover:cursor-pointer" />
        </Link>

        <div>
          <input type="text" placeholder="Search here..." className="input w-xl h-8 font-black py-1 bg-base-100 rounded-lg pl-3 outline-none" />
        </div>

        <div className="flex flex-row gap-3 items-center">
          <a className="flex items-center justify-end gap-1">
            <ShoppingCartIcon className="h-10 w-12 text-gray-800 hover:cursor-pointer pb-1" />
            <span className="inline-flex items-center justify-center h-7 w-7 rounded-xl bg-gray-800 text-white text-sm font-medium">0</span>
          </a>
          <div className="border-l-2 border-white h-10 pl-2 flex items-center">
            <button className="btn bg-base-100">Login</button>
          </div>
        </div>
      </div>
    </header>
  );
}
