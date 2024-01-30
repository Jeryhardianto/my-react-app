import { Link } from "react-router-dom";

const AuthLayout = (props) => {
 const { children, title, type } = props;
 return (
  <div className='flex justify-center min-h-screen items-center'>
    <div className="w-full max-w-xs">
  <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
  <p htmlFor="" className="font-medium text-slate-600 mb-8">Welcome, please enter your details</p> 
  {children}
  <p className="text-sm mt-5 text-center">
    {type === "login" ? "Don't have an account? " 
    : "Already have an account? "} {" "}

    {type === "login" ? (
        <Link to="/register" className="text-blue-500 font-bold">Register</Link>
    ) : (
        <Link to="/login" className="text-blue-500 font-bold">Login</Link>
    )}

    </p>
</div> 
</div>

 )
}

export default AuthLayout