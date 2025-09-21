import { ProductTag } from "../../lib/types/productTag";

export default function CartifyOptions() {
  return (
    <div className="flex flex-row gap-2">
      {ProductTag.map((tag) => (
        <button key={tag} className="btn btn-lg bg-base-200 rounded-xl font-semibold ">
          {tag}
        </button>
      ))}
    </div>
  );
}
