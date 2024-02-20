
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//PÁGINAS
import Home from "./components/pages/Home"
import AddCard from "./components/pages/AddCard"
import CardAnswer from "./components/pages/CardAnswer"


//COMPONENTES

function App() {
  return (
    
    <Router>
      
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/addcard" element={<AddCard />} />
        <Route path="/cardanswer" element={<CardAnswer />} />

        
      </Routes>


    </Router>
  );
}

export default App;
