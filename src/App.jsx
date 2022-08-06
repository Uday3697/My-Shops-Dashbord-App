import "./App.css";
import { MainDash } from "./components/MainDash/MainDash";
import Sidebar from "./components/Sidebar/Sidebar";
import Favicon from 'react-favicon'
import { RightSide } from "./components/RightSide/RightSide";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        {/* <Favicon url='http://oflisback.github.io/react-favicon/img/github.ico' /> */}
        <Sidebar />
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
