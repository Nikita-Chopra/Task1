
import "./App.css";
import Main from "./components/Main";
import ModalA from "./components/ModalA";
import ModalB from "./components/ModalB";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function App() {
  return (
    <>
     
      <Router>
   
     
        <Routes>
        <Route exact path="/" element={<Main />}>               
          </Route>
          <Route exact path="all" element={<ModalA />}>           
          </Route>
          <Route exact path="us" element={<ModalB />}>           
          </Route>       
         
        </Routes>
      </Router>

      {/* <ModalA/> */}
      {/* <ModalB/> */}
    
    </>
  );
}

export default App;
