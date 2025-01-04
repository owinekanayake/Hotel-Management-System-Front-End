import axios from "axios";
import { useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
function UserTag() {
    
    const [name, setName] = useState("")
    const [userFound , setUserFound] = useState(false)
    const token = localStorage.getItem("token")
    
    useEffect(
    ()=> {
        if(token != null){
        axios.get(import.meta.env.VITE_BACKEND_URL+"/api/user/",
        {
            headers : {
                Authorization : "Bearer " + token,
                "Content-Type" : "application/json"
            }
        }).then((res)=>{
            console.log(res);
            setName(res.data.user.firstName + " " + res.data.user.lastName);
            setUserFound(true);
        })
    }else{
        setName("")
    }
    },[userFound]
    )

    return (
        <div className="ml-auto mr-12  flex items-center cursor-pointer">
                <img src="/profilephoto.png" className="rounded-full w-[43px] h-[43px] bg-white"/>
                <span className="text-black ml-5 mr-0 font-bold">{name}</span>
                <button
                onClick={()=>{
                    localStorage.removeItem("token")
                    setUserFound(false);
                    
                }}
                > Log Out</button>
        </div>
    )
}

export default UserTag;