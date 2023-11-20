import { Link } from "react-router-dom";
import { Heading, Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <nav className="flex flex-1 justify-between items-center drop-shadow-md border-b px-5 py-2.5  fixed top-0 w-full h-24 box-border bg-lightBlue z-10">
      <Link to="/">
        <Heading fontSize={"large"} fontWeight={"600"}>
          TimelyAI
        </Heading>
      </Link>
      <Link to="/create">
        <Button>Create New Campaign</Button>
      </Link>
    </nav>
  );
}

export default Navbar;
