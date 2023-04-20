import { useState } from "react";
import MainComponent from "./Components/MainComponent/MainComponent";
import Sidebar from "./Components/Sidebar/Sidebar";
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

function App() {

  const[hide,setHide] = useState(false);

  const handle = useFullScreenHandle();

  const handleSidebarToggle = () => {
    console.log("handleSidebarToggle called");
    setHide(!hide);
  }

  return (
    <>
    <FullScreen handle={handle}>
      <div className="d-flex">
        <Sidebar hide={hide}/>
        <div className="col">
            <MainComponent handleSidebarToggle={handleSidebarToggle} handle={handle}/>
        </div>
      </div>
    </FullScreen>
    </>
  );
}

export default App;
