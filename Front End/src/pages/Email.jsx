import "../assets/stylesheets/Users.css";
import React, { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";


function Email(){



    const [data, setData]= useState({
        id: "",
        email: ""

    })

    const url=`http://localhost:3000/api/user/email?id=${data.id}&email=${data.email}`

    function Enviar(e){
        e.preventDefault();

        axios.patch(url,{
            id: data.id,
            email: data.email
        })
            .then(res =>{
                console.log(res.data)
            })
        alert('Datos Actualizados')

    }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)

    }




    return (
        <React.Fragment>

            <div className="xd">
                <form  className="form-box" id="form">
                    <h3>Update Email</h3>
                    <form className="was-validated">

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Id User</span>
                            <input onChange={(e)=>handle(e)} id="id" value={data.id} type="text" className="form-control" required></input>
                        </div>

                        <div className="input-group mb-3" >
                            <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                            <input onChange={(e)=>handle(e)} id="email" value={data.email} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required></input>
                        </div>


                        <div className="mb-3">
                            <Link to="/VerUsers" className="btn btn-outline-primary" >Back</Link>
                            <Link to="/" onClick={(e)=>Enviar(e)} className="btn btn-outline-success">Update</Link>
                        </div>
                    </form>

                </form>
            </div>

        </React.Fragment>
    );
}

export default Email;