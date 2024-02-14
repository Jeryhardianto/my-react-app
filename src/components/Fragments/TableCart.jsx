
import { useEffect, useRef, useContext } from 'react'
import { useSelector } from 'react-redux'
import { DarkMode } from '../../context/DarkMode'
import { useTotalPrice, useTotalPriceDispatch } from '../../context/TotalPriceContext.jsx';

const TableCart = (props) => {
 const { products } = props
 const cart = useSelector((state) => state.cart.data)
 const {isDarkMode} = useContext(DarkMode)
 const dispact = useTotalPriceDispatch()
 const { total } = useTotalPrice()


 useEffect(() => {
  if(products.length > 0 && cart.length > 0){
    // setTotalPrice(cart.reduce((acc, item) => acc + ite m.price * item.qty, 0))
    let sum = cart.reduce((acc, item) => {
      const product = products.find((product) => product.id === item.id)
      return acc + product.price * item.qty
    }, 0)
    dispact({
      type: 'UPDATE',
      payload: {
        total: sum,
      }
    })
    localStorage.setItem('cart', JSON.stringify(cart))
  }
 }, [cart, products])

 const totalPriceRef = useRef(null)
 useEffect(() => {
  if(cart.length > 0){
    totalPriceRef.current.style.display = 'table-row'
  }else{
    totalPriceRef.current.style.display = 'none'
  }
 })

  return(
   <table className={`table-auto text-left border-separate border-spacing-x-5 ${isDarkMode && "text-white"}`}>
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
             <td>{product.title.substring(0, 20)}...</td>
             <td>${" "}{product.price.toLocaleString('id-ID')}</td>
             <td>{item.qty}</td>
             <td>
             ${" "}{
             (product.price * item.qty).toLocaleString('id-ID')}
             </td>
           </tr>
         )
       })}
     <tr ref={totalPriceRef}>
       <td colSpan={3}><b>Total Price</b></td>
       <td>
      <b> ${" "}{total.toLocaleString('id-ID')}</b>
       </td>
     </tr>
   </tbody>
 </table>
  )
};

export default TableCart