import { forwardRef } from "react"

const Input = forwardRef((props, ref) => {
 const {type, placeholder, name} = props;
 return (
  <input 
  type={type} 
  className="text-sm border w-full py-2 px-3 border-slate-700 rounded placeholder: opacity-50" 
  id={name} 
  name={name} 
  placeholder={placeholder} 
  ref={ref} />
 )
})

export default Input