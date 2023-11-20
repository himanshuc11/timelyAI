import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="mt-10 sm:mt-0">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
