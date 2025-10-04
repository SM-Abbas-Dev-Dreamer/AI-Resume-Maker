import { Outlet } from "react-router-dom";
import Header from "./components/header";

const App = () => {
  return (
    <div>
      <Header />
      <main style={{ marginTop: "70px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
