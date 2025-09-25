import { useEffect } from "react";
import { products } from "../../lib/data/sampleData";
import { useAppDispatch, useAppSelector } from "../../lib/stores/store";
import CartifyOptions from "./CartifyOptions";
import CartifyProductCard from "./CartifyProductCard";
import { setProducts } from "../../lib/reduxStore/productSlice";

export default function CartifyDashboard() {
  const dispatch = useAppDispatch();
  const appProducts = useAppSelector((state) => state.productSlice.products);

  useEffect(() => {
    dispatch(setProducts(products));

    return () => {
      dispatch(setProducts([]));
    };
  }, [dispatch]);
  return (
    <div className="flex flex-col h-screen px-5 mx-20 pt-20">
      <div className="h-[10%] flex items-center ">
        <CartifyOptions />
      </div>

      <div className="h-[90%] grid grid-cols-3 gap-4">
        {appProducts.map((product) => (
          <CartifyProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
