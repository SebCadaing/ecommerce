import { Outlet } from "react-router";
import Nabvar from "./nav/Nabvar";
import { useAppDispatch } from "../../lib/stores/store";
import { setProducts } from "../../lib/reduxStore/productSlice";
import { products } from "../../lib/data/sampleData";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch]);
  return (
    <div>
      <Nabvar />
      <Outlet />
    </div>
  );
}

export default App;
