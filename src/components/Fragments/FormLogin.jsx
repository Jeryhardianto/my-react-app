
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service.js";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("")
  const handleLogin = (e) => {
    e.preventDefault()
    // localStorage.setItem('username', username)
    // localStorage.setItem('password', password)

    // window.location.href = '/products'
    const data = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    login(data, (status, res) => {
      if(status){
        localStorage.setItem('token', res)
        window.location.href = '/products'
      }else{
        setLoginFailed(res.response.data)
      }
    })

  }

  const usernameRef = useRef(null)

  useEffect(() => {
    usernameRef.current.focus()
  }, [])
 return (
   <form onSubmit={handleLogin}>
       
       <InputForm 
          label="Username" 
          name="username" 
          type="text" 
          placeholder="John Doe"
          ref={usernameRef}
       />
       <InputForm   
          label="Password" 
          name="password" 
          type="password" 
          placeholder="******"
       />
       <Button classname="bg-blue-500 w-full" type="submit">Login</Button>
       {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
     </form> 
 )
}

export default FormLogin