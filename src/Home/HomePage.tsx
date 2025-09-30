import { Link } from "react-router";
import CartifyLogo from "../assets/Cartify1.png";

export default function HomePage() {
  return (
    <div className=" h-screen flex flex-col items-center justify-center ">
      <div className="text-6xl font-bold mb-3">Welcome To</div>
      <Link to="CartifyDashboard">
        <img className="max-h-40 w-auto object-cover" src={CartifyLogo} alt="Logo" />
      </Link>
    </div>
  );
}
