import '../assets/stylesheets/App.css';
import { Routes, Route} from "react-router-dom";
import Inicio from "./Inicio";
import VerUsers from "../pages/VerUsers";
import Users from '../pages/Users';
import UpdateUsers from '../pages/UpdateUsers';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Users" element={<Users />} />
                <Route path="/VerUsers" element={<VerUsers />} />
                <Route path='/UpdateUsers' element={<UpdateUsers/>}/>
            </Routes>
        </div>
    );
}

export default App;