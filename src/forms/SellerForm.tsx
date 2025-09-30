import { useNavigate } from "react-router";
import { addProduct } from "../lib/reduxStore/productSlice";
import { useAppDispatch } from "../lib/stores/store";
import type { Product } from "../lib/types";
import { ProductTag } from "../lib/types/productTag";
import { useState } from "react";

export default function SellerForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (key: string) => {
    setSelectedTags((prev) => (prev.includes(key) ? prev.filter((t) => t !== key) : [...prev, key]));
  };

  const onSubmit = (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    const newProduct: Product = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      productName: data.productName as string,
      price: parseFloat(data.price as string),
      description: data.description as string,
      photoURL: data.photoURL as string,

      // convert selectedTags into Tag objects
      tags: selectedTags.map((tagKey) => ProductTag.find((t) => t.key === tagKey)).filter((t): t is NonNullable<typeof t> => t !== undefined),
    };

    dispatch(addProduct(newProduct));
    navigate("/CartifyDashboard");
  };

  return (
    <div className="card max-w-3xl mx-auto bg-base-300 shadow-xl pt-2 px-2 mt-30">
      <div className="card-body flex flex-col gap-3">
        <h3 className="text-2xl font-semibold text-center">Sell an Item</h3>
        <form action={onSubmit} className="flex flex-col gap-3 w-full">
          <input name="productName" type="text" className="input input-lg w-full" placeholder="Name of Item" />
          <input name="price" type="text" className="input input-lg w-full" placeholder="Price" />

          {/* DaisyUI Dropdown Multi-select */}
          <div className="dropdown w-full">
            <div tabIndex={0} role="button" className="btn w-full flex justify-between">
              {selectedTags.length > 0 ? selectedTags.map((key) => ProductTag.find((t) => t.key === key)?.label).join(", ") : "Select Tags"}
              <span className="ml-2">▼</span>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-full p-2 shadow max-h-60 overflow-y-auto">
              {ProductTag.map((tag) => (
                <li key={tag.key}>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedTags.includes(tag.key)}
                      onChange={() => toggleTag(tag.key)}
                      className="checkbox checkbox-sm"
                    />
                    {tag.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <input name="variant" type="text" className="input input-lg w-full" placeholder="Variant" />
          <input name="photoURL" type="text" className="input input-lg w-full" placeholder="PhotoURL" />
          <button type="submit" className="btn btn-lg bg-base-400">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
