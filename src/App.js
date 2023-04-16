import { useState } from "react";
import MainComponent from "./Components/MainComponent/MainComponent";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {

  const[hide,setHide] = useState(false);

  const handleSidebarToggle = () => {
    console.log("handleSidebarToggle called");
    setHide(!hide);
  }

  return (
    <>
      <div className="d-flex">
        <Sidebar hide={hide}/>
        <div className="col">
            <MainComponent handleSidebarToggle={handleSidebarToggle}/>
        </div>
      </div>
    </>
  );
}

export default App;
