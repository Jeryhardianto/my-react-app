const Button = (props) => {
 const { 
  classname="bg-cyan-500", 
  children, 
  onClick = () => {}, 
  type="button"
 } = props;

 return (
   <button className={`h-10  ${classname} hover:bg-sky-700 text-white font-semibold px-6 rounded`}
   type={type}
   onClick={onClick}
   >
     {children}
   </button>
 )
}

export default Button