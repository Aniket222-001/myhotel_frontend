import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
export default function Signup() {
    const [name,setname] = useState();
    const [email,setemail] = useState();
    const [password,setpassword] = useState();
    const [redirect,setredirect] = useState(false)

    async function Registeruser(ev){
        ev.preventDefault();
        try{
        await axios.post('/register',{
            name,
            email,
            password
        })
        alert('successfully registered')
        setredirect(true)
        }catch(e){
        alert('email is already present')
        }
    }
    if(redirect){
      return <Navigate to={'/Login'}></Navigate>
    }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={Registeruser}>
          <input type="text" placeholder="John Doe" value={name} onChange={ev=>setname(ev.target.value)}/>
          <input type="email" placeholder="your@email.com" value={email} onChange={ev=>setemail(ev.target.value)} />
          <input type="password" placeholder="password" value={password} onChange={ev=>setpassword(ev.target.value)} />
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already have an account {" "}
            <Link className="underline text-black" to={"/Login"}>
              Login now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
