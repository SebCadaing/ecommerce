import { products } from "../../lib/data/sampleData";
import CartifyOptions from "./CartifyOptions";
import CartifyProductCard from "./CartifyProductCard";

export default function CartifyDashboard() {
  return (
    <div className="flex flex-col h-screen px-5 mx-20 pt-20">
      <div className="h-[10%] flex items-center ">
        <CartifyOptions />
      </div>
      <div className="h-[90%] grid grid-cols-3 gap-4">
        {products.map((product) => (
          <CartifyProductCard key={product.productName} product={product} />
        ))}
      </div>
    </div>
  );
}
