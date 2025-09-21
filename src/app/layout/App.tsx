import { Outlet } from "react-router";
import Nabvar from "./nav/Nabvar";

function App() {
  return (
    <div>
      <Nabvar />
      <Outlet />
    </div>
  );
}

export default App;
