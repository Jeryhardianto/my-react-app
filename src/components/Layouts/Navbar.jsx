import { useLogin } from "../../hooks/useLogin.jsx";
import Button from "../Elements/Button/index.jsx";
import { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext.jsx";

const Navbar = () => {
  const username = useLogin()
  const [totalCart, setTotalCart] = useState(0)
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
  const cart = useSelector((state) => state.cart.data)
  const { total } = useTotalPrice()

  useEffect(() => {
     const sum = cart.reduce((acc, item) => acc + item.qty, 0)
     setTotalCart(sum)
  },[cart])

  const handleLogout = () => {
   localStorage.removeItem('email')
   localStorage.removeItem('password')
   localStorage.removeItem('token')
   window.location.href = '/login'
 }

  return (
   <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
   {username}
   <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
 
   <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5">
    Item: {totalCart} | Price : $ {total}
   </div>
   <Button classname="bg-black px-10 mx-5 rounded text-white" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light" : "Dark"}
      </Button>
 </div>
  );
}

export default Navbar;