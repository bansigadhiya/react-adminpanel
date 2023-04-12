import Header from "./Components/Header/Header";
import MainComponent from "./Components/MainComponent/MainComponent";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="col">
            <Header />
            <MainComponent />
        </div>
      </div>
    </>
  );
}

export default App;
