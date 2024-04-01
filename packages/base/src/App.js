import { BrowserRouter as Router, } from "react-router-dom";

import RouterGuard from "./routes";

import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <div className="routes-container">
          <RouterGuard />
        </div>
      </Router>
    </div>
  );
}

export default App;
