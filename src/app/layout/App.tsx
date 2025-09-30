import { Outlet, useLocation } from "react-router";
import Nabvar from "./nav/Nabvar";
import { useAppDispatch } from "../../lib/stores/store";
import { setProducts } from "../../lib/reduxStore/productSlice";
import { products } from "../../lib/data/sampleData";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const hideNavbar = location.pathname === "/";

  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch]);
  return (
    <div>
      {!hideNavbar && <Nabvar />}
      <Outlet />
    </div>
  );
}

export default App;
