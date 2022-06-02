import React from "react";
import { Link } from "react-router-dom";

function Inicio(){
    return(
        <React.Fragment>
        <div className="xd">
            <form  className="form-box" id="form">
                <h3>Ingreso</h3>
                <div className="mb-3">
                <Link to="/Users" className="btn btn-outline-primary" >Create Account</Link>
                </div >
                <div >
                    <Link to="/VerUsers" className="btn btn-outline-primary" >View Users</Link>
                </div>
            </form>
        </div>
    </React.Fragment>)
}
export default Inicio;