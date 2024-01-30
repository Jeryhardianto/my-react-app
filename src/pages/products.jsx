import { Fragment, useEffect, useState, useRef } from "react"
import CardProducts from "../components/Fragments/CardProducts.jsx"
import Button from "../components/Elements/Button/index.jsx" 
import { getProducts } from "../services/product.service.js"


const email = localStorage.getItem('email')

const ProductsPage = () => {
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || [])
  }, [])

  useEffect(() => {
    if(products.length > 0 && cart.length > 0){
      // setTotalPrice(cart.reduce((acc, item) => acc + ite m.price * item.qty, 0))
      let sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id)
        return acc + product.price * item.qty
      }, 0)
      setTotalPrice(sum)
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart, products])
  
  const handleLogout = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    window.location.href = '/login'
  }

  const handleAddToCart = (id) => {
  
//     setCart([
//    // data lama masukan
//    ...cart,
//    // data baru
//    {
//      id : id,
//      qty : 1
//    }
//  ])

   if(cart.find((item) => item.id === id)){
        setCart(
          cart.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item)
        )
   }else{
        setCart([...cart, {id, qty: 1}])
   }
  }

// useRef
const cartRef = useRef([
 JSON.parse(localStorage.getItem('cart')) || []
])

useEffect(() => {
    getProducts((data) => {
      setProducts(data)
    }) 
}, [])

const handleAddToCartRef = (id) => {
  cartRef.current = [...cartRef.current, {id, qty: 1}]
  localStorage.setItem('cart', JSON.stringify(cartRef.current))
}

const totalPriceRef = useRef(null)
useEffect(() => {
  if(cart.length > 0){
    totalPriceRef.current.style.display = 'table-row'
  }else{
    totalPriceRef.current.style.display = 'none'
  }
})

 return (
 <Fragment>
    <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
      {email}
      <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
    </div>
    <div className="flex justify-center py-5">
      <div className="w-3/4 flex flex-wrap">
      {products.length > 0 &&
      products.map((product) => (
        <CardProducts key={product.id}> 
        <CardProducts.Header image={product.image} />
        <CardProducts.Body title={product.title}>
          {product.description}
        </CardProducts.Body>
        <CardProducts.Footer 
          price={product.price} 
          id={product.id}
          handleAddToCart={handleAddToCart} 
        />
        </CardProducts>
      ))}
      </div>
      <div className="w-2/4">
        <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
       
        <table className="table-auto text-left border-separate border-spacing-x-5">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 && 
            cart.map((item) => {
                const product = products.find((product) => product.id === item.id)
                return (
                  <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>Rp.{" "}{product.price.toLocaleString('id-ID')}</td>
                    <td>{item.qty}</td>
                    <td>
                    Rp.{" "}{
                    (product.price * item.qty).toLocaleString('id-ID')}
                    </td>
                  </tr>
                )
              })}
            <tr ref={totalPriceRef}>
              <td colSpan={3}><b>Total Price</b></td>
              <td>
             <b> Rp.{" "}{totalPrice.toLocaleString('id-ID')}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    
   </div>
 </Fragment>
  )
}

export default ProductsPage