import type { Product, Variant } from "../../lib/data/sampleData";

type Props = {
  product: Product | null;
  selectedVariant?: Variant | null;
};

export default function ProductInfo({ product, selectedVariant }: Props) {
  return (
    <div>
      <div className="text-3xl">
        {product?.productName} ({selectedVariant?.name})
      </div>
      <div className="flex flex-wrap gap-2 my-2">
        {product?.tags.map((tag, index) => (
          <span key={index} className="badge badge-md">
            {tag}
          </span>
        ))}
      </div>
      <div className="text-2xl">${product?.price}</div>
      <div className="flex flex-row gap-2">
        <button className="btn btn-primary btn-md">Buy Now</button>
        <button className="btn btn-secondary">Add to Cart</button>
      </div>
    </div>
  );
}
