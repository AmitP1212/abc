import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"

export default function Login(props)
{
    let [uname,setUname] = useState("")
    let [password,setPassword] = useState("")
    let navigate = useNavigate()
    
    const dispatch= useDispatch()
   
    function check()
    {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({
                uname:uname,
                password:password})
            };
        fetch('http://localhost:8080/check', requestOptions)
        .then(response => response.json())
        .then(data =>{
             if(data.result === "OK")
             {
                dispatch({type:"save",payload:{uname:uname,password:password}})
                navigate("/home")
             }
        } );
                
        
        
        /*if(uname === "prachi" && password === "123")
        {
            console.log("in if",uname,password)
            navigate("/home")
        }*/
    }


    return(
        <div>
        <pre>
           Login :  <input type="text" name="uname" 
           onBlur={(e)=>{setUname(e.target.value)}}
           />
           Password : <input type="password" name="password"
           onBlur={(e)=>{setPassword(e.target.value)}}
           />
            <input type="button"  value="login"
            onClick={check}
            />
            </pre>
        </div>
    )
}