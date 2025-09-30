import { NavLink } from "react-router";
import { ProductTag } from "../../lib/types/productTag";

export default function CartifyOptions() {
  return (
    <div className="flex flex-row w-full gap-2">
      {ProductTag.map((tag) => (
        <button key={tag.key} className="btn btn-lg bg-base-200 rounded-xl font-semibold ">
          {tag.label}
        </button>
      ))}
      <div className="flex flex-row w-full  justify-end">
        <NavLink to="/CartifySellerForm" className="btn btn-lg bg-gray-600 text-white w-[20%] rounded-xl">
          Sell
        </NavLink>
      </div>
    </div>
  );
}
