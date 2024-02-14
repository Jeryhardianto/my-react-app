import { Fragment, useEffect, useState, useContext } from "react"
import CardProducts from "../components/Fragments/CardProducts.jsx"
import { getProducts } from "../services/product.service.js"
import { useLogin } from "../hooks/useLogin.jsx"
import TableCart from "../components/Fragments/TableCart.jsx"
import Navbar from "../components/Layouts/Navbar.jsx"
import { DarkMode } from "../context/DarkMode"

// const email = localStorage.getItem('email')

const ProductsPage = () => {
  // const [cart, setCart] = useState([])
  // const [totalPrice, setTotalPrice] = useState(0)
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
  const [products, setProducts] = useState([])

  const username = useLogin()

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem('cart')) || [])
  // }, [])



useEffect(() => {
    getProducts((data) => {
      setProducts(data)
    }) 
}, [])



 return (
 <Fragment>
      <Navbar />
    <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}>
      <div className="w-3/4 flex flex-wrap">
      {products.length > 0 &&
      products.map((product) => (
        <CardProducts key={product.id}> 
        <CardProducts.Header image={product.image} id={product.id} />
        <CardProducts.Body title={product.title}>
          {product.description}
        </CardProducts.Body>
        <CardProducts.Footer 
          price={product.price} 
          id={product.id}
        />
        </CardProducts>
      ))}
      </div>
      <div className="w-2/4">
        <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
       <TableCart products={products}/>

      </div>
    
   </div>
 </Fragment>
  )
}

export default ProductsPage