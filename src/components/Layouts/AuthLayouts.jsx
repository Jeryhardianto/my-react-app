import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayout = (props) => {
 const { children, title, type } = props;
 const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
 return (
  <div className={`w-full h-screen flex justify-center items-center ${isDarkMode && "bg-slate-900"}`}>
    <div className="w-full max-w-xs">
      <button className="absolute right-2 top-2 bg-blue-600 p-2 rounded text-white" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light" : "Dark"}
      </button>
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