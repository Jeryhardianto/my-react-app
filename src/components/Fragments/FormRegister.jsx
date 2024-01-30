import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
 return (

   <form action="">
     <InputForm 
          label="Full Name" 
          name="fullname" 
          type="text" 
          placeholder="John Doe"
       />
       <InputForm 
          label="Email" 
          name="email" 
          type="email" 
          placeholder="example@ex.com"
       />
       <InputForm 
          label="Password" 
          name="password" 
          type="password" 
          placeholder="******"
       />
        <InputForm 
          label="Confirm Password" 
          name="confirmPassword" 
          type="password" 
          placeholder="******"
       />
       <Button classname="bg-blue-500 w-full">Register</Button>
     </form> 

 )
}

export default FormRegister