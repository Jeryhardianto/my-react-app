import { useLogin } from "../hooks/useLogin.jsx"

const ProfilePage = () => {
 const username = useLogin()
 return (
   <div className=" text-center text-3xl font-bold items-center">
    <h1>Proifle </h1>
    <p>Username : {username}</p>
   </div>
 )
}

export default ProfilePage