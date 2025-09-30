import type { Product, Variant } from "../../lib/types";

type Props = {
  product: Product | null;
  selectedVariant?: Variant | null;
  onSelectVariant: (variant: Variant) => void;
};

export default function ProductGallery({ product, selectedVariant, onSelectVariant }: Props) {
  if (!product) {
    return (
      <div className="w-[90%] h-140 bg-base-200 rounded-lg shadow-lg flex items-center justify-center">
        <span className="text-gray-500">No product selected</span>
      </div>
    );
  }

  return (
    <div className="w-[90%] h-140 bg-base-200 rounded-lg shadow-lg flex flex-col">
      <figure className="flex-1 flex items-center justify-center">
        <img
          src={selectedVariant?.photoURL || product.photoURL}
          alt={selectedVariant?.name || product.productName}
          className="max-w-full max-h-full object-contain px-2"
        />
      </figure>
      {product.variant && product.variant.length > 0 && (
        <div className="avatar-group -space-x-6 mt-2 flex justify-center">
          {product.variant.map((variant) => (
            <div key={variant.name} className="avatar cursor-pointer" onClick={() => onSelectVariant(variant)}>
              <div className="w-12 h-12">
                <img src={variant.photoURL} alt={variant.name} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
