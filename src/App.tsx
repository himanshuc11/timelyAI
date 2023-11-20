import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-full min-w-screen flex flex-col">
      <Navbar />
      <div className="h-24 w-full pt-24" />
      <main className="h-full w-full flex flex-col">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
