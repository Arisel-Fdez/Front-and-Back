import '../assets/stylesheets/App.css';
import { Routes, Route} from "react-router-dom";
import Inicio from "./Inicio";
import VerUsers from "../pages/VerUsers";
import Users from '../pages/Users';
import UpdateUsers from '../pages/UpdateUsers';
import Name from '../pages/Name';
import Email from '../pages/Email';
import Pass from '../pages/Pass';
import Phone from '../pages/Phone';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Users" element={<Users />} />
                <Route path="/VerUsers" element={<VerUsers />} />
                <Route path='/UpdateUsers' element={<UpdateUsers/>}/>
                <Route path='/Name' element={<Name/>}/>
                <Route path='/Email' element={<Email/>}/>
                <Route path='/Pass' element={<Pass/>}/>
                <Route path='/Phone' element={<Phone/>}/>

            </Routes>
        </div>
    );
}

export default App;