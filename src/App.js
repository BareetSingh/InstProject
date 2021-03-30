import logo from "./logo.svg";
import "./App.css";
import ShowBranch from "./components/ShowBranch";
import "bootstrap/dist/css/bootstrap.css";

import { Container } from "reactstrap";
import AddAddress from "./components/AddAddress";
import AddBranch from "./components/AddBranch";
import NavBar from "./components/NavBar";
import DeleteBranch from "./components/DeleteBranch";

function App() {
  return (
    <div className="my-3 m-5">
      <NavBar />
    </div>
  );
}

export default App;
