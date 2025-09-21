import type { Product } from "../../lib/data/sampleData";

type CartifyProductCardProps = {
  product: Product;
};

export default function CartifyProductCard({ product }: CartifyProductCardProps) {
  return (
    <div className="card card-bordered bg-base-200 w-full">
      <figure>
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
          <img src={product.photoURL} alt={product.productName} className="max-h-full max-w-full" />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{product.productName}</h2>
        <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
        <div className="flex flex-wrap gap-2 mt-2">
          {product.tags.map((tag) => (
            <span key={tag} className="badge badge-outline text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="card-actions justify-end mt-4 space-x-2">
          <button className="btn btn-primary w-32">Buy Now</button>
          <button className="btn btn-success w-32">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
