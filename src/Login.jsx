import {useState} from "react";
import Header from "./Header.jsx"
import "./login.css"

function Login(){
    const [form, fixform]=useState({
        email:"",
        password:""
    });

    const [error, fixError]=useState("");
        const submit=(e)=>{
            e.preventDefault();

            if(!form.email || !form.password){
                fixError("All fields are required!");
                return;
            }
        }

    const change = (e)=>{
        fixform({
            ...form,
            [e.target.name]:e.target.value
        })

    error && fixError("");
    }
    return(
        <>
        <Header/>
        <br></br>
        <div class="box5">
            <form onSubmit={submit}>
                <h1>Login Page</h1>
                <input type="email" name="email" placeholder="Email" onChange={change}></input><br></br>
                <input type="password" name="password" placeholder="Password" onChange={change}></input><br></br>
                <button type="submit">Login</button>

                {error ? <p style={{color:"red"}}>{error}</p>:null}
            </form>
        </div>
        </>
    )

}

export default Login;