import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef } from "react";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.password.value

    localStorage.setItem('email', email)
    localStorage.setItem('password', password)

    window.location.href = '/products'

  }

  const emailRef = useRef(null)

  useEffect(() => {
    emailRef.current.focus()
  }, [])
 return (
   <form onSubmit={handleLogin}>
       <InputForm 
          label="Email" 
          name="email" 
          type="email" 
          placeholder="example@ex.com"
          ref={emailRef}
       />
       <InputForm 
          label="Password" 
          name="password" 
          type="password" 
          placeholder="******"
       />
       <Button classname="bg-blue-500 w-full" type="submit">Login</Button>
     </form> 
 )
}

export default FormLogin