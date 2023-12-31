import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-full min-w-screen flex flex-col bg-solitude">
      <Navbar />
      <div className="h-24 w-full pt-24 bg-solitude" />
      <main className="h-full w-full flex flex-col bg-solitude">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
