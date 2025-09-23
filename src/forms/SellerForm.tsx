export default function SellerForm() {
  const onSubmit = (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };
  return (
    <div className="card max-w-3xl mx-auto bg-base-300 shadow-xl pt-2 px-2 mt-30">
      <div className="card-body flex flex-col gap-3">
        <h3 className="text-2xl font-semibold text-center">Sell an Item</h3>
        <form action={onSubmit} className="flex flex-col gap-3 w-full">
          <input name="productName" type="text" className="input input-lg w-full" placeholder="Name of Item" />
          <input name="price" type="text" className="input input-lg w-full" placeholder="Price" />
          <input name="tags" type="text" className="input input-lg w-full" placeholder="Tags" />
          <button type="submit" className="btn btn-lg bg-base-400">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
