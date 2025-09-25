import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../lib/stores/store";
import { useEffect, useState } from "react";
import { selectProduct } from "../../lib/reduxStore/productSlice";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import type { Variant } from "../../lib/data/sampleData";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const productList = useAppSelector((state) => state.productSlice.products);
  const selectedProduct = useAppSelector((state) => state.productSlice.selectedProduct);

  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(selectedProduct?.variant?.[0] || null);

  useEffect(() => {
    if (id && productList.length > 0) {
      const found = productList.find((p) => p.id === id);
      if (found) {
        dispatch(selectProduct(found));
        setSelectedVariant(found.variant?.[0] || null);
      }
    }
  }, [dispatch, id, productList]);
  return (
    <div className="card w-7xl mx-auto bg-base-300 shadow-xl pt-2 px-2 mt-30">
      <div className="card-body grid grid-cols-2 gap-3">
        <ProductGallery product={selectedProduct} selectedVariant={selectedVariant} onSelectVariant={setSelectedVariant} />
        <ProductInfo product={selectedProduct} selectedVariant={selectedVariant} />
      </div>
    </div>
  );
}
