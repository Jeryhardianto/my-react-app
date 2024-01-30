import Button from "../Elements/Button/index.jsx"

const CardProducts = (props) => {
 const { children } = props
 return (
  <div className="w-full max-w-xs bg-white bg-gray-900 border border-gray-200 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
   {children}
  </div>
 )
}

const Header = (props) => {
 const { image } = props
 return (
  <a href="">
  <img src={image} className="p-8 rounded-t-lg h-60 w-full object-cover" alt="product" />
 </a>
 )
}

const Body = (props) => {
 const { children, title } = props
 return (
  <div className="px-5 pb-5 h-full">
  <a href="">
   <h5 className="text-xl font-semibold tracking-tight text-white">
    {title.substring(0, 20)} ...
   </h5>
   <p className="text-m text-white">
    {children.substring(0, 100)} ...
   </p>
  </a>
 
 </div>
 )
}

const Footer = (props) => {
 const {price, handleAddToCart, id} = props
 return (
  <div className="flex items-center justify-between px-5 pb-5">
  <span className="text-xl font-bold text-white">Rp.{" "}{price.toLocaleString('id-ID')}</span>
  <Button classname="bg-blue-600"
  onClick={() => handleAddToCart(id)}
  >Add to cart</Button>
</div>  
 )
}

CardProducts.Header = Header
CardProducts.Body = Body
CardProducts.Footer = Footer

export default CardProducts